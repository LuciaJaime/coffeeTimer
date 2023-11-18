const db = require('../../db/mysql')




function getAll() {
    return db.getAll('employees')
}

function getOne() {
    return db.getOne('employees', id)
}




module.exports = {
    getAll,
    getOne
}