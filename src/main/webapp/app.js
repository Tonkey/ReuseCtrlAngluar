'use strict';

var app = angular.module('myApp', []);

app.controller('personController', ['$scope', function ($scope) {
        $scope.person = {firstName: 'Peter', lastName: 'Smith'};
    }]);

app.controller('textConvertController', ['$scope', 'textCase', function ($scope, textCase) {
        $scope.title = textCase.titleCase("my example service");
        $scope.camel = textCase.camelCase("my example service");
        $scope.dash = textCase.dashCase("my example service");
    }]);

app.filter('name', function () {

    return function (input) {
        return '"' + input.lastName + ", " + input.firstName + '"';
    };
});

app.directive('loginForm', function () {
    return {
        restrict: 'EA',
        link: function (scope, element, attrs) {
            var header = attrs.header;
            element.append('<div>');
            element.append('<header>' + header + '<header/>');
            element.append('<input type="text" name="userName" value="" placeholder="username"><br>');
            element.append('<input type="password" name="password" value="" placeholder="password"><br>');
            element.append('<input type="button" value="Login" name="loginBtn"></button>');
            element.append('</div>');
        }
    };
});

app.factory('textCase', function () {

    var textCase = {};

    textCase.titleCase = function (input) {
        var textSnips = input.split(' ');
        var out = "";
        angular.forEach(textSnips, function (value) {
            out += value.substring(0, 1).toUpperCase() + value.substring(1, value.length) + " ";
        });
        return out;
    };

    textCase.camelCase = function (input) {
        var textSnips = input.split(" ");
        var out = "";
        angular.forEach(textSnips, function (value) {
            out += value.substring(0, 1).toUpperCase() + value.substring(1, value.length);
        });
        return out;
    };

    textCase.dashCase = function (input) {
        var textSnips = input.split(" ");
        var out = "";
        for (var i = 0; i < textSnips.length; i++) {
            if (i === textSnips.length - 1) {
                out += textSnips[i].substring(0, 1).toUpperCase() + textSnips[i].substring(1, textSnips[i].length);
            } else {
                out += textSnips[i].substring(0, 1).toUpperCase() + textSnips[i].substring(1, textSnips[i].length) + "-";
            }
        }
        return out;
    };
    return textCase;
});
