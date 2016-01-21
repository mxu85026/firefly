var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ListProductionController = (function () {
            function ListProductionController(productionService) {
                this.productionService = productionService;
                this.productions = productionService.listProductions();
            }
            return ListProductionController;
        })();
        Controllers.ListProductionController = ListProductionController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
