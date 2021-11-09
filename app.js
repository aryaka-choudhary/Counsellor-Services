const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: './.env'});



const app = express(); //to start a server

const db = mysql.createConnection({
    host: process.env.DataBase_Host,
    user: process.env.DataBase_User,
    password: process.env.DataBase_Password, //enter your password , create .env file to store any sensitive information 
    database: process.env.DataBase
});

const publicDirectory = path.join(__dirname,"./public");
app.use(express.static(publicDirectory));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false}));
// Parse JSON Bodies (as sent by API  clients)
app.use(express.json());
app.set('view engine', 'ejs');
app.set('view engine', 'hbs');

db.connect( (error) => {
     if(error){
         console.log(error)
     } 
     else{
         console.log("MySQL Connected")
     }
})

//Defining Routes
app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));
app.use( express.static( "public" ) );

app.listen(8000, () => {
    console.log("Server Started at Port 8000");
})
