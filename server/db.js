const mysql=require('mysql2')

const pool=mysql.createPool({
    host:'192.168.43.207',
    user:'root',
    password:'root',
    database:'productlist',
    port:9090,
    connectionLimit:20
})
module.exports=pool

