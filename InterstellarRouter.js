exports.setRoutes = function (StarServer) {
  StarServer.get('/', function (req, res){
    res.send({ message: 'hello world' });
  });
};