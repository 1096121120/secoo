var gulp=require("gulp"),
	sass=require("gulp-ruby-sass");
/*	uglify=require("gulp-uglify"),
	htmlmin=require("gulp-htmlmin"),
	concat=require("gulp-concat"),
	connect=require("gulp-connect");*/

//编译sass文件
gulp.task("scss",function(){
	sass("./sass/*.scss",{
		style:"expanded"
	}).pipe(gulp.dest("./css"));
});
/*
//压缩js文件
gulp.task("js",function(){
	gulp.src("./src/js/*.js")
	.pipe(uglify())
	.pipe(gulp.dest("./js"));
});

//压缩html文件
gulp.task("html",function(){
	gulp.src("./src/html/*.html")
	.pipe(htmlmin({collapseWhitespace:true}))
	.pipe(gulp.dest("./"));
});*/
//新建监听task
gulp.task("watch",function(){
	gulp.watch("./sass/*.scss",["scss"]);
	// gulp.watch("./src/js/*.js",["js"]);
});