const router = require("express").Router();

const connection = require("../../database/index");


router.post("/vote", (req, res) => {
    console.log("vote",req.body);
    const { dances } = req.body
    let idUser = "2";
    dances.map((dance, index) => {
        let sqlDance = `INSERT INTO user_dance (idDance, idUser) VALUES (? ,?)`;
        const valueDance = [dance.value, idUser];
        connection.query(sqlDance, valueDance, (err, result) => {
          if (err) throw err;
        });
      });
    let asVoted = {
        messageGood: "Votre vote a été pris en compte",
    };
    res.send(asVoted);
});


module.exports = router;