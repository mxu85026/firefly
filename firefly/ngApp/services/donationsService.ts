namespace MyApp.Services {

    export class DonationsService {
        private DonationResource;

        public findDonId() {
            return this.$window.sessionStorage.getItem('id');
        }

        public listDonations() {
            return this.DonationResource.get();
        }

        public getDonation(id: number) {
            return this.DonationResource.get({ id: id });
        }

        public save(donation) {
            return this.DonationResource.save(donation).$promise;
        }
        
        constructor(private $resource: angular.resource.IResourceService, private $window: ng.IWindowService) {
            this.DonationResource = $resource('/api/donation/:id')
        }
    }

    angular.module('MyApp').service('donationsService', DonationsService);
}