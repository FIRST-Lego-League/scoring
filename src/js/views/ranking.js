"use strict";

define('views/ranking',[
    'services/log',
    'services/ng-scores',
    'angular'
],function(log) {
    var moduleName = 'ranking';
    return angular.module(moduleName,[]).controller(moduleName+'Ctrl', [
        '$scope', '$scores', '$stages',
        function($scope, $scores, $stages) {
            log('init ranking ctrl');

            // temporary default sort values
            $scope.sort = 'rank';
            $scope.rev = false;

            $scope.doSort = function(stage, col, defaultSort) {
                if (stage.sort == col){
                    stage.rev = (String(stage.sort) === String(col)) ? !stage.rev : defaultSort;
                }
                stage.sort = col;
            };

            $scope.sortIcon = function(stage, col){
                // got into trouble with a default sort order here...
                var icon = '';
                if (stage.sort == col) {
                    if (stage.rev){
                        icon = 'icon-sort-down';
                    } else {
                        icon = 'icon-sort-up';
                    }
                } else if (stage.sort == null && col == $scope.sort) {
                    if (stage.rev == null && $scope.rev) {
                        icon = 'icon-sort-down';
                    } else {
                        icon = 'icon-sort-up';
                    }
                } else {
                    icon = 'icon-sort';
                }
                return icon;
            };

            $scope.toggle = function(stage) {
                stage.$collapsed = !stage.$collapsed;
            };

            $scope.maxRounds = function() {
                return $stages.stages.reduce(function(max,stage) {
                    //log(stage.name + ": " + stage.$rounds.length);
                    //log("maxRounds: " + max);
                    return Math.max(max, stage.$rounds.length);
                },0);
            };

            $scope.emptyCols = function(stage) {
                return new Array($scope.maxRounds() - stage.$rounds.length);
            };

            $scope.stages = $stages.stages;
            $scope.scoreboard = $scores.scoreboard;
        }
    ]);
});
