var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var DashboardController = (function () {
            function DashboardController($state, $stateParams, accountService) {
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.accountService = accountService;
            }
            DashboardController.prototype.isAdmin = function () {
                return this.accountService.getClaim("Admin");
            };
            DashboardController.prototype.showDashboard = function () {
                if (this.isAdmin()) {
                    this.$state.go('dashboard.adminDashboard.listAllProductions');
                }
                else {
                    this.$state.go('dashboard.userDashboard.userOverview.myProductionOverview');
                }
                ;
            };
            return DashboardController;
        })();
        Controllers.DashboardController = DashboardController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=dashboardController.js.map