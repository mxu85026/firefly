namespace MyApp.Controllers {

    export class EditCommentController {
        public commToEdit;
        public data: any = {};
        public production;
        public validationErrors;

        public goBack() {
            window.history.back();
        }

        constructor(private $stateParams: ng.ui.IStateParamsService,
            private commentsService: MyApp.Services.CommentsService,
            private productionService: MyApp.Services.ProductionService,
            private $state: angular.ui.IStateService
           ) {
            this.commToEdit = commentsService.getComments($stateParams['id']);
           
        }
        public editComment() {
            this.data.prodId = this.commToEdit.productionId;
            this.data.commToSave = this.commToEdit;
            this.commentsService.save(this.data).then(() => {
                this.$state.go('home.detailsProduction',{id:this.data.prodId});
            })
        }

       

    }

}