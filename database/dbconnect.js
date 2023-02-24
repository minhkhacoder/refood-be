var mysql = require('mysql');
var dbConnect = mysql.createConnection({
    connectionLimit: 100, //important
  host: "fdb1029.awardspace.net",
  user: "4268738_refooddb",
  password: "Vominhkha27",
  database: "4268738_refooddb",
  debug: false,
});

dbConnect.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});
module.exports = dbConnect;
