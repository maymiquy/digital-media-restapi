const { Op } = require('sequelize')
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

    static async searchByTitle(title) {
        return new Promise((resolve, reject) => {
            const query = `
            SELECT * FROM news
            WHERE title LIKE '%${title}%'
          `;

            db.query(query, (error, results) => {
                const [news] = results

                if (error) {
                    console.error('Error searching for data:', error);
                    return reject('Internal server error');
                } else {
                    return resolve(news);
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