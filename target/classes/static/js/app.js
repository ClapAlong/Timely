var app = angular.module('Timely', ['ngMaterial'])

app.controller('contentCtrl', function ($scope) {
    //controller method for switching pages
    $scope.toShow = "appointment"; // Default
    $scope.show = function (toShow) {
        $scope.toShow = toShow;
        $('#calendar').fullCalendar('render');
    };

    //controller method for date picker
    $scope.myDate = new Date();
    $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() - 2,
        $scope.myDate.getDate());
    $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 2,
        $scope.myDate.getDate());
    $scope.onlyWeekendsPredicate = function(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    }
});
