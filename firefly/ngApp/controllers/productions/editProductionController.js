var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var EditProductionController = (function () {
            function EditProductionController($stateParams, productionService, accountService, $state, filepickerService, $scope) {
                this.$stateParams = $stateParams;
                this.productionService = productionService;
                this.accountService = accountService;
                this.$state = $state;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.prodToEdit = productionService.getProduction($stateParams['id']);
            }
            EditProductionController.prototype.isAdmin = function () {
                return this.accountService.getClaim("Admin");
            };
            EditProductionController.prototype.goBack = function () {
                window.history.back();
            };
            EditProductionController.prototype.editProduction = function () {
                var _this = this;
                this.productionService.save(this.prodToEdit, this.file).then(function () {
                    window.history.back();
                }).catch(function (results) {
                    // flatten errors, throw below into sepereate service
                    var validationErrors = [];
                    for (var prop in results.data.modelState) {
                        var propErrors = results.data.modelState[prop];
                        validationErrors = validationErrors.concat(propErrors);
                    }
                    _this.validationErrors = validationErrors;
                });
            };
            EditProductionController.prototype.pickFile = function () {
                this.filepickerService.pick({}, this.fileUploaded.bind(this));
            };
            EditProductionController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
            };
            return EditProductionController;
        })();
        Controllers.EditProductionController = EditProductionController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=editProductionController.js.map