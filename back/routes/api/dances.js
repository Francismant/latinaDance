const router = require("express").Router();

const connection = require("../../database/index");

router.get("/getDances", (req, res) => {
  try {
    const sql = "SELECT * FROM dances";
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.send(JSON.stringify(result));
    });
  } catch (error) {
    console.error(error);
  }
});

router.patch("/vote", (req, res) => {
//   console.log(req.body.id);
  //   console.log("vote", req.body.value);
  //   console.log(req.body.values.dances);
  let idUser = req.body.id;
  let dance_choice = req.body.values.dances;
  let sqlDance = `UPDATE users SET dance_choice = ? WHERE idUser = ?`;
  const valueDance = [dance_choice, idUser];
  connection.query(sqlDance, valueDance, (err, result) => {
    if (err) throw err;
  });
  let asVoted = {
    messageGood: "Votre vote a été pris en compte",
  };
  res.send(asVoted);
});

module.exports = router;
