
const mysql = require('mysql');


let connection = mysql.createConnection({
    host: 'rtsuit.mysql.database.azure.com',
    user: 'rtsuit@rtsuit',
    password: 'Ravtech123!',
    port:3306,

});


// var conn = mysql.createConnection({host: "rtsuit.mysql.database.azure.com", user: "rtsuit@rtsuit", password: "Ravtech123!", database: {your_database}, port: 3306, ssl:{ca:fs.readFileSync({ca-cert filename})}});


connection.connect(function (err) {
    if (!!err) {
        console.log('error: ' + err.message);
    } else {
        console.log("connect");
    }
});
let createdatabase = ()=>{

    let table = `create Database myproject`
        return table
}
  

  connection.query(createdatabase(), (err, result, files, rows) => {
    if (err) {
      console.log('error query ' + err.message);
    } else {
      console.log("succes ", result)

    }
  })