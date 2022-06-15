const {createPool} = require('mysql');

const connection = createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'university',
    connectionLimit:10
});

// connection.query('insert into department values(12,"history")',(err,result)=> {
//     if(err){
//         return console.log(err);
//     }else{
//         return console.log(result);
//     }
// });
// connection.query('select * from department',(err,result)=> {
//     if(err){
//         return console.log(err);
//     }else{
//         return console.log(result);
//     }
// });
 module.exports = connection;

