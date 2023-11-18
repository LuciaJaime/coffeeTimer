const mysql = require('mysql');
const config = require('../config');
const { error } = require('../red/responses');


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
            return error ? reject(error) : resolve(result)
        })
    })
}
function create(table, item) { }
function read(table, id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id = ${id}`, (error, result) => {
            return error ? reject(error) : resolve(result)
        })
    })
}
function update(table, id) { }
function remove(table, body) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ${table} WHERE id = ?`, body.id, (error, result) => {
            return error ? reject(error) : resolve(result)
        })
    })
}


module.exports = {
    getAll,
    create,
    read,
    update,
    remove
}