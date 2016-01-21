namespace MyApp.Controllers {

    export class ListMyProductionController {
        public usersProductions;


        constructor(private myProductionService: MyApp.Services.MyProductionService,
            private $uibModal: angular.ui.bootstrap.IModalService) {
            this.usersProductions = myProductionService.listUsersProductions();
        }
        public removeProductionModal(id: number) {
            this.$uibModal.open({
                templateUrl: "/ngApp/views/home/deleteProduction.html",
                controller: DialogController,
                controllerAs: 'controller',
                resolve: {
                    prodId: () => id
                },
                size: 'sm'
            }).result.then(() => {
                this.usersProductions = this.myProductionService.listUsersProductions();
            });
        }

    }
}