let express = require("express"),
    router = express.Router(),
    connection = require("../config/sql.js")
router.post("/postindex", function(req, res) {
    connection.query("select * from xun", function(err, result) {
        if (err) throw err;
        res.send({ cout: 0, data: result })
    })
})
module.exports = router