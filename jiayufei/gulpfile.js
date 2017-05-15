var gulp = require('gulp');
var uglify = require("gulp-uglify");//js压缩
var concat = require("gulp-concat");//文件合并
var cssmin = require("gulp-clean-css");//css压缩
var sass = require("gulp-sass");//sacc编译
var webserver = require('gulp-webserver');//web服务热启动
var browserify = require('gulp-browserify');//模块化的打包
var image = require('gulp-imagemin');//图片压缩
var rev = require('gulp-rev');//- 对文件名加MD5后缀
var revcoll = require('gulp-rev-collector');//- 路径替换
//var notify = require('gulp-notify');//提示信息
var url = require('url');
var datajson = require('./data/js/data.js');
gulp.task('fei', function () {
    gulp.src('src/js/*.js')
        //.pipe(concat("all.js"))
        .pipe(uglify())
        //.pipe(rev())
        //.pipe(browserify({
        //    insertGlobals : true,
        //    debug : !gulp.env.production
        //}))
        .pipe(gulp.dest('./build/js'))
    //.pipe(rev.manifest())
    //.pipe(gulp.dest('./rev/js'))
});

gulp.task('ss', function () {
    gulp.src('./src/css/*.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rev())
        .pipe(gulp.dest('./build/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/css'));
});

gulp.task('htmlrev', function () {
    gulp.src(['./rev/**/*.json', './src/html/*.html'])
        .pipe(revcoll({
            replaceReved: true,
            dirReplacements: {
                'css': 'css'
            }
        }))
        .pipe(gulp.dest('./build/html'));
})

gulp.task('img', function () {
    gulp.src('src/img/*.jpg')
        .pipe(image())
        .pipe(gulp.dest('./build/img'));
})

gulp.task('html', function () {

});

gulp.task("build", ["fei", "ss", "htmlrev", "img"]);

gulp.task("webserver", ["build"], function () {
    gulp.watch("./src/css/*.scss", ["ss"]);
    gulp.watch("./src/html/*.html", ["html"]);
    gulp.watch("./src/img/*.jpg", ["img"]);
    gulp.src('./build')
        .pipe(webserver({
            port: 8000,
            livereload: true,
            directoryListing: true,
            middleware: function (res, req, next) {
                var reqPath = url.parse(res.url).pathname
                var routes = datajson.data()
                routes.forEach(function (i) {
                    if (i.route == reqPath) {
                        i.handle(res, req, next);
                    }
                })
                next();
            },
            open: "./html/filter.html"
        }));
});