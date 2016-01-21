namespace MyApp.Services {

    export class ProductionService {
        private ProductionResource;
        private UserInfoResource;

        public listProductions() {
            return this.ProductionResource.query();
        }

        public getProduction(id: number) {
            return this.ProductionResource.get({ id: id });
        }

        public save(production, file) {
            production.FeatImg = file && file.url;
            return this.ProductionResource.save(production).$promise;
        }

        public delete(id: number) {
            return this.ProductionResource.delete({ id: id }).$promise;
        }

        constructor(private $resource: angular.resource.IResourceService) {
            this.ProductionResource = $resource('/api/productions/:id', null, {
                searchProductions: {
                    method: 'GET',
                    isArray: true,
                    url: '/api/productions/search/:searchString'
                }
            });
        }
    }

    angular.module('MyApp').service('productionService', ProductionService);

}