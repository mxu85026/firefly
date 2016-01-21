namespace MyApp.Controllers {
    export class DetailsProductionController {
        public production;
        public comments;
        public userId;
        public data: any = {};
        public donations;
        public donationData: any = {};

        public goBack() {
            window.history.back();
        }

        public progressBar() {
           var don =  this.production.donationTotal;
           var prod = this.production.reqAmount;
           
            return Math.ceil((don / prod) * 100);
        }

        public donate() {
            this.donationData.prodId = this.production.id;
            this.donationData.donationToSave = this.donations;
            this.donationsService.save(this.donationData).then(() => {
                this.production = this.productionService.getProduction(this.production.id);
            })

            this.donations = null;

            //if (this.donation <= this.production.donation.tierSelection[0]){
            //    this.donationData.tierSelection = 1;
            //}
        }

        public saveComments() {
            this.data.prodId = this.production.id;
            this.data.commToSave = this.comments;



            this.commentsService.save(this.data).then(() => {
                this.production = this.productionService.getProduction(this.production.id);
            })

            this.comments = null;
        }

        constructor(
            private accountService: MyApp.Services.AccountService,
            private commentsService: MyApp.Services.CommentsService,
            private donationsService: MyApp.Services.DonationsService,
            private productionService: MyApp.Services.ProductionService,
            $state: angular.ui.IStateService,
            $stateParams: ng.ui.IStateParamsService,
            private $uibModal: angular.ui.bootstrap.IModalService
        ) {
            let prodId = $stateParams['id'];
            this.production = productionService.getProduction(prodId);
            //this.data.canModify = this.comments.canModify;
        }

        public isAdmin() {
            return this.accountService.getClaim("Admin");
        }
        public removeCommentModal(id: number) {
            this.$uibModal.open({
                templateUrl: "/ngApp/views/home/deleteComment.html",
                controller: CommentDialogController,
                controllerAs: 'controller',
                resolve: {
                    commId: () => id
                }
                //size: 'lg'
            }).result.then(() => {
                this.production = this.productionService.getProduction(this.production.id);
            });
        }
    }

    export class CommentDialogController {
        public commToDelete;
        constructor(private productionService: MyApp.Services.ProductionService,
            private commentsService: MyApp.Services.CommentsService,
            private $location: ng.ILocationService,
            public commId: number,
            private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {
            this.commToDelete = commentsService.getComments(commId);
        }
        public deleteComm() {
            this.commentsService.delete(this.commId)
                .then(() => {
                    this.$uibModalInstance.close();
                });
        }
        public cancelDelete() {
            this.$uibModalInstance.close();

        }
    }
}