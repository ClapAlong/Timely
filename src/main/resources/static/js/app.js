var app = angular.module('Timely', ['ngMaterial'])
var Date1;
var Date2;

app.controller('contentCtrl', function ($scope, $mdDialog) {
    //controller method for switching pages
    $scope.toShow = "appointment"; // Default
    $scope.show = function (toShow) {
        $scope.toShow = toShow;
        $('#calendar').fullCalendar('render');
    };

    //controller method for date picker
    $scope.myDate1 = new Date();
    Date1 = $scope.myDate1;
    $scope.myDate2 = new Date();
    Date2 = $scope.myDate2;
    $scope.minDate = new Date(
        $scope.myDate1.getFullYear(),
        $scope.myDate1.getMonth() - 2,
        $scope.myDate1.getDate());
    $scope.maxDate = new Date(
        $scope.myDate1.getFullYear(),
        $scope.myDate1.getMonth() + 2,
        $scope.myDate1.getDate());
    $scope.onlyWeekendsPredicate = function(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    }

    //Dialog controller
    $scope.showPrerenderedDialog = function(ev) {
        $mdDialog.show({
            contentElement: '#myDialog',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        });
    };

});
