// import { createConnection } from 'mysql';

// const con= createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"transport"
// });

// con.connect((err) => {
//     if(err)
//     {
//         console.warn("error")
//     }
//     else{
//         console.warn("connect")
//     }

// });

// // con.query("select * from  names",(err,result)=>{
// //     console.warn("result",result)
// // })

// import express from 'express';

// const app = express();

//  app.get('/',(req, res) => {
//     res.send('Server is ready');
//  });
//  //get a list of 2 joke
// //  app.get('/joke',(req,res) => {
// //     const jokes =[
// //         {
// //         id:1,
// //         title: 'a jokes',
// //         content: 'this is a jokes'
// //         }, 
// //         {
// //             id:2,
// //             title: 'a jokes',
// //             content: 'this is a jokes'
// //             }

// //     ];
// // });
    
//  const port = process.env.PORT || 3000;

//  app.listen(port, () =>{
//     console.log(`Server at http://localhost:${port}`);
//  }
// );


//importing express
import express from "express";
import cors from "cors";
import {con} from "./db.js";
//const con = require("./db");
//import { createConnection } from "mysql";
//variable for express
const app = express();
//const con = require('./database');
//const bodyparser=require('body-parser');
//import { json as _json } from 'body-parser';

//app.use(_json());

 app.use(cors());
app.use(express.json());
 //app.use( bodyparser.json());
 //app.use(bodyparser.urlencoded({extended:true}));

 

// const db = createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "registration"
// });


// db.connect((err) => {

//     if (err) {
//         console.log('error connecting to mysql:', err);
//         return;
//     }
//     console.log('connected to Mysql');
// });

// //the correct code



//code for he employee module
// app.post("/register ", (req, res) => {
//     const sql = "SELECT studentFirstName,middleName, last Name, class,  division,guardianName,guardianMobile,alternateMobile,pickupAddress,dropAddress,emergencyMobile, dob(date, '%Y-%m-%d') AS date FROM transport";
//     db.query(sql, (err, result) => {
//         if (err) {
//             console.log("error executing", err);
//             // return res.status(500).json({ error: 'internal server Error', details: err.message });
//         }else{
//             res.send(result)
//         }
//         // return res.json(data);
//     });
// });
//addition of employee module
app.post('/register',async  (req, res) =>{
  const sql = "INSERT INTO transport (`studentFirstName`,`middleName`,`lastName`,`dob`,`class`,`division`,`guardianName`,`guardianMobile`,`alternateMobile`,`pickupAddress`,`dropAddress`,`emergencyMobile`) VALUES (?)";
  const FormData = [
    req.body.studentFirstName,
    req.body.middleName,
    req.body.lastName,
    req.body.dob,
    req.body.class,
    req.body.division,
    req.body.guardianName,
    req.body.guardianMobile,
    req.body.alternateMobile,
    req.body.pickupAddress,
    req.body.dropAddress,
    req.body.emergencyMobile,

  ]
  await con.promise().query(sql,[FormData],(err, value) =>{
    if (err) return res.json(err);
    else
    return res.json(value);
  })
  
})
     
//update of employee
// app.put('/update', (req, res) => {
  
//   const guardianMobile = req.body.guardianMobile;
//   const {
//     studentFirstName,
//     middleName,
//     lastName,
//     dob,
//     Class,
//     division,
//     guardianName,
//     alternateMobile,
//     pickupAddress,
//     dropAddress,
//     emergencyMobile,
//   } = req.body;

  // const sql =
  //   'UPDATE transport requisition form  SET  Student_Name = ?, Middle_Name = ?, Last_Name = ?, Class=?, Division = ?, Guardian_Name = ?, Alternate_Mobile = ?, Picup_Address = ?, Drop_Address = ?, Emergency_Mobile = ?,  dateof_Birth = ? WHERE Guardian_Mobile = ?';
  // const values = [studentName,middleName,lastName,Class, division, dob,guardianName,alternateMobile,pickupAddress,dropAddress,emergencyMobile,guardianMobile];

  // db.query(sql, values, (err, result) => {
  //   if (err) {
  //     console.error('Error updating data:', err);
  //     return res.status(500).json({ error: 'Internal Server Error' });
  //   }
    //only send the request once
      //res.send(result);
      
    
// });
// });
//delete of employee
// app.delete('/delete', (req, res) => {
//   const Id = req.body.Id;
//   const sql = 'DELETE FROM employee WHERE Id = ?';

//   db.query(sql, Id, (err, result) => {
//     if (err) {
//       console.error('Error deleting data:', err);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     res.status(200).json({ success: true });
//   });
// });

// app.get("/",(req,res)=>{
//    res.send({message:"type"})
//  })
 
 app.listen(3005, () => {
     console.log("3005 port running, yipeeee");
 }
 )
 
 con.connect((err) => {
   if (err) {
     console.error('Error connecting to MySQL:', err.message);
     return;
   }
 
   console.log('Connected to MySQL');
 });