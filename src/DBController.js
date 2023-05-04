const mysql = require('sync-mysql');

class DBController {
    constructor() {
        this.connection = new mysql({
        host     : 'localhost',
        user     : 'root',
        password : '1010',
        database : 'chatbot'
        });
    }

    getQnA() {
        let query = `
            SELECT *
            FROM qna;
        `;
        
        return this.connection.query(query);
    }

    getHistory(user) {
        let query = `
            SELECT question, answer 
            FROM history
            WHERE user = ${user};
        `;
        
        return this.connection.query(query);
    }

    getAnswer(id) {
        let query = `
            SELECT answer 
            FROM qna
            WHERE id_qna = ${id};
        `;
        
        return this.connection.query(query);
    }

    setAnswer(id, answer) {
        let query = `
            UPDATE qna 
            SET answer = '${answer}'
            WHERE id_qna = ${id};
        `;
        
        return this.connection.query(query);
    }

    deleteQnA(id) {
        let query = `
            DELETE FROM qna
            WHERE id_qna = ${id};
        `;
        
        return this.connection.query(query);
    }

    insertQnA(question, answer) {
        let query = `
            INSERT INTO qna (question, answer)
            VALUES ('${question}', '${answer}');
        `;
        
        return this.connection.query(query);
    }

    getQnAId(question) {
        let query = `
            SELECT id_qna
            FROM qna
            WHERE question = '${question}';
        `;
        
        return this.connection.query(query);
    }

    deleteRecord(user) {
        let query = `
            UPDATE qna 
            SET answer = '${answer}'
            WHERE id_qna = '${user}';
        `;
        
        return this.connection.query(query);
    }

    insertRecord(user, question, answer) {
        let query = `
            INSERT INTO history(user, question, answer) 
            VALUES ('${user}', '${question}', '${answer}');
        `;
        
        return this.connection.query(query);
    }

}

module.exports = DBController;
