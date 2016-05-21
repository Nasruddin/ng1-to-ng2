/**
 * Created by nasruddin on 21/5/16.
 */
(function () {

    angular
        .module('user.module')
        .factory('userService', userService);

    userService.$inject = ['$http']

    function userService($http) {
        return {
            getUsers: getUsers
        }

        function getUsers() {
            return $http.get('http://jsonplaceholder.typicode.com/users')
                .then(getUserComplete)
                .catch(getUserFailed);
        }

        function getUserComplete(response) {
            return response;
        }

        function getUserFailed(error) {

        }
    }
})();