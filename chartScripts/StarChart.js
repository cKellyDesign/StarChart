var underscore = angular.module('underscore', []);
underscore.factory('_', function(){
  return window._;
});

var StarChart = angular.module('starChart', []);

StarChart.run(function ($rootScope){
  // Set any global vars / function here!!! :D
  // $rootScope.name = 'Conor';
});

StarChart.controller('FTL_Drive', function($scope){


  $scope.CSV_input = "Enter CSV Code here";

  $scope.ConstellationAssembler = function (universe) {
    if (!universe) {
      return "Please input CSV!!";
    }
    var thisUniverse = universe.split('\n');

    return _.map(thisUniverse, function(star){
      if ( !star || star.indexOf(',') < 1 ) { return false; }

      var thisStar = star.split(',');
      return {
        StarID: starAttrScrubber(thisStar[0]),
        Hip: starAttrScrubber(thisStar[1]),
        HD: starAttrScrubber(thisStar[2]),
        HR: starAttrScrubber(thisStar[3]),
        Gliese: starAttrScrubber(thisStar[4]),
        BayerFlamsteed: starAttrScrubber(thisStar[5]),
        ProperName: starAttrScrubber(thisStar[6]),
        RA: starAttrScrubber(thisStar[7]),
        Dec: starAttrScrubber(thisStar[8]),
        Distance: starAttrScrubber(thisStar[9]),
        Mag: starAttrScrubber(thisStar[10]),
        AbsMag: starAttrScrubber(thisStar[11]),
        Spectrum: starAttrScrubber(thisStar[12], true),
        ColorIndex: starAttrScrubber(thisStar[13])
      };
    });
  };

  function starAttrScrubber (str, cleanSpaces) {
    if (cleanSpaces) {
      str = str && str.replace(/ /g, '');
    }
    return (str === '' || str === ' ' || str === '          ') ? null : str;
  }
  
  $scope.JSON_output = "This will call func to return JSON output string.";




  $scope.cluster = {
    count: 10,
    stars: []
  };

  $scope.starForge = function(starCount) {
    starCount = starCount || ( Math.random() * 100 );
    var starArray = [];
    for (i = 0; i < starCount; i++) {
      starArray.push({ "x": Math.random(), "y": Math.random() });
    }
    return starArray;
  }

  $scope.galaxy = {
    name: "Milky Way",
    stars: [
      {"name": "Alpha Centuri", "x": ".25", "y":".25", "display":false},
      {"name": "Barnard's Star", "x": ".5", "y":".25", "display":false},
      {"name": "Wolf 356", "x": ".25", "y":".5", "display":false},
      {"name": "Lalande 21185", "x": ".5", "y":".5", "display":false},
      {"name": "Sirius", "x": ".75", "y":".25", "display":false},
      {"name": "Luyten 726-8", "x": ".25", "y":".75", "display":false},
      {"name": "Ross 154", "x": ".75", "y":".75", "display":false},
      {"name": "Ross 248", "x": ".5", "y":".75", "display":false},
      {"name": "Epsion Eridani", "x": ".75", "y":".5", "display":false},
      {"name": "Lacaille 9352", "x": ".67", "y":".33", "display":false}
    ]
  };

});