const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3001",
     // ws:true,
      changeOrigin: true,
    })
  );

  //socket.io 에 대한 프록시 
  app.use(
    "/socket.io",
    createProxyMiddleware({
      target: "http://localhost:3001",
      secure:false,
    //  ws:true,
      changeOrigin: true,
    })
  );
};
