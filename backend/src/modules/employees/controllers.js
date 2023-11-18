const db = require('../../db/mysql')




function getAll() {
    return db.getAll('employees')
}




module.exports = {
    getAll,
}