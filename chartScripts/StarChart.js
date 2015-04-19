var StarChart = angular.module('starChart', []);

StarChart.run(function ($rootScope){
  // Set any global vars / function here!!! :D
  // $rootScope.name = 'Conor';
});

StarChart.controller('FTL_Drive', function($scope){
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