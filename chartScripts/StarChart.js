var StarChart = angular.module('starChart', []);

StarChart.run(function ($rootScope){
  // Set any global vars / function here!!! :D
  // $rootScope.name = 'Conor';
});

StarChart.controller('FTL_Drive', function($scope){
  $scope.galaxy = {
    name: "Milky Way"
  };

});