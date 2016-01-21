var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var MyProductionService = (function () {
            function MyProductionService($resource) {
                this.$resource = $resource;
                this.UserInfoResource = $resource('/api/userInfo/');
            }
            MyProductionService.prototype.listUsersProductions = function () {
                return this.UserInfoResource.query();
            };
            return MyProductionService;
        })();
        Services.MyProductionService = MyProductionService;
        angular.module('MyApp').service('myProductionService', MyProductionService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=myProductionService.js.map