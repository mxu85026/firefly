var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var UserService = (function () {
            function UserService($resource) {
                this.UserResource = $resource('/api/users/:id');
            }
            UserService.prototype.listUser = function () {
                return this.UserResource.query();
            };
            UserService.prototype.get = function (id) {
                return this.UserResource.get({ id: id });
            };
            UserService.prototype.save = function (user) {
                return this.UserResource.save(user).$promise;
            };
            UserService.prototype.delete = function (user) {
                return this.UserResource.delete({ id: user.id }).$promise;
            };
            return UserService;
        })();
        Services.UserService = UserService;
        angular.module('MyApp').service('userService', UserService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=usersService.js.map