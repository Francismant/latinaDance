const router = require("express").Router();
const bcrypt = require("bcrypt");

const connection = require("../../database/index");

module.exports = router;

router.post("/register", async (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sqlVerify = `SELECT * FROM users WHERE email=?`;
    connection.query(sqlVerify, [email], (err, result) => {
      if (err) throw err;
      if (result.length) {
        // console.log("EMAIL EXISTANT");
        let isEmail = { message: "Email existant" };
        res.send(isEmail);
      } else {
        const sqlInsert =
          "INSERT INTO users (name, email, password) VALUES (?,?,?)";
        const values = [name, email, hashedPassword];
        connection.query(sqlInsert, values, (err, result) => {
          if (err) throw err;
          let idUser = result.insertId;
          // console.log(idUser);
        });
        let isEmail = {
          messageGood: "Inscription réusie, vous allez être redirigé",
        };
        res.send(isEmail);
      }
    });
  } catch (error) {
    console.error(error);
  }
});

router.post("/login", (req, res) => {
  try {
    console.log("login", req.body);
    const { email, password } = req.body;
    const sql = `SELECT idUser, name, password FROM users WHERE email=?`;
    connection.query(sql, [email], async (err, result) => {
      console.log("result", result);
      if (err) throw err;
      if (!result.length) {
        // console.log("USER INCORRECT");
        let doesExist = { message: "Email et/ou mot de passe incorrect" };
        res.send(doesExist);
      } else {
        const dbPassword = result[0].password;
        const passwordMatch = await bcrypt.compare(password, dbPassword); //retourne un booléen
        if (!passwordMatch) {
          console.log("USER INCORRECT");
          let doesExist = { message: "Email et/ou mot de passe incorrect" };
          res.send(doesExist);
        } else {
          let idUser = result[0].idUser;
          const sqlData = `SELECT *
          FROM users
          WHERE idUser =?`;
          connection.query(sqlData, [idUser], (err, result) => {
            if (err) throw err;
            console.log("result2", result);
            res.send(JSON.stringify(result));
          });
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/deleteUser/:idUser", (req, res) => {
  const id = req.params.idUser;
  const deleteSql = "DELETE FROM users WHERE idUser= ?";
  connection.query(deleteSql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Erreur lors de la suppression de l'utilisateur" });
    }
    
    // Détruisez la session de l'utilisateur ici, en fonction de votre gestion de session.

    return res.json({ message: "Compte supprimé avec succès" });
  });
});

