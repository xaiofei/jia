/**
 * Created by Administrator on 2017/5/16.
 */
var app = angular.module("myApp", ["ngRoute"])
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: './hm/xinge.html',
            controller: "newSing"
        })
        .when("/ranking", {
            templateUrl: './hm/paihang.html',
            controller: "newPai"
        })
        .when("/menu", {
            templateUrl: './hm/gedan.html',
            controller: "newDan"
        })
        .when("/singer", {
            templateUrl: './hm/geshou.html',
            controller: "newShou"
        })
        .otherwise({redirectTo: '/'});
}])
newSing = {
    "img": "img/pic1.jpg",
    "render": [
        {"name": "田馥甄 - 当你(live)"},
        {"name": "魏晨 - 旅行"},
        {"name": "许巍 - 曾经的你"},
        {"name": "周杰伦- 发如雪"}
    ],
    "newPai": [
        {"src": "img/ge_03.png", "content": "酷狗飙升榜"},
        {"src": "img/ge_06.png", "content": "酷狗TOP500"},
        {"src": "img/ge_08.png", "content": "网络红歌榜"},
        {"src": "img/ge_10.png", "content": "DJ热歌榜"}
    ],
    "newDan": [
        {"src": "img/yuan_03.png", "content": "维护音乐会 合辑"},
        {"src": "img/yuan_06.png", "content": "白首华语挚爱情歌"},
        {"src": "img/yuan_08.png", "content": "维护音乐会 合辑"},
        {"src": "img/yuan_10.png", "content": "最是粤语情深处"}
    ]

}
newShou = {
    "first": [
        {"name": "华语男歌手"},
        {"name": "华语女歌手"},
        {"name": "华语组合"}
    ],
    "two": [
        {"name": "日韩男歌手"},
        {"name": "日韩女歌手"},
        {"name": "日韩组合"}
    ],
    "three": [
        {"name": "欧美男歌手"},
        {"name": "欧美女歌手"},
        {"name": "欧美组合"}
    ]
}
app.controller("newSing", function ($scope) {
    $scope.newSing = newSing;
})
app.controller("newPai", function ($scope) {
    $scope.newPai = newSing.newPai;
})
app.controller("newDan", function ($scope) {
    $scope.newDan = newSing.newDan;
})
app.controller("newShou", function ($scope) {
    $scope.newShou = newShou;
})
app.controller("all", function ($scope) {
     $scope.data = {
         current: "1"
     }
     $scope.chang = function(i){
         $scope.data.current = i;
     }
})