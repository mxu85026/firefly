namespace MyApp.Services {

    export class ProfileService {
        private profileResource;

      
        public viewProfile() {
            return this.profileResource.get();
        }

        public save(profile) {
            return this.profileResource.save(profile).$promise;
        }

        public delete(id: number) {
            return this.profileResource.delete({ id: id }).$promise;
        }

        constructor(private $resource: ng.resource.IResourceService) {
                this.profileResource = $resource('/api/profile/:id');
        }

    }

    angular.module('MyApp').service('profileService', ProfileService);

}