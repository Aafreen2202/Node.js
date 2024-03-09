
const mysql = require('mysql2');

//connection configuaration

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"demo"
});

//connect to database

connection.connect(function(err){
    if (err) throw err
    console.log('You are connected to database');
});

//reading data

connection.query('SELECT * FROM users', function(error,results){
    if(error) throw error;
    console.log(results);
});




