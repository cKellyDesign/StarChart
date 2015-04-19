var http = require('http');
var path = require('path');
var express = require('express');
var InterstellarRouter = require('./InterstellarRouter');

var StarServer = express();

InterstellarRouter.setRoutes(StarServer);

StarServer.set('port', '8089');
StarServer.set('case sensitive routing', false);

StarServer.use('/chartScripts', express.static(path.join(__dirname, '/chartScripts')));


if ( StarServer.get('env') === 'development' ) {
  var MicrowaveBackground = StarServer.listen(process.env.PORT || StarServer.get('port'), function(){
    console.log("StarServer : FTL Drives Spooled to Port " + MicrowaveBackground.address().port);
  });
} else {
  var MicrowaveBackground = StarServer.listen(process.env.PORT || StarServer.get('port'));
}