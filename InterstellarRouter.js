exports.setRoutes = function (StarServer) {
  StarServer.get('/', function (req, res){
    res.sendfile('./index.html');
  });
};