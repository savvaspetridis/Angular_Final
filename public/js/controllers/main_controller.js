app.controller('MainController', function ($scope, Homework) {
    $scope.hws = Homework;

    $scope.clicks = function (hw) {
            hw.click = !hw.click;
    };
});