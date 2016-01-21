var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var AddProductionController = (function () {
            function AddProductionController(productionService, accountService, $state, filepickerService, $scope) {
                this.productionService = productionService;
                this.accountService = accountService;
                this.$state = $state;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
            }
            AddProductionController.prototype.isAdmin = function () {
                return this.accountService.getClaim("Admin");
            };
            AddProductionController.prototype.goBack = function () {
                window.history.back();
            };
            AddProductionController.prototype.save = function () {
                var _this = this;
                this.productionService.save(this.newProduction, this.file).then(function () {
                    if (_this.isAdmin()) {
                        _this.$state.go('dashboard.adminDashboard.listAllProductions');
                    }
                    else {
                        _this.$state.go('dashboard.userDashboard.myProductions');
                    }
                    ;
                }).catch(function (results) {
                    var validationErrors = [];
                    for (var prop in results.data.modelState) {
                        var propErrors = results.data.modelState[prop];
                        validationErrors = validationErrors.concat(propErrors);
                    }
                    _this.validationErrors = validationErrors;
                });
            };
            AddProductionController.prototype.pickFile = function () {
                this.filepickerService.pick({}, this.fileUploaded.bind(this));
            };
            AddProductionController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
            };
            return AddProductionController;
        })();
        Controllers.AddProductionController = AddProductionController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=addProductionController.js.map