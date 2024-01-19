const mysql = require('mysql')

require('dotenv').config()

const {
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME
} = process.env

const dbConnection = mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME
})

dbConnection.connect((error) => {
    if (error) {
        console.log('Error connecting to MySQL...', error.stack)
        return
    } else {
        console.log('MySQL connected...')
        return
    }
})

module.exports = dbConnection