 (function() {
    var app = angular.module('country-total', []);

    app.controller('countryController', [function(){
    this.regions = countrys;
    }]);

var countrys = [{
    name: 'UK',
    followers: '642,630.94',
    percentage: '34%',
    label: 'navy'

}, {
    name: 'France',
    followers: '510,324.57',
    percentage: '27%',
    label: 'red'

}, {
    name: 'Germany',
    followers: '226,810.92',
    percentage: '27%',
    label: 'gold'

}, {
    name: 'Russia',
    followers: '302,414.56',
    percentage: '27%',
    label: 'blue'

}, {
    name: 'Latvia',
    followers: '37,801.82',
    percentage: '2%',
    label: 'brown'

}, {
    name: 'Kongo',
    followers: '37,801.82',
    percentage: '2%',
    label: 'DarkTurquoise'

 }];

})();