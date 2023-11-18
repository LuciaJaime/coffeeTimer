require('dotenv').config();

// All system global variables.

module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '',
        db: process.env.MYSQL_DB || ''
    }
}