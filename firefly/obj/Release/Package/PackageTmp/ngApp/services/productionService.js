var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ProductionService = (function () {
            function ProductionService($resource) {
                this.$resource = $resource;
                this.ProductionResource = $resource('/api/productions/:id', null, {
                    searchProductions: {
                        method: 'GET',
                        isArray: true,
                        url: '/api/productions/search/:searchString'
                    }
                });
            }
            ProductionService.prototype.listProductions = function () {
                return this.ProductionResource.query();
            };
            ProductionService.prototype.getProduction = function (id) {
                return this.ProductionResource.get({ id: id });
            };
            ProductionService.prototype.save = function (production, file) {
                production.FeatImg = file && file.url;
                return this.ProductionResource.save(production).$promise;
            };
            ProductionService.prototype.delete = function (id) {
                return this.ProductionResource.delete({ id: id }).$promise;
            };
            return ProductionService;
        })();
        Services.ProductionService = ProductionService;
        angular.module('MyApp').service('productionService', ProductionService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=productionService.js.map