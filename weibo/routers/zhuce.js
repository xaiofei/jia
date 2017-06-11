let express = require("express"),
    router = express.Router()
router.get("/zhuce", function(req, res) {
    res.render("zhuce")
})
module.exports = router