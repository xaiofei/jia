/**
 * Created by Administrator on 2017/5/10.
 */
var mock = require("mockjs");

exports.data = function () {
    return [
        {
            route: '/index',
            handle: function (req, res, next) {
                res.writeHead(200, {
                    "Content-type": "application/json;charset=utf-8",
                    "Access-Control-Allow-Origin": "*"
                });
                var random = mock.Random;
                random.integer();
                random.string('lower', 4);
                random.date('yyy-MM-dd');
                var data = mock.mock({
                    "menuList|2": [{
                        'menuNav': '@string',
                        'menuNavContent|1-5': [{
                            'url': 'index.html',
                            'name': "@string('lower',4)",
                            'id': "@integer(0,10)"
                        }]
                    }]
                })
                //res.write();
                res.end(JSON.stringify(data));
            }
        }
    ]
};





















