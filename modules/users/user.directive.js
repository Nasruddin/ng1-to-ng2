/*
/!**
 * Created by nasruddin on 21/5/16.
 *!/
(function () {

    angular.module('user.module')
        .directive('userDir', userDir); 

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
})();*/
