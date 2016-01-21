namespace MyApp.Services {

    export class DonationService {
        private DonationResource;
        private UserInfoResource;

        public listDonations() {
            return this.DonationResource.query();
        }

        public getDonation(id: number) {
            return this.DonationResource.get({ id: id });
        }

        public save(donation) {
            return this.DonationResource.save(donation).$promise;
        }

        public delete(id: number) {
            return this.DonationResource.delete({ id: id }).$promise;
        }

        constructor(private $resource: ng.resource.IResourceService) {
            this.DonationResource = $resource('/api/donation/:id');
        }
    }

    angular.module('MyApp').service('donationService', DonationService);

}