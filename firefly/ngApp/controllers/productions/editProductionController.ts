namespace MyApp.Controllers {

    export class EditProductionController {
        public prodToEdit;
        public file;
        public validationErrors;
        public isAdmin() {
            return this.accountService.getClaim("Admin");
        }

        public goBack() {
            window.history.back();
        }

        constructor(private $stateParams: ng.ui.IStateParamsService,
            private productionService: MyApp.Services.ProductionService,
            private accountService: MyApp.Services.AccountService,
            private $state: angular.ui.IStateService,
            private filepickerService, private $scope: ng.IScope) {
            this.prodToEdit = productionService.getProduction($stateParams['id']);
        }
        public editProduction() {


            this.productionService.save(this.prodToEdit, this.file).then(() => {
              
                    window.history.back();
                   
          


            
            }).catch((results) => {
                // flatten errors, throw below into sepereate service
                let validationErrors = [];
                for (let prop in results.data.modelState) {
                    let propErrors = results.data.modelState[prop];
                    validationErrors = validationErrors.concat(propErrors);
                }
                this.validationErrors = validationErrors;
            });
        }

        public pickFile() {
            this.filepickerService.pick({}, this.fileUploaded.bind(this));
        }

        public fileUploaded(file) {
            this.file = file; this.$scope.$apply();
        }

    }

}






