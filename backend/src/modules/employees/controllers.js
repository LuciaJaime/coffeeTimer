const db = require('../../db/mysql')




function getAll() {
    return db.getAll('employees')
}

function getOne(id) {
    return db.read('employees', id)
}

function remove(body) {
    return db.remove('employees', body)
}



module.exports = {
    getAll,
    getOne,
    remove
}