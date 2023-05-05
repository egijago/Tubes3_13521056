const mysql = require('sync-mysql');

class DBController {
    constructor() {
        this.connection = new mysql({
        host     : 'sql12.freesqldatabase.com',
        user     : 'sql12616139',
        password : 'aPJYRLhvJy',
        database : 'sql12616139'
        });
    }

    getQnA() {
        let query = `
            SELECT *
            FROM qna;
        `;
        
        return this.connection.query(query);
    }

    getHistory(chat) {
        let query = `
            SELECT question, answer 
            FROM history
            WHERE id_chat = ${chat};
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

    insertRecord(chat, question, answer) {
        if (question === undefined 
            || answer === undefined
            || question.charCodeAt(0) <= 20) {
            return;
        }
        let validate = this.connection.query(`
            SELECT * FROM chat WHERE id_chat = ${chat};
        `);
        if (validate.length == 0) {
            this.connection.query(`
            INSERT INTO chat(topic)
            VALUE ('${question}'); 
        `);
        }


        let query = `
            INSERT INTO history(id_chat, question, answer) 
            VALUES ('${chat}', '${question}', '${answer}');
        `;
        
        return this.connection.query(query);
    }

    getChat() {
        let query = `
            SELECT *
            FROM chat;
        `;
        
        return this.connection.query(query);
    }

    getMaxChatId() {
        let query = `
            SELECT MAX(id_chat) as id_chat
            FROM chat;
        `;
        return this.connection.query(query);
    }



}

module.exports = DBController;
