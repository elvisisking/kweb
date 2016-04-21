(function () {
    'use strict';

    function getActiveCount() {
        return 2;
    }

    function getConnections() {
        return [
            {
                "name": "OracleDBConn",
                "status": "Active",
                "description": "Connection definition for Oracle DB",
                "type": "OracleDriver"
            },
            {
                "name": "MongoConn",
                "status": "Modified",
                "description": "Connection definition for Mongo instance",
                "type": "MongoDB"
            },
            {
                "name": "SQLServerConn",
                "status": "New",
                "description": "Connection definition for SQLServer DB",
                "type": "SQLServerDriver"
            },
            {
                "name": "FileConn",
                "status": "New",
                "description": "Connection definition for a file",
                "type": "file"
            },
            {
                "name": "SFConn",
                "status": "Active",
                "description": "Connection definition for SalesForce instance",
                "type": "Salesforce"
            },
            {
                "name": "WebSvcConn",
                "status": "Modified",
                "description": "Connection definition for a web service",
                "type": "WebService"
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

    app.controller('ConnectionController', ['$scope', function ($scope) {
        $scope.m_connections = getConnections();
        $scope.m_numConnectionsActive = getActiveCount();
        $scope.m_numConnectionsModified = getModifiedCount();
        $scope.m_numConnectionsNew = getNewCount();
        $scope.m_numConnections = ($scope.m_numConnectionsActive + $scope.m_numConnectionsModified + $scope.m_numConnectionsNew);
        $scope.m_percentage = function (amount, total) {
            return Math.round(amount / total * 100) + "%";
        };
    }]);

}());