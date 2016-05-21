/**
 * Created by nasruddin on 21/5/16.
 */
(function () {

    angular
        .module('user.module')
        .controller('userController', userController)

    .directive('userDir', userDir);
    userController.$inject = ['userService'];

    function userDir() {
        var directive = {
            restrict: 'E',
            link: link,
            templateUrl: 'modules/users/users.html',
            controller: userController,
            controllerAs: 'vm',
            bindToController: true

        };
        return directive;

        function link(scope, element, attrs) {

        }
    }



    function userController(userService) {
        var vm = this;
        vm.getUsers = getUsers;
        vm.users = [];

        function getUsers() {
            userService.getUsers().then(function (response) {
                vm.users = response.data;
                console.log('check response ' + response);
            })
        }
    }
})();