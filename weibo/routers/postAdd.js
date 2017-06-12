let express = require("express"),
    router = express.Router(),
    connection = require("../config/sql.js")
router.post("/postAdd", function(req, res) {
    let num = req.body.num;
    let only = req.body.only;
    connection.query("update xun set id='" + num + "' where NO='" + only + "'", function(err, result) {
        if (err) throw err;
        console.log(result)
        if (result.length != '') {
            res.send({ cout: 0, data: result })
        } else {
            res.send({ cout: 1, data: result })
        }
    })
})
module.exports = router