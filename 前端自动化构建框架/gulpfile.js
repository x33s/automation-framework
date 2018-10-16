'use strict';

/**
 * [gulp description]
 * @type {[type]}
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require("gulp-util");
var del = require("del");
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var cached = require('gulp-cached');
var remember = require('gulp-remember');
var base64 = require('gulp-base64');

var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

var connect = require('gulp-connect');
var rest = require('connect-rest');
var mocks = require('./mocks');

/**
 * ----------------------------------------------------
 * source configuration
 * ----------------------------------------------------
 */

var src = {
    html: "src/html/*.html",                          // html 文件
    vendor: ["vendor/**/*", "bower_components/**/*"], // vendor 目录和 bower_components
    style: "src/css/**/*.scss",                  // css 目录下所有 xx/index.less
    assets: "assets/**/*",                             // 图片等应用资源
    images:"src/images/**/*"
};

var dist = {
    root: "dist/",
    html: "dist/html",
    style: "dist/css",
    vendor: "dist/vendor",
    assets: "dist/assets",
    images:"dist/images/"
};

var bin = {
    root: "bin/",
    html: "bin/",
    style: "bin/css",
    vendor: "bin/vendor",
    assets: "bin/assets"
};

var base64Config = {
    extensions: ['png','jpg'],
    maxImageSize: 20 * 1024,
}
/**
 * ----------------------------------------------------
 *  tasks
 * ----------------------------------------------------
 */

/**
 * clean build dir
 */
function clean(done) {
    del.sync(dist.root);
    done();
}

/**
 * [cleanBin description]
 * @return {[type]} [description]
 */
function cleanBin(done) {
    del.sync(bin.root);
    done();
}

/**
 * [copyVendor description]
 * @return {[type]} [description]
 */
function copyVendor() {
    return gulp.src(src.vendor)
        .pipe(gulp.dest(dist.vendor));
}

/**
 * [copyAssets description]
 * @return {[type]} [description]
 */
function copyAssets() {
    return gulp.src(src.assets)
        .pipe(gulp.dest(dist.assets));
}
/**
 * [delImages description]
 * @return {[type]} [description]
 */
function delImages(done) {
    del.sync(dist.images);
    done();
}
/**
 * [copyImages description]
 * @return {[type]} [description]
 */
function copyImages() {
    return gulp.src(src.images)
        .pipe(cached('images'))
        // .pipe(imagemin())
        .pipe(gulp.dest(dist.images));
}

/**
 * [html description]
 * @return {[type]} [description]
 */
function html() {
    return gulp.src(src.html)
        .pipe(gulp.dest(dist.html))
}
exports.html = html;

/**
 * [style description]
 * @param  {Function} done [description]
 * @return {[type]}        [description]
 */
function style() {
    return gulp.src(src.style)
        .pipe(sass().on('error', sass.logError))
        .on('error', handleError)
        .pipe(base64(base64Config))
        .pipe(gulp.dest(dist.style))
}

exports.style = style;

/**
 * [images description]
 * @return {[type]} [description]
 */
function images() {
    return gulp(src.images)
        .pipe(cached('images'))
        .pipe(gulp.dest(dist.images));
}
exports.images = images;
/**
 * [copyDist description]
 * @return {[type]} [description]
 */
function copyDist() {
    return gulp.src(dist.root + '**/*')
        .pipe(gulp.dest(bin.root));
}

/**
 * [sprite description]
 * @return {[type]} [description]
 */
var spriteConfigs = {
    //修改图片位置
    spritesSource: './src/sprite/*.*',
    spritesMithConfig: {
        cssOpts: 'spriteSrc',
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        cssFormat: 'scss',
        cssTemplate: 'scss.template.mustache',
        algorithm: 'binary-tree',
        padding: 20,
        cssVarMap: function(sprite) {
            sprite.name = 'sprite_' + sprite.name
        }
    },
    spriteCSSOutputPath: './src/css/sprite',
    spriteIMAGEOutputPath: './src/images/',
};

function sprite() {
    var spriteData = gulp.src(spriteConfigs.spritesSource) // source path of the sprite images
        .pipe(spritesmith(
            spriteConfigs.spritesMithConfig
        ));
    spriteData.img.pipe(gulp.dest(spriteConfigs.spriteIMAGEOutputPath)); // output path for the sprite
    spriteData.css.pipe(gulp.dest(spriteConfigs.spriteCSSOutputPath)); // output path for the CSS
    return spriteData;
}

/**
 * [webpackProduction description]
 * @param  {Function} done [description]
 * @return {[type]}        [description]
 */
function webpackProduction(done) {
    var config = Object.create(webpackConfig);
    config.plugins = config.plugins.concat(
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": "'production'"
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:production]", stats.toString({
            colors: true
        }));
        done();
    });
}


/**
 * [webpackDevelopment description]
 * @param  {Function} done [description]
 * @return {[type]}        [description]
 */
var devConfig, devCompiler;

devConfig = Object.create(webpackConfig);
devConfig.devtool = "sourcemap";
devCompiler = webpack(devConfig);

function webpackDevelopment(done) {
    devCompiler.run(function(err, stats) {
        if (err) {
            throw new gutil.PluginError("webpack:build-dev", err);
            return;
        }
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        done();
    });
}

/**
 * [watch description]
 * @return {[type]} [description]
 */
function watch() {
    gulp.watch(src.images,copyImages);
    gulp.watch("src/sprite/*.*",sprite);
    gulp.watch(src.html, html);
    gulp.watch("src/css/common/layout.scss", style);
    gulp.watch("src/css/sprite/sprite.scss", style);
    gulp.watch("src/**/*.js", webpackDevelopment);
    gulp.watch("src/**/*.vue", webpackDevelopment);
    gulp.watch("dist/**/*").on('change', function(file) {
        gulp.src('dist/')
            .pipe(connect.reload());
    });
}

/**
 * [connectServer description]
 * @return {[type]} [description]
 */
function connectServer(done) {
    connect.server({
        root: dist.root,
        port: 8080,
        livereload: true,
        middleware: function(connect, opt) {
                return [rest.rester({
                context: "/"
            })]
        }
    });
    mocks(rest);
    done();
}

/**
 * default task
 */
gulp.task("default", gulp.series(
    clean,
    sprite,
    gulp.parallel(copyVendor,copyImages, html, style,webpackDevelopment),
    connectServer,
    watch
));

/**
 * production build task
 */
gulp.task("build", gulp.series(
    clean,
    gulp.parallel(copyVendor,copyImages, html, style,webpackProduction),
    cleanBin,
    copyDist,
    function(done) {
        console.log('build success');
        done();
    }
));

/**
 * [handleError description]
 * @param  {[type]} err [description]
 * @return {[type]}     [description]
 */
function handleError(err) {
    if (err.message) {
        console.log(err.message)
    } else {
        console.log(err)
    }
    this.emit('end')
}