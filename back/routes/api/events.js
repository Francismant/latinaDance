const router = require("express").Router()

const connection  = require("../../database")

router.get("/getEvents", (req, res) => {
    const sql = "SELECT * FROM events"
    connection.query(sql, (err, result) => {
        if (err) throw err
        console.log("events récupérés");
        res.send(JSON.stringify(result))
    })
})

router.delete("/deleteEvent/:idEvent", (req, res) => {
    console.log(req.params);
    const id = req.params.idEvent;
    const deleteSql = "DELETE FROM events WHERE idEvent= ?";
    connection.query(deleteSql, [id], (err, result) => {
      if (err) throw err;
    });
    res.sendStatus(200);
  });

module.exports = router;