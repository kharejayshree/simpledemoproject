import  mysql from "mysql2";

 export const con=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"registration"
});

con.connect((err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Connected");
    }
})

//module.exports=con;