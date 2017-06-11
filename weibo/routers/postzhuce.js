let express = require("express"),
    router = express.Router(),
    connection = require("../config/sql.js")
router.post("/postzhuce", function(req, res) {
    let user = req.body.user
    let pwd = req.body.pwd
    connection.query("insert into xun (user,pwd) values('" + user + "','" + pwd + "')", function(err, result) {
        console.log(result)
        if (err) throw err;
        if (result.length > 0) {
            res.send({ cout: 0, data: result })
        } else {

            res.send({ cout: 1, data: result })
        }
    })
})
module.exports = router