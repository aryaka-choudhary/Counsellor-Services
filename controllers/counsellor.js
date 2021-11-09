const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
    host: process.env.DataBase_Host,
    user: process.env.DataBase_User,
    password: process.env.DataBase_Password, //enter your password , create .env file to store any sensitive information 
    database: process.env.DataBase
});

exports.getSlots = async(req,res) =>{
    console.log("Here");
    const counsellorId = req.params['id'];
    console.log(counsellorId);
    const qry = "SELECT * from slots WHERE slot_ID IN (" + ((counsellorId*3)-2) + "," + ((counsellorId*3)-1) + "," + (counsellorId*3) + ")"; 
    console.log(qry);    
    db.query(qry, (error,records)=>{
        if(error){
            console.log(error);
        }
        else{
        res.render('slot.ejs',{title: "Slots",records:records});
        }
    })   
}

exports.bookSlot = async(req,res) =>{
    const slotId = req.params['id'];
    console.log(slotId);
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();

    // today = yyyy+ '-' + mm + '-' + dd;
    // console.log(today);
    const qry1 = "UPDATE slots SET is_booked = 'Not available' WHERE slot_ID="+slotId;
    //const qry2 = "UPDATE slots SET date = "+today+" WHERE slot_ID="+slotId;
    db.query(qry1,(error,result) => {
        res.render('booked.ejs');
    })
    //db.query(qry2);
    // setTimeout(function(){
    //     const q = "UPDATE slots SET is_booked = 'Available' "
    //     db.query(qry);
    // },10000);
}