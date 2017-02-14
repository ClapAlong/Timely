var app = angular.module('Timely', ['ngMaterial'])

app.controller('contentCtrl', function ($scope, $mdSidenav) {
    $scope.toShow = "appointment"; // Default

    $scope.show = function (toShow) {
        $scope.toShow = toShow;
        $('#calendar').fullCalendar('render');
    };
});
