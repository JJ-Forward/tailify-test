 (function() {
    var app = angular.module('gender-total', []);

    app.controller('genderController', [function(){
    this.genders = gender;
    }]);

    var gender = [{
        name: 'Male',
        followers: '29%',
        percentage: '29%',
        label: '#7b8ecf'

    }, {
        name: 'Female',
        followers: '71%',
        percentage: '71%',
        label: '#ed008e'

     }];

})();