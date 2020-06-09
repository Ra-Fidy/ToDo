const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()
app.use(cors())

const connexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "asdcxz1+",
    database:"todo"
})

console.log("--------------------------------------");
console.log("Connecting to the database...");
connexion.connect(error => {
    if (error) {
        console.log("Connexion error:");
        console.log(error);
        console.log("--------------------------------------");
    }
    else {
        console.log("Connexion established.");
        console.log("--------------------------------------");
    }
})

const ALL_ACTION_QUERY = "SELECT * FROM ACTION"

app.get('/', (req, res) => {
    connexion.query(ALL_ACTION_QUERY, (error, results) => {
        if (error) {
            console.log("--------------------------------------");
            console.log("Query error");
            console.log(error);
            console.log("--------------------------------------");
        }
        else res.json({
            data: results
        })
    })
})

app.listen(4000, () => console.log("Listen to port 4000"))