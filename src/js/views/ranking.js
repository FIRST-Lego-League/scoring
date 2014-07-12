define([
    'services/log',
    'services/ng-scores',
    'angular'
],function(log) {
    var moduleName = 'ranking';
    return angular.module(moduleName,[]).controller(moduleName+'Ctrl',[
        '$scope', '$scores',
        function($scope,$scores) {
            log('init ranking ctrl');

            $scope.sort = 'score';
            $scope.rev = true;

            $scope.scores = $scores.scores;

            $scope.removeResult = function(index) {
                $scores.remove(index);
            };
        }
    ]);
});
