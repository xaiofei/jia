let express = require("express");
let ejs = require("ejs");
let app = express();
let bodyparser = require("body-parser");
app.set("views", __dirname + "/views/")
app.set("view engine", "ejs")
app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.static(__dirname + "/public"))
require("./config/config.js")(app)
app.listen(8890, function() {
    console.log("已经链接8890端口...")
})