var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var AddProductionController = (function () {
            function AddProductionController(productionService, $location) {
                this.productionService = productionService;
                this.$location = $location;
            }
            AddProductionController.prototype.save = function () {
                var _this = this;
                this.productionService.save(this.newProduction).then(function () {
                    _this.$location.path('/');
                }).catch(function (results) {
                    var validationErrors = [];
                    for (var prop in results.data.modelState) {
                        var propErrors = results.data.modelState[prop];
                        validationErrors = validationErrors.concat(propErrors);
                    }
                    _this.validationErrors = validationErrors;
                });
            };
            return AddProductionController;
        })();
        Controllers.AddProductionController = AddProductionController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
