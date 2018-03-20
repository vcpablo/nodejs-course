angular.module('app', []);

angular.module('app')
    .controller('MainController', MainController);

function MainController() {
    this.people = clientPeople;
}