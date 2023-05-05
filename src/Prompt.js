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
        this.db = new DBController();
        const userState = this.db.getChat();
        this.chat = userState[userState.length - 1].id_chat;
        this.algorithm = Prompt.BM;
    }
    
    processInsert(insert_query) {
        let question = insert_query[1];
        let answer = insert_query[2]; 
        
        // get id_qna if any match
        question = question.toLowerCase().trim();
        let questions = this.db.getQnA();
        let qPattern = new KMP(question);
        let match = false;
        let i;
        for (i = 0; i < questions.length && !match; i++) {
            match = (qPattern.match(questions[i].question.trim()));
        }
        if (match) {
            const questionId = questions[i - 1].id_qna;
            this.db.setAnswer(questionId, answer);
            return (`Pertanyaan ${question}(${questions[i - 1].question}) sudah ada! jawaban diupdate ke ${answer} `);
        } else {
            this.db.insertQnA(question, answer);
            return (`Pertanyaan ${question} telah ditambah `);
        }
    }

    processDelete(delete_query) {
        let question = delete_query[1];

        // get id_qna if any match
        question = question.toLowerCase().trim();
        let questions = this.db.getQnA();
        let qPattern = new BM(question);
        let match = false;
        let i;
        for (i = 0; i < questions.length && !match; i++) {
            match = (qPattern.match(questions[i].question.trim()));
        }
        if (match) {
            const questionId = questions[i - 1].id_qna;
            this.db.deleteQnA(questionId);
            return (`Pertanyaan ${question}(${questions[i - 1].question}) telah dihapus `);
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
        if (this.tuples.length == 0) {
            return "Database pertanyaan kosong!";
        }
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
                response += ((i+1).toString() + ") " + this.tuples[bestIdx].question + ((i == limit - 1)? '' :'\n'));
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

    systemQuery(query) {
        if (query === undefined) {
            return "oke";
        }
        const command = query.charCodeAt(0);
        switch (command) {
            case (1) :
                const chat_id = parseInt(query.slice(1));
                this.chat = chat_id;
                return 'ok';
            case (2) :
                return this.db.getMaxChatId();
            case (6) :
                this.algorithm = (this.algorithm == 1) ? 0 : 1;
                return 'ok';
            case (7) :
                return this.db.getHistory(this.chat);
            case (9) :
                return this.db.getChat();
        }
        if (query == 'status') {
            return (`chat: ${this.chat}, algorithm: ${this.algorithm == Prompt.KMP? 'KMP' : 'BM'}`);
        }
        return 0;
    }

    processQueries(inputQueries) {
        const systemResponse = this.systemQuery(inputQueries);
        if (systemResponse !== 0) {
            return systemResponse;
        }
        let response = "";
        const queries = inputQueries.toLowerCase().split('?');
        if (queries.length == 1) {
            response = (this.processQuery(queries[0].trim()));   
        } else {
            let query;
            for (let i = 0; i < queries.length - 2; i++) {
                query = queries[i];
                response += this.processQuery(query.trim()) + '\n';
            }
            query = queries[queries.length - 2];
            response += this.processQuery(query.trim());
            
            this.db.insertRecord(this.chat, inputQueries, )
        }
        this.db.insertRecord(this.chat, inputQueries, response);
        return response;
    }

    start() {
        while (true) {
            const queries = prompt("query: ");
            console.log(this.processQueries(queries));
        }
    }
}

// let p = new Prompt();
// p.processQueries('berapa ?');
module.exports = Prompt;
