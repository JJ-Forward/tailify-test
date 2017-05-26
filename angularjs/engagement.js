 (function() {
    var app = angular.module('engagement', []);

    app.controller('engageController', ['$scope', function($scope){
    this.engage = engagement;

    $scope.dayButton = function(idName){
        $scope.id = (idName);
    };

    }]);

    var engagement = [{
        idName: '#1',
        day: '1st',
        likes: '255',
        comments: '12',

    }, {
        idName: '#2',
        day: '2nd',
        likes: '890',
        comments: '32',

    }, {
        idName: '#3',
        day: '3rd',
        likes: '1321',
        comments: '52',

    }, {
        idName: '#4',
        day: '4th',
        likes: '1789',
        comments: '74',
    }, {
        idName: '#5',
        day: '5th',
        likes: '2490',
        comments: '88',

    }, {
        idName: '#6',
        day: '6th',
        likes: '3165',
        comments: '102',

    }, {
        idName: '#7',
        day: '7th',
        likes: '4101',
        comments: '201',

    }, {
        idName: '#8',
        day: '8th',
        likes: '5112',
        comments: '223',

    }, {
        idName: '#9',
        day: '9th',
        likes: '6401',
        comments: '283',

    }, {
        idName: '#10',
        day: '10th',
        likes: '7891',
        comments: '348',

    }, {
        idName: '#11',
        day: '11th',
        likes: '10219',
        comments: '419',

    }, {
        idName: '#12',
        day: '12th',
        likes: '12901',
        comments: '570',

    }, {
        idName: '#13',
        day: '13th',
        likes: '14736',
        comments: '701',

    }, {
        idName: '#14',
        day: '14th',
        likes: '16782',
        comments: '890',

     }];

})();