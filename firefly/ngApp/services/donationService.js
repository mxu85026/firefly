var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var DonationService = (function () {
            function DonationService($resource) {
                this.$resource = $resource;
                this.DonationResource = $resource('/api/donation/:id');
            }
            DonationService.prototype.listDonations = function () {
                return this.DonationResource.query();
            };
            DonationService.prototype.getDonation = function (id) {
                return this.DonationResource.get({ id: id });
            };
            DonationService.prototype.save = function (donation) {
                return this.DonationResource.save(donation).$promise;
            };
            DonationService.prototype.delete = function (id) {
                return this.DonationResource.delete({ id: id }).$promise;
            };
            return DonationService;
        })();
        Services.DonationService = DonationService;
        angular.module('MyApp').service('donationService', DonationService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
