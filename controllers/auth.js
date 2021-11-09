const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
    host: process.env.DataBase_Host,
    user: process.env.DataBase_User,
    password: process.env.DataBase_Password, //enter your password , create .env file to store any sensitive information 
    database: process.env.DataBase
});

exports.register = (req,res) => {
  console.log(req.body);
  
  const  { name, email, password , passwordConfirm } = req.body;
  const regex_paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,25}$/;
  db.query('SELECT email FROM users WHERE email = ?',[email], async(error, results) =>{
      if(error){
          console.log(error);
      }

      if( results.length > 0){
          return res.render('register',{
              message: "This Email is already in use"
          })
      }
      else if(password !== passwordConfirm){
        return res.render('register',{
            message: "Passwords do not match !"
        })
        
      }
      if(!(regex_paswd.test(password))){
        return res.render('register',{
            message: " Wrong password format ",
          })
      }
      let hashedPassword = await bcrypt.hash(password, 8);
      console.log(hashedPassword);

      db.query('INSERT INTO users SET ?',{ name: name, email: email, password: hashedPassword} , (error,results) =>{
          if(error){
              console.log(error);
          }
          else{
              console.log(results)
            return res.render('register',{
                message: "User Registered"
            })
          }

      })
  });


}

exports.login = async(req,res) => {
    console.log(req.body);
    console.log("....")
    try{
    const {email,password} = req.body;

    db.query('SELECT email from users WHERE email=?',[email], async(error,results) => {
        if(error){
            console.log(error);
        }

        if(results.length==0){
            console.log("User does not exist")
        return res.render('login',{
             message : "User Does not exist"
         })
        }
        else{
    db.query('SELECT * from users WHERE email=?',[email],async(error,results) =>{
        if(error){
            console.log(error);
        }
        
         if(await bcrypt.compare(password,results[0].password)){
            console.log("Logged in")
            const val="SELECT * from counsellors";
            db.query(val,(error,records)=>{
                if(error){
                    console.log(error);
                }
                else{
            console.log(records[0].name);
           res.render('counsellor.ejs',{title : 'Counsellors', records:records,em:req.body.email});
                }
            });
         }
         else{
             console.log(password)
             console.log("Incorrect")
          return  res.render('login',{
                message: "Incorrect Password"
            });
         }
    })
    
}
})
    }
    catch{
        console.log(error)
    }
}

exports.getSlots = async(req,res)=>{

}
