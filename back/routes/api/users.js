const router = require("express").Router();
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { key, keyPub } = require("../../keys");

const connection = require("../../database");


router.post("/register", (req, res) => {
  const { email, password, name } = req.body;
  const verifyMailSql = "SELECT * FROM users WHERE email = ?"; // vérification de l'existence du mail
  connection.query(verifyMailSql, [email], async (err, result) => {
    try {
      if (result.length === 0) {
        // si il n'existe pas on hashe le mdp et on insère en BDD
        const hashedPassword = await bcrypt.hash(password, 10);
        const insertSql =
          "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        connection.query(
          insertSql,
          [name, email, hashedPassword],
          (err, result) => {
            if (err) throw err;
            let idUser = result.insertId; // On récupére l'id de la dernière insertion
            const sqlSelect =
              "SELECT idUser, name, email FROM users WHERE idUser = ?";
            connection.query(sqlSelect, [idUser], (err, result) => {
              // On récupère les données correspondant à cet id -> front
              if (err) throw err;
              const responseData = {
                userData: result, // Les données de l'utilisateur
                messageGood: "Inscription réussie, vous allez être redirigé"
              };
              res.json(responseData);
            });
          }
        );
      } else {
        // si le mail existe
        res.status(400).json("Le mail existe");
      }
    } catch (error) {
      console.log(error);
    }
  });
});

// router.post("/register", async (req, res) => {
//   try {
//     // console.log(req.body);
//     const { name, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const sqlVerify = `SELECT * FROM users WHERE email=?`;
//     connection.query(sqlVerify, [email], (err, result) => {
//       if (err) throw err;
//       if (result.length) {
//         // console.log("EMAIL EXISTANT");
//         let isEmail = { message: "Email existant" };
//         res.send(isEmail);
//       } else {
//         const sqlInsert =
//           "INSERT INTO users (name, email, password) VALUES (?,?,?)";
//         const values = [name, email, hashedPassword];
//         connection.query(sqlInsert, values, (err, result) => {
//           if (err) throw err;
//           let idUser = result.insertId;
//           // console.log(idUser);
//         });
//         let isEmail = {
//           messageGood: "Inscription réusie, vous allez être redirigé",
//         };
//         res.send(isEmail);
//       }
//     });
//   } catch (error) {
//     console.error(error);
//   }
// });

router.post("/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const sqlVerify = "SELECT * FROM users WHERE email= ?";
  connection.query(sqlVerify, [email], (err, result) => {
    try {
      if (result.length > 0) {
        if (bcrypt.compareSync(password, result[0].password)) {
          const token = jsonwebtoken.sign({}, key, {
            subject: result[0].idUser.toString(),
            expiresIn: 3600 * 24 * 30,
            algorithm: "RS256",
          });
          res.cookie("token", token, { maxAge: 30 * 24 * 60 * 60 * 1000 });
          result[0].password = "";
          res.json(result[0]);
        } else {
          res.status(400).json("Email et/ou mot de passe incorrects");
        }
      } else {
        res.status(400).json("Email et/ou mot de passe incorrects");
      }
    } catch (error) {
      console.log(error);
    }
  });
});

router.get("/logout", (req, res) => {
  console.log("Déconnexion en cours");
  res.clearCookie("token");
  res.end();
});

// router.post("/login", (req, res) => {
//   try {
//     console.log("login", req.body);
//     const { email, password } = req.body;
//     const sql = `SELECT idUser, name, password FROM users WHERE email=?`;
//     connection.query(sql, [email], async (err, result) => {
//       console.log("result", result);
//       if (err) throw err;
//       if (!result.length) {
//         // console.log("USER INCORRECT");
//         let doesExist = { message: "Email et/ou mot de passe incorrect" };
//         res.send(doesExist);
//       } else {
//         const dbPassword = result[0].password;
//         const passwordMatch = await bcrypt.compare(password, dbPassword); //retourne un booléen
//         if (!passwordMatch) {
//           console.log("USER INCORRECT");
//           let doesExist = { message: "Email et/ou mot de passe incorrect" };
//           res.send(doesExist);
//         } else {
//           let idUser = result[0].idUser;
//           const sqlData = `SELECT *
//           FROM users
//           WHERE idUser =?`;
//           connection.query(sqlData, [idUser], (err, result) => {
//             if (err) throw err;
//             console.log("result2", result);
//             res.send(JSON.stringify(result));
//           });
//         }
//       }
//     });
//   } catch (error) {
//     console.error(error);
//   }
// });

router.get("/userConnected", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    try {
      const decodedToken = jsonwebtoken.verify(token, keyPub, {
        algorithms: "RS256",
      });
      const sqlSelect =
        "SELECT idUser, name, email FROM users WHERE idUser  =?";
      connection.query(sqlSelect, [decodedToken.sub], (err, result) => {
        if (err) throw err;
        const connectedUser = result[0];
        connectedUser.password = "";
        if (connectedUser) {
          console.log(connectedUser);
          res.json(connectedUser);
        } else {
          res.json(null);
        }
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json(null);
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
    return res.json({ message: "Compte supprimé avec succès" });
  });
});

module.exports = router;