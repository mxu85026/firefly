namespace MyApp.Controllers {

    export class AddProductionController {
        public newProduction;
        public file;
        public validationErrors;
        public isAdmin() {
            return this.accountService.getClaim("Admin");
        }
        public goBack() {
            window.history.back();
        }

        public save() {
            
            this.productionService.save(this.newProduction, this.file).then(() => {
                if (this.isAdmin()) {
                    this.$state.go('dashboard.adminDashboard.listAllProductions')
                } else {
                    this.$state.go('dashboard.userDashboard.myProductions')
                };
            }).catch((results) => {
                let validationErrors = [];
                for (let prop in results.data.modelState) {
                    let propErrors = results.data.modelState[prop];
                    validationErrors = validationErrors.concat(propErrors);
                }
                this.validationErrors = validationErrors;
            })
        }

        public pickFile() {
            this.filepickerService.pick({}, this.fileUploaded.bind(this));
        }

        public fileUploaded(file) {
            this.file = file; this.$scope.$apply();
        }

        constructor(private productionService: MyApp.Services.ProductionService, private accountService:MyApp.Services.AccountService,
            private $state: angular.ui.IStateService, private filepickerService, private $scope: ng.IScope) {
        }

    }

}