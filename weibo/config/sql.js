var mysql = require("mysql"),
	connection = mysql.createConnection({
		"host":"localhost",
		"user":"root",
		"password":"1234",
		"database":"pitao"
	})
connection.connect()
module.exports = connection