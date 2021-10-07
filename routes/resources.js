var express = require('express');
var router = express.Router();
let mysql = require('mysql');

// let con = mysql.createConnection({
//     socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock',
//     user : 'root',
//     password : 'root',
//     host : 'localhost',
//     database : 'a10x_v0a',
//     port: "3000"
// });

router.get('/', function(req, res, next) {
    res.send('respond with a all resources');
});

router.get('/:id', function(req, res, next) {
    res.send(`respond with a all ${req.params.id}`);
});

module.exports = router;







// require('dotenv').config({path: __dirname + '/.env'})
// let mysql = require('mysql');
// const colors = require('colors');

// let con = mysql.createConnection({
//     socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock',
//     user : 'root',
//     password : 'root',
//     host : 'localhost',
//     database : 'a10x_v0a',
//     port: "3000"
// });

// // let con = mysql.createConnection({
// //     host : 'ls-7f7a531be61a2cbad33e78529bede125b07dd696.cvsr0azggnlh.us-east-1.rds.amazonaws.com',
// //     database : 'dbA10Xv00a',
// //     user : 'A11Xadmin',
// //     password : 'A10X_a((3$$2019',
// //     port: "3306"
// // });

// con.connect(err => {
//     if (err) throw err;
//     con.query("SELECT * FROM campaigns2", (err, result, fields) => {
//       if (err) throw err;
//       console.log(result);
//       app.get('/questions', (req, res) => {
//         res.json(result)
//       })
//     });
//   });
  
  
