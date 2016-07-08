const express = require('express');
const path = require('path');
const webpack = require('webpack');
const app = express();

const isDevelopment = (process.env.NODE_ENV !== 'production');
const staticPath = path.join(__dirname, 'static');

app.use(express.static(staticPath));
app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: staticPath,
  });
});
app.listen(process.env.PORT || 8080, function(err) {
  if (err) { console.log(err); }
  console.log('Listening at localhost:8080');
});

if (isDevelopment) {
  const config = require('./webpack.config');
  const WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
  }).listen(3000, 'localhost', function(err, result) {
    if (err) { console.log(err); }
    console.log('Listening at localhost:3000');
  });
}
