var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ListProductionController = (function () {
            function ListProductionController(productionService, $uibModal) {
                this.productionService = productionService;
                this.$uibModal = $uibModal;
                this.productions = productionService.listProductions();
            }
            ListProductionController.prototype.progressBar = function (don, prod) {
                return Math.ceil((don / prod) * 100);
            };
            //public reqAmt(amt) {
            //    if (amt.reqAmount / 1000 < 1) {
            //        return amt.reqAmount;
            //    }
            //    else if (amt.reqAmount / 1000 < 1000) {
            //        return amt.reqAmount / 1000;
            //    }
            //    else if (amt.reqAmount / 1000000 < 1000000) {
            //        return amt.reqAmount / 1000000;
            //    }
            //    else {
            //        return amt.reqAmount / 1000000000;
            //    }
            //}
            //public reqZeroes(amt) {
            //    if (amt / 1000 < 1000) {
            //        return ",000";
            //    }
            //    else if (amt / 1000000 < 1000000) {
            //        return ",000,000";
            //    }
            //    else {
            //        return ",000,000,000";
            //    }
            //}
            ListProductionController.prototype.removeProductionModal = function (id) {
                var _this = this;
                this.$uibModal.open({
                    templateUrl: "/ngApp/views/home/deleteProduction.html",
                    controller: DialogController,
                    controllerAs: 'controller',
                    resolve: {
                        prodId: function () { return id; }
                    }
                }).result.then(function () {
                    _this.productions = _this.productionService.listProductions();
                });
            };
            return ListProductionController;
        })();
        Controllers.ListProductionController = ListProductionController;
        // delete & modal
        var DialogController = (function () {
            function DialogController(productionService, $location, prodId, $uibModalInstance) {
                this.productionService = productionService;
                this.$location = $location;
                this.prodId = prodId;
                this.$uibModalInstance = $uibModalInstance;
                this.prodToDelete = productionService.getProduction(prodId);
            }
            DialogController.prototype.deleteProd = function () {
                var _this = this;
                this.productionService.delete(this.prodId)
                    .then(function () {
                    _this.$uibModalInstance.close();
                });
            };
            DialogController.prototype.cancelDelete = function () {
                this.$uibModalInstance.close();
            };
            return DialogController;
        })();
        Controllers.DialogController = DialogController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=listProductionController.js.map