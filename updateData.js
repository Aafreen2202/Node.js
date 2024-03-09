const mysql = require('mysql2');

//connection configuration
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"demo"
});

//connect to database
connection.connect(function(err){
    if(err) throw err;
    console.log('You are connected to database');
});

//update data
let params = {
    age:25
}

connection.query('UPDATE users SET age=? WHERE id =?',[params.age,2], function(error,results){
    if(error) throw error;
    console.log('Data updated');
});

