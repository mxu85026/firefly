var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var DetailsProductionController = (function () {
            function DetailsProductionController(accountService, commentsService, donationsService, productionService, $state, $stateParams, $uibModal) {
                this.accountService = accountService;
                this.commentsService = commentsService;
                this.donationsService = donationsService;
                this.productionService = productionService;
                this.$uibModal = $uibModal;
                this.data = {};
                this.donationData = {};
                var prodId = $stateParams['id'];
                this.production = productionService.getProduction(prodId);
                //this.data.canModify = this.comments.canModify;
            }
            DetailsProductionController.prototype.goBack = function () {
                window.history.back();
            };
            DetailsProductionController.prototype.progressBar = function () {
                var don = this.production.donationTotal;
                var prod = this.production.reqAmount;
                return Math.ceil((don / prod) * 100);
            };
            DetailsProductionController.prototype.donate = function () {
                var _this = this;
                this.donationData.prodId = this.production.id;
                this.donationData.donationToSave = this.donations;
                this.donationsService.save(this.donationData).then(function () {
                    _this.production = _this.productionService.getProduction(_this.production.id);
                });
                this.donations = null;
                //if (this.donation <= this.production.donation.tierSelection[0]){
                //    this.donationData.tierSelection = 1;
                //}
            };
            DetailsProductionController.prototype.saveComments = function () {
                var _this = this;
                this.data.prodId = this.production.id;
                this.data.commToSave = this.comments;
                this.commentsService.save(this.data).then(function () {
                    _this.production = _this.productionService.getProduction(_this.production.id);
                });
                this.comments = null;
            };
            DetailsProductionController.prototype.isAdmin = function () {
                return this.accountService.getClaim("Admin");
            };
            DetailsProductionController.prototype.removeCommentModal = function (id) {
                var _this = this;
                this.$uibModal.open({
                    templateUrl: "/ngApp/views/home/deleteComment.html",
                    controller: CommentDialogController,
                    controllerAs: 'controller',
                    resolve: {
                        commId: function () { return id; }
                    }
                }).result.then(function () {
                    _this.production = _this.productionService.getProduction(_this.production.id);
                });
            };
            return DetailsProductionController;
        })();
        Controllers.DetailsProductionController = DetailsProductionController;
        var CommentDialogController = (function () {
            function CommentDialogController(productionService, commentsService, $location, commId, $uibModalInstance) {
                this.productionService = productionService;
                this.commentsService = commentsService;
                this.$location = $location;
                this.commId = commId;
                this.$uibModalInstance = $uibModalInstance;
                this.commToDelete = commentsService.getComments(commId);
            }
            CommentDialogController.prototype.deleteComm = function () {
                var _this = this;
                this.commentsService.delete(this.commId)
                    .then(function () {
                    _this.$uibModalInstance.close();
                });
            };
            CommentDialogController.prototype.cancelDelete = function () {
                this.$uibModalInstance.close();
            };
            return CommentDialogController;
        })();
        Controllers.CommentDialogController = CommentDialogController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=detailsProductionController.js.map