const db = require('../config/dbConnection')

class News {
    static getAllData() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM news', (err, results) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(results)
                }
            })
        })
    }

    static async createData(data) {
        const id = await new Promise((resolve, reject) => {
            db.query('INSERT INTO news SET ?', data, (err, results) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve('id : ' + results.insertId)
                }
            })
        })

        const news = await this.getDataById(id)
        return news
    }

    static async updateDataById(id, data) {
        await new Promise((resolve, reject) => {
            db.query('UPDATE news SET ? WHERE id = ?', [data, id], (err, results) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(results)
                }
            })
        })

        const news = await this.getDataById(id)
        return news
    }

    static async destroyDataById(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM news WHERE id = ?', id, (err, results) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(results)
                }
            })
        })
    }

    static async getDataById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM news WHERE id = ?', id, (err, results) => {
                const [news] = results

                if (err) {
                    return reject(err)
                } else {
                    return resolve(news)
                }
            })
        })
    }

    static async search(title) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM news WHERE title LIKE '%${title}%'`, (error, results) => {

                if (error) {
                    reject({ message: 'Not found', status: 404 });
                } else {
                    resolve({ message: "Results found", data: results, status: 200 });
                }
            });
        });
    }

    static async findByCategory(category) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM news WHERE category = ?', category, (err, results) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(results)
                }
            })
        })
    }
}

module.exports = News