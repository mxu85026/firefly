namespace MyApp.Services {

    export class MyProductionService {

        private UserInfoResource;

        public listUsersProductions() {
            return this.UserInfoResource.query();
        }

        constructor(private $resource: ng.resource.IResourceService) {
            this.UserInfoResource = $resource('/api/userInfo/')
        }

    }
    angular.module('MyApp').service('myProductionService', MyProductionService);

}