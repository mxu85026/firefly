var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var CommentsService = (function () {
            function CommentsService($resource, $window) {
                this.$resource = $resource;
                this.$window = $window;
                this.CommentResource = $resource('/api/comments/:id');
            }
            CommentsService.prototype.findCommId = function () {
                return this.$window.sessionStorage.getItem('id');
            };
            CommentsService.prototype.listComments = function () {
                return this.CommentResource.get();
            };
            CommentsService.prototype.getComments = function (id) {
                return this.CommentResource.get({ id: id });
            };
            CommentsService.prototype.save = function (comment) {
                return this.CommentResource.save(comment).$promise;
            };
            CommentsService.prototype.delete = function (id) {
                return this.CommentResource.delete({ id: id }).$promise;
            };
            return CommentsService;
        })();
        Services.CommentsService = CommentsService;
        angular.module('MyApp').service('commentsService', CommentsService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=commentsService.js.map