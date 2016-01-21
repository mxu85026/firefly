var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ProfileService = (function () {
            function ProfileService($resource) {
                this.$resource = $resource;
                this.profileResource = $resource('/api/profile/:id');
            }
            ProfileService.prototype.viewProfile = function () {
                return this.profileResource.get();
            };
            ProfileService.prototype.save = function (profile) {
                return this.profileResource.save(profile).$promise;
            };
            ProfileService.prototype.delete = function (id) {
                return this.profileResource.delete({ id: id }).$promise;
            };
            return ProfileService;
        })();
        Services.ProfileService = ProfileService;
        angular.module('MyApp').service('profileService', ProfileService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=profileServices.js.map