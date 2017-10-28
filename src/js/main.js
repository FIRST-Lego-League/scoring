define([
    'services/log',
    'services/ng-session',
    'views/settings',
    'views/tournament',
    'views/scoresheet',
    'views/scores',
    'views/clock',
    'services/ng-services',
    'directives/ng-directives',
    'directives/size',
    'filters/ng-filters',
    'filters/index',
    'tests/fsTest',
    'tests/indexedDBTest',
    'angular-bootstrap',
    'angular-touch',
    'angular-animate',
    'angular-sanitize',
    'angular-storage',
    'angular'
],function(log,session,settings,tournament,scoresheet,scores,clock,services,directives,size,filters,indexFilter,fsTest,dbTest) {

    log('device ready');

    // fsTest();
    // dbTest();

    //initialize main controller and load main view
    //load other main views to create dynamic views for different device layouts
    angular.module('main',['ngAnimate']).controller('mainCtrl',[
        '$scope', '$session',
        function($scope, $session) {
            log('init main ctrl');

            const PAGES = [
                { name: 'scoresheet', title: 'Scoresheet', icon: 'check' },
                { name: 'scores', title: 'Scores', icon: 'list' },
                { name: 'tournament', title: 'Tournament', icon: 'people' },
                { name: 'settings', title: 'Settings', icon: 'settings' }
            ];

            $scope.drawer = 'views/drawer.html';
            $scope.scoringPages = ['scoresheet','settings'];
            $scope.validationErrors = [];
            $scope.drawerVisible = false;

            $session.load().then(function(session) {
                if(session['passport']) {
                    $scope.user = session['passport'].user;
                    $scope.pages = PAGES.filter(page => $scope.user.pages.includes(page.name));
                } else {
                    $scope.pages = PAGES;
                }
                $scope.currentPage = $scope.pages[0];
            });

            $scope.$on('validationError',function(e,validationErrors) {
                $scope.validationErrors = validationErrors;
            });

            $scope.toggleDrawer = function(set) {
                if (set !== undefined) {
                    $scope.drawerVisible = set;
                } else {
                    $scope.drawerVisible = !$scope.drawerVisible;
                }
            };

            $scope.setPage = function(page) {
                $scope.currentPage = page;
                $('body').scrollTop(0);
                $scope.drawerVisible = false;
            };

            $scope.setPlatform = function(platform) {
                $scope.platform = platform;
            };

            $scope.containerClass = function(w,h) {
                w = w();
                if (w <= 480) {
                    return $scope.platform + ' smallWindow';
                } else if (w <= 1024) {
                    return $scope.platform + ' mediumWindow';
                } else {
                    return $scope.platform + ' largeWindow';
                }
            };

            // $scope.
        }
    ]);
    angular.module('main').config(function($compileProvider){
        // Override to allow data: URI's (e.g. for CSV export)
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|data):/);
    });
    angular.bootstrap(document.body,[
        'main',
        'ui.bootstrap',
        'ngSanitize',
        'ngTouch',
        settings.name,
        tournament.name,
        scoresheet.name,
        scores.name,
        clock.name,
        filters.name,
        services.name,
        directives.name
    ]);
});
