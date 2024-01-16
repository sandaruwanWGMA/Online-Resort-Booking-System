const {createPool} = require('mysql');


const pool = createPool({
    host: 'localhost',
    database: 'resort',
    user: 'root'

});

module.exports = pool;
