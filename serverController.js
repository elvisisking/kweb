(function () {
    'use strict';

    /*global angular */
    var app = angular.module('kweb');
    
    app.controller('ServerController', ['$scope', function ($scope) {
        $scope.m_serverStatus = "Connected";
        $scope.m_upTime = "4 hrs 31 minutes 14 seconds";
        $scope.m_connectAction = "Go offline";
    }]);

}());