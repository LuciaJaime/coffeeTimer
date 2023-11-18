const mysql = require('mysql');
const config = require('../config')


const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.db
}

let connection;

function mySQLConnection() {
    connection = mysql.createConnection(dbconfig);
    connection.connect((err) => {
        if (err) {
            console.log('[db err]');
            setTimeout(mySQLConnection)
        } else {
            console.log('DB is running')
        }
    })
    connection.on('error', err => {
        console.log('[db err]', err)
        if (err.code === 'PROTOCOL_CONECCTION_LOST') {
            mySQLConnection();
        } else {
            throw err;
        }
    })
}

mySQLConnection();

function getAll(table) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result)
        })
    })
}
function create(table, item) { }
function read(table, id) { }
function update(table, id) { }
function remove(table, id) { }


module.exports = {
    getAll,
    create,
    read,
    update,
    remove
}