var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var path = require('path');
var app = new (require('express'))();
var port = 3000
var request = require('request');
var fs = require('fs');

var compiler = webpack(config);
var hotMiddleware = webpackHotMiddleware(compiler);


compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' });
        cb();
    });
});

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(hotMiddleware);

app.get("/api/*", function(req, res) {
  res.send({data:[0,1,2,3,4,5,6,7], msg:'success', code:200});
});

app.get("/*", function(req, res) {
  var stream = fs.createWriteStream('index.html');
  request('http://localhost:'+port+'/build/index.html').pipe(stream).on('close', function(data){
    res.sendFile(path.join(__dirname, '/index.html'));
  });
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

