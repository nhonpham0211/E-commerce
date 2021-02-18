const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://ecommerce-2021.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
