angular.module('socially', [
    'angular-meteor',
    'ui.router'
]);

function onReady() {
    angular.bootstrap(document, ['socially']);
    ons.ready(function() {
        menu.openMenu();
    });
}

if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
} else {
    angular.element(document).ready(onReady);
}
