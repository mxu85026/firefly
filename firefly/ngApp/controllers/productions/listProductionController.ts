namespace MyApp.Controllers {

    export class ListProductionController {
        public productions;
        constructor(
            private productionService: MyApp.Services.ProductionService,
            private $uibModal: angular.ui.bootstrap.IModalService
        ) {
            this.productions = productionService.listProductions();
        }
        public progressBar(don, prod) {
            

            return Math.ceil((don/prod)*100);
        }
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
        public removeProductionModal(id: number) {
            this.$uibModal.open({
                templateUrl: "/ngApp/views/home/deleteProduction.html",
                controller: DialogController,
                controllerAs: 'controller',
                resolve: {
                    prodId: () => id
                }
                //size: 'lg'
            }).result.then(() => {
                this.productions = this.productionService.listProductions();
            });
        }

    }

    // delete & modal
    export class DialogController {
        public prodToDelete;
        constructor(private productionService: MyApp.Services.ProductionService,
            private $location: ng.ILocationService,
            public prodId: number,
            private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {
            this.prodToDelete = productionService.getProduction(prodId);
        }
        public deleteProd() {
            this.productionService.delete(this.prodId)
                .then(() => {
                    this.$uibModalInstance.close();
                });
        }
        public cancelDelete() {
            this.$uibModalInstance.close();

        }
    }

}