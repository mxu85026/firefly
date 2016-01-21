namespace MyApp.Controllers {

    export class DashboardController {

        public isAdmin() {
            return this.accountService.getClaim("Admin");
        }

        public showDashboard() {

            if (this.isAdmin()) {
                this.$state.go('dashboard.adminDashboard.listAllProductions');
            }
            else {
                this.$state.go('dashboard.userDashboard.userOverview.myProductionOverview')
            };
        }

        constructor(
            private $state: angular.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService,
            private accountService: MyApp.Services.AccountService
        ) { }
    }
}