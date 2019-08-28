var gulp = require('gulp');
// 调用 .create() 意味着你得到一个唯一的实例并允许您创建多个服务器或代理。
var browserSync = require('browser-sync').create();
// 这里reload不加括号，只引用不调用
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
gulp.task('server', function () {
    nodemon({
        script: './bin/www',
        // 忽略部分对程序运行无影响的文件的改动，nodemon只监视js文件，可用ext项来扩展别的文件类型
        ignore: ["gulpfile.js", "node_modules/"],
        env: {
            'NODE_ENV': 'development'
        }
    }).on('start', function () {
        browserSync.init({
            proxy: 'http://localhost:3000',
            files: ["js/**","lib","page/**","public/**/*.*", "views/**", "routes/**"],
            port: 3001
        }, function () {
            console.log("browser refreshed.");
        });
        // gulp.watch(["*.*"]).on("change", reload);
    });
});