var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ListMyProductionController = (function () {
            function ListMyProductionController(myProductionService, $uibModal) {
                this.myProductionService = myProductionService;
                this.$uibModal = $uibModal;
                this.usersProductions = myProductionService.listUsersProductions();
            }
            ListMyProductionController.prototype.removeProductionModal = function (id) {
                var _this = this;
                this.$uibModal.open({
                    templateUrl: "/ngApp/views/home/deleteProduction.html",
                    controller: Controllers.DialogController,
                    controllerAs: 'controller',
                    resolve: {
                        prodId: function () { return id; }
                    },
                    size: 'sm'
                }).result.then(function () {
                    _this.usersProductions = _this.myProductionService.listUsersProductions();
                });
            };
            return ListMyProductionController;
        })();
        Controllers.ListMyProductionController = ListMyProductionController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=listMyProductionController.js.map