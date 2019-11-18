import mysql from "mysql";

export default class DBManager {
    constructor() {
        this.config = {
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        }
    }

    exec(query, params) {
        return new Promise((resolve, reject) => {
            const connection = mysql.createConnection(this.config);
            connection.connect();

            const callback = (error, rows, fields) => {
                if (error) reject(error);
                else resolve(rows);

                connection.end();
            }

            if (params) connection.query(query, params, callback);
            else connection.query(query, callback);
        });
    }
}