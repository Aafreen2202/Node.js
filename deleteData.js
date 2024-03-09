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

//delete data
connection.query('DELETE FROM users WHERE id=?',[3], function(error,results){
    if(error) throw error;
    console.log('Data deleted successfully');
    console.log(results);
});