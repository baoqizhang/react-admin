const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://47.100.197.51:5000',
    changeOrigin: true,
		pathRewrite:{'^/api':''}
  }));
  app.use('/weather', createProxyMiddleware({
    target: 'https://api.map.baidu.com',
    changeOrigin: true
  }));
};