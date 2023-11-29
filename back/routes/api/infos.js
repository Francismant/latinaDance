const router = require("express").Router();

const connection = require("../../database");

router.get("/getInfos", (req, res) => {
    const sql = "SELECT * FROM infos";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("text récupéré");
        res.send(JSON.stringify(result));
    });
});

router.patch('/changeInfos', (req, res) => {
    console.log("changeInfos", req.body);
    let infoChanged = req.body.values.text;
    console.log("infoChanged", infoChanged);
    const changeInfosCoursSql = "UPDATE infos SET text = ?";
    connection.query(changeInfosCoursSql, [infoChanged], (err, result) => {
        console.log("changeInfos", result);
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Erreur lors du changement du message" });
        }
        return res.json({ message: "Le texte a été modifié" });
    });
});




module.exports = router;