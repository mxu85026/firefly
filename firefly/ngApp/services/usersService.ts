namespace MyApp.Services {
    export class UserService {
        private UserResource;

        public listUser() {
            return this.UserResource.query();
        }

        public get(id: string) {

            return this.UserResource.get({ id: id });
        }

        public save(user) {
            return this.UserResource.save(user).$promise;
        }

        constructor($resource: angular.resource.IResourceService) {
            this.UserResource = $resource('/api/users/:id');
        }

        public delete(user) {
            return this.UserResource.delete({ id: user.id }).$promise;
        }
    }
    angular.module('MyApp').service('userService', UserService);
}