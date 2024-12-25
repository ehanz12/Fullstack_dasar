const express = require("express")
const mysql = require("mysql")
const BodyParser = require("body-parser")

const app = express();
app.use(BodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.set("views", "views");

const db = mysql.createConnection({
    host:"localhost",
    database:"belajarfullstack",
    user:"root",
    password:"",
})
db.connect((err)=> {
    if (err) throw err
    console.log("database is run..")

    app.get("/", (req, res) => {  // nampilin atau bikin port ke browser
        const sql = "SELECT * FROM siswa" 
        db.query(sql, (err, result)=> {
            const users = JSON.parse(JSON.stringify(result))
                res.render("index", {users : users, title: "DAFTAR MURID"})
             })
            })

        app.post("/tambah", (req, res) => {  // nampilin atau bikin port ke browser
            const insert = `INSERT INTO siswa (nama, kelas) VALUES ('${req.body.nama}', '${req.body.kelas}');`
                db.query(insert, (err, result)=> {
                     if (err) throw err
                     res.redirect("/");
                  })         
             })
})        
//buat mengambil data dari database
app.listen(8000, () => {
    console.log("Server is running")
})