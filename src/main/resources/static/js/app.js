var app = angular.module('Timely', ['ngMaterial'])

app.controller('contentCtrl', function ($scope, $mdDialog) {
    //controller method for switching pages
    $scope.toShow = "appointment"; // Default
    $scope.show = function (toShow) {
        $scope.toShow = toShow;
        $('#calendar').fullCalendar('render');
    };

    //controller method for date picker
    $scope.myDate = new Date();
    $scope.startInput = new Date();
    $scope.endInput = new Date();

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

    //Dialog controller
    $scope.showAppointmentDialog = function(ev) {
        $mdDialog.show({
            contentElement: '#myDialogAppointment',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        });
    };

    //Dialog controller
    $scope.showOfficeHourDialog = function(ev) {
        $mdDialog.show({
            contentElement: '#myDialogOfficeHour',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        });
    };

    //Summary
    $scope.sumA = new String;
    $scope.sumOh = new String;

});
