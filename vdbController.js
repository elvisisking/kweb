(function () {
    'use strict';

    function getActiveCount() {
        return 2;
    }

    function getVdbs() {
        return [
            {
                "name": "MyVDB",
                "status": "Active",
                "description": "This is my VDB",
                "datasources": ["WebServiceDS"]
            },
            {
                "name": "OracleVDB",
                "status": "New",
                "description": "This VDB transforms the Oracle datasource",
                "datasources": ["MyOracleDS"]
            },
            {
                "name": "MongoVDB",
                "status": "New",
                "description": "This data source shows the Mongo schema that I want",
                "datasources": ["MyMongoDS"]
            },
            {
                "name": "MultiSourceVDB",
                "status": "Active",
                "description": "This connects to a few sources",
                "datasources": ["MyMongoDS", "MyFileDS", "WebServiceDS"]
            },
            {
                "name": "JoinVDB",
                "status": "Modified",
                "description": "This VDB does a join of two sources",
                "datasources": ["MyOracleDS", "MyFileDS"]
            }
        ];
    }

    function getModifiedCount() {
        return 1;
    }

    function getNewCount() {
        return 2;
    }

    /*global angular */
    var app = angular.module('kweb');

    app.controller('VdbController', ['$scope', function ($scope) {
        $scope.m_vdbs = getVdbs();
        $scope.m_numVdbsActive = getActiveCount();
        $scope.m_numVdbsModified = getModifiedCount();
        $scope.m_numVdbsNew = getNewCount();
        $scope.m_numVdbs = ($scope.m_numVdbsActive + $scope.m_numVdbsModified + $scope.m_numVdbsNew);
        $scope.m_percentage = function (amount, total) {
            return Math.round(amount / total * 100) + "%";
        };
    }]);

}());