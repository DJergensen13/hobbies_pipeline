let express = require("express");
let app = new express();                                                                     

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"hobbies-db-instance.c5s4wcso4zp0.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "password1",
  database:"hobbies",
  port: 3306,
 },
});

app.get("/",(req,res) => {
 knex
 .select()
 .from("hobbies")
 .then((result) => {
  console.log(result);
  console.log("Daxton");
  res.send(result);
 }); 
});
app.listen(3000);
