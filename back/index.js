const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = 8000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "recruitment",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});



app.post("/register", (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const sqlVerify = `SELECT *FROM candidates WHERE email="${email}"`;

  connection.query(sqlVerify, (err, result) => {
    if (err) throw err;
    if (result.length) {
      console.log("EMAIL EXISTANT");
      let isEmail = { message: "Email existant" };
      res.send(isEmail);
    } else {
      const sqlInsert = "INSERT INTO candidates (username, email, password) VALUES (?,?,?)";
      const values= [username, email, password]
      connection.query(sqlInsert, values, (err, result) => {
        if (err) throw err;
        let idUser = result.insertId;
        console.log(idUser);
      })
      let isEmail = { messageGood: "Inscription réusie, vous allez être redirigé" };
      res.send(isEmail);
    }
  });
});


app.post("/login", (req, res) => {
  console.log(req.body);
  const {email, password} = req.body;
  const sql = `SELECT idUser, username FROM candidates WHERE email="${email}" AND password="${password}" `
  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (!result.length) {
      console.log("USER INCORRECT");
      let doesExist = {message: "Email et/ou mot de passe incorrect"}
      res.send(doesExist);
    } else {
      let idUser = result[0].idUser
      const sqlData = `SELECT candidates.username, candidates.free, candidates.preference, candidates.email, skills.nameSkill,
      user_skill.level
      FROM candidates, skills, user_skill
      WHERE candidates.idUser = user_skill.idUser
      and user_skill.idSkill = skills.idSkill
      AND candidates.idUser = ${idUser}`
      connection.query(sqlData, (err, result) => {
        if (err) throw err
        console.log(result);
        res.send(JSON.stringify(result))
      })
    }
  })
})


app.listen(port, () => {
  console.log(`serveur Node écoutant sur le port ${port}`);
});