var dbcon = require("../config/db_connection");

var connection = dbcon.getConnection();
connection.connect();

var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    connection.query("SELECT * FROM person", (err, records, fields)=> {
        if(err){
            console.log("error while fetching data!");
        }
        else{
            console.log(records);
            res.send(records);
        } 
    })
})

router.get("/:id", (req, res) => {
    connection.query("SELECT * FROM person WHERE id = "+ req.params.id, (err, records, fields)=> {
        if(err){
            console.log("error while fetching data by id!" + req.params.id);
        }
        else{
            console.log(records);
            res.send(records);
        } 
    })
})

router.post("/", (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    let country = req.body.country;

    connection.query("INSERT INTO person (id, name, country) VALUES ("+id+",'"+name+"','"+country+"')", (err, records, fields)=> {
        if(err){
            console.log("error while inserting data");
        }
        else{
            console.log(records);
            res.send(records);
        } 
    })
})

router.put("/:id", (req, res) => {
    
    let name = req.body.name;
    let country = req.body.country;

    connection.query("UPDATE person SET name ='"+name+"', country='"+country+"' WHERE id="+req.params.id, (err, records, fields)=> {
        if(err){
            console.log("error while updating data");
        }
        else{
            console.log(records);
            res.send(records);
        } 
    })
})

router.delete("/:id", (req, res) => {

    connection.query("DELETE FROM person WHERE id="+req.params.id, (err, records, fields)=> {
        if(err){
            console.log("error while updating data");
        }
        else{
            console.log(records);
            res.send(records);
        } 
    })
})


module.exports = router;