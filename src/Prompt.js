const prompt = require("prompt-sync")({ sigint: true });

const MathEvaluator = require('./Algorithms/MathEvaluator');
const DBController = require('./DBController');
const BM = require('./Algorithms/BM');
const KMP = require('./Algorithms/KMP');
const Date = require('./Algorithms/Date');



class Prompt {
    static THRESHOLD = 0.9;
    static BM = 0;
    static KMP = 1;
    static INSERT_EXP = /^tambahkan pertanyaan\s+(.+)\s+dengan jawaban\s+(.+)\s*/;
    static DELETE_EXP =  /^hapus pertanyaan\s+(.+)\s*/;
    static MATH_EXP = /^[+\-*/()\d\s]+$/;
    static DATE_EXP = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

    constructor() {
        this.user = 0;
        this.db = new DBController();
        this.algorithm = Prompt.BM;
    }
    
    processInsert(insert_query) {
        const question = insert_query[1];
        const answer = insert_query[2]; 
        const questionId = this.db.getQnAId(question)[0];
        if (questionId != undefined) {
            this.db.setAnswer(questionId.id_qna, answer);
            return (`Pertanyaan ${question} sudah ada! jawaban diupdate ke ${answer} `);
        } else {
            this.db.insertQnA(question, answer);
            return (`Pertanyaan ${question} telah ditambah `);
        }
    }

    processDelete(delete_query) {
        const question = delete_query[1];
        const questionId = this.db.getQnAId(question)[0];
        if (questionId != undefined) {
            this.db.deleteQnA(questionId.id_qna);
            return (`Pertanyaan ${question} telah dihapus `);
        } else {
            return (`Tidak ada pertanyaan ${question} pada database `);
        }
    }

    processDate(date_query) {
        const day = parseInt(date_query[1], 10);
        const month = parseInt(date_query[2], 10);
        const year = parseInt(date_query[3], 10);
        if (!Date.isValid(day, month, year)) {
            return ("Tanggal tidak valid! ");
        }
        return (Date.dayName(day, month, year));
    }

    processMath(math_query) {
        const math_expression = new MathEvaluator(math_query[0]);
        return (math_expression.evaluate().toString());
    }

    processQuestion(query) {
        this.tuples = this.db.getQnA();
        let question;
        if (this.algorithm == Prompt.KMP) {
            question = new KMP(query);
        } else { // algorithm == BM
            question = new BM(query);
        }
        for (const tuple of this.tuples) {
            if (question.match(tuple.question)) {
                return(tuple.answer + '\n');
            }
        }

        return this.showBestMatch(question);
    }

    showBestMatch(question) {
        let matchScore = [];
        for (let i = 0; i < this.tuples.length; i++) {
            matchScore.push([i, question.levenshteinDistance(this.tuples[i].question)]);
        }
        matchScore.sort((a, b) => b[1] - a[1]);
        if (matchScore[0][1] >= Prompt.THRESHOLD) {
            const bestIdx = matchScore[0][0];
            return (this.tuples[bestIdx].answer);
        } else {
            const limit = (this.tuples.length < 3)? this.tuples.length: 3;
            let response = (`Pertanyaan ${question.pattern} tidak ditemukan di database, apakah maksud Anda: \n`);
            for (let i = 0; i < limit; i++) {
                const bestIdx = matchScore[i][0];
                response += ((i+1).toString() + " " + this.tuples[bestIdx].question + ((i == limit - 1)? '' :'\n'));
            }
            return response;
        }
    }

    processQuery(query) {
        if (query === '') 
            return '';
        let insert_query = query.match(Prompt.INSERT_EXP);
        if (insert_query) { 
            return this.processInsert(insert_query);
        } 
        let delete_query = query.match(Prompt.DELETE_EXP);
        if (delete_query) {
            return this.processDelete(delete_query);
        } 
        let date_query = query.match(Prompt.DATE_EXP);
        if (date_query) {
            return this.processDate(date_query);
            
        } 
        let math_query = query.match(Prompt.MATH_EXP);
        if (math_query) {
            return this.processMath(math_query);
        } 
        return this.processQuestion(query);
    }

    processQueries(queries) {
        queries = queries.toLowerCase().split('?');
        if (queries.length == 1) {
            console.log(this.processQuery(queries[0].trim()))
            return;
        }
        let response = "";
        let query;
        for (let i = 0; i < queries.length - 2; i++) {
            query = queries[i];
            response += this.processQuery(query.trim()) + '\n';
        }
        query = queries[queries.length - 2];
        response += this.processQuery(query.trim());
        return (response);
    }

    start() {
        while (true) {
            const queries = prompt("query: ");
            console.log(this.processQueries(queries));
        }
    }
}

module.exports = prompt;
