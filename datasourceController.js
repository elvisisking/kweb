(function () {
    'use strict';

    function getActiveCount() {
        return 2;
    }

    function getDatasources() {
        return [
            {
                "name": "MyOracleDS",
                "status": "Active",
                "description": "This is an Oracle datasource",
                "connectionName": "OracleDBConn"
            },
            {
                "name": "MyFileDS",
                "status": "New",
                "description": "This is a File datasource",
                "connectionName": "FileConn"
            },
            {
                "name": "MyMongoDS",
                "status": "New",
                "description": "This is a MongoDB datasource",
                "connectionName": "MongoConn"
            },
            {
                "name": "MySalesforceDS",
                "status": "Modified",
                "description": "This is a Salesforce datasource",
                "connectionName": "SFConn"
            },
            {
                "name": "WebServiceDS",
                "status": "Active",
                "description": "This is a SQLServer datasource",
                "connectionName": "WebSvcConn"
            },
            {
                "name": "SQLServerDS",
                "status": "Modified",
                "description": "This is an Oracle datasource",
                "connectionName": "SQLServerConn"
            }
        ];
    }

    function getModifiedCount() {
        return 2;
    }

    function getNewCount() {
        return 2;
    }

    /*global angular */
    var app = angular.module('kweb');

    app.controller('DatasourceController', ['$scope', function ($scope) {
        $scope.m_datasources = getDatasources();
        $scope.m_numDatasourcesActive = getActiveCount();
        $scope.m_numDatasourcesModified = getModifiedCount();
        $scope.m_numDatasourcesNew = getNewCount();
        $scope.m_numDatasources = ($scope.m_numDatasourcesActive + $scope.m_numDatasourcesModified + $scope.m_numDatasourcesNew);
        $scope.m_percentage = function (amount, total) {
            return Math.round(amount / total * 100) + "%";
        };
    }]);

}());