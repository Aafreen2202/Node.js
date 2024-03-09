
const mysql = require('mysql2');

//Connection configuration
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"demo"

});

//connect to database

connection.connect(function(err){
    if(err) throw err;
    console.log("You are connected to database");
});

// inserting data
let params = {
    name:"Jack",
    age:27,
    city:"Pune"
}

connection.query('INSERT INTO users SET ?',params,
    function(error, results){
        if(error) throw error;
        console.log("Data inserted successfully");
    });

