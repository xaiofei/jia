let express = require("express"),
    router = express.Router(),
    connection = require("../config/sql.js")
router.post("/postlogin", function(req, res) {
    let spn = req.body.spn
    connection.query("select * from xun where NO='" + spn + "'", function(err, result) {
        if (err) throw err;
        if (result.length > 0) {
            // console.log(result)
            res.send({ cout: 0, data: result })
        } else {
            res.send({ cout: 1, data: result })
        }
    })
})
module.exports = router