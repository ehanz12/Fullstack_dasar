const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Belajarfullstack",
});

database.connect((err) => {
    if(err) throw err;
    console.log("database conneted");
});


//? sebagai ambil data semua users
app.get("/api/v1/users", (req,res) => {
    console.log("GET API USER DI REQUEST");
    database.query("SELECT * FROM users", (err, rows) => {
        if(err) throw err;
        res.json({
            success: true,
            message: "getting users data",
            data: rows,
        })
    });
});

//? jalanin portnya di 3001
app.listen(3001, () => {
    console.log("server is running 3001");
})