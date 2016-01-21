namespace MyApp.Services {

    export class CommentsService {
        private CommentResource;

        public findCommId() {
            return this.$window.sessionStorage.getItem('id');
        }
        
        public listComments() {
            return this.CommentResource.get();
        }

        public getComments(id: number) {
            return this.CommentResource.get({ id: id });
        }

        public save(comment) {
            return this.CommentResource.save(comment).$promise;
        }
        
        public delete(id: number) {
            return this.CommentResource.delete({ id: id }).$promise;
        }

        constructor(private $resource: angular.resource.IResourceService, private $window: ng.IWindowService) {
            this.CommentResource = $resource('/api/comments/:id')
        }
    }

    angular.module('MyApp').service('commentsService', CommentsService);
}