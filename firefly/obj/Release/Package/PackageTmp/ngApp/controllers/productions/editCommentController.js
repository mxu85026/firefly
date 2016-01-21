var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var EditCommentController = (function () {
            function EditCommentController($stateParams, commentsService, productionService, $state) {
                this.$stateParams = $stateParams;
                this.commentsService = commentsService;
                this.productionService = productionService;
                this.$state = $state;
                this.data = {};
                this.commToEdit = commentsService.getComments($stateParams['id']);
            }
            EditCommentController.prototype.goBack = function () {
                window.history.back();
            };
            EditCommentController.prototype.editComment = function () {
                var _this = this;
                this.data.prodId = this.commToEdit.productionId;
                this.data.commToSave = this.commToEdit;
                this.commentsService.save(this.data).then(function () {
                    _this.$state.go('home.detailsProduction', { id: _this.data.prodId });
                });
            };
            return EditCommentController;
        })();
        Controllers.EditCommentController = EditCommentController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=editCommentController.js.map