var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var DonationsService = (function () {
            function DonationsService($resource, $window) {
                this.$resource = $resource;
                this.$window = $window;
                this.DonationResource = $resource('/api/donation/:id');
            }
            DonationsService.prototype.findDonId = function () {
                return this.$window.sessionStorage.getItem('id');
            };
            DonationsService.prototype.listDonations = function () {
                return this.DonationResource.get();
            };
            DonationsService.prototype.getDonation = function (id) {
                return this.DonationResource.get({ id: id });
            };
            DonationsService.prototype.save = function (donation) {
                return this.DonationResource.save(donation).$promise;
            };
            return DonationsService;
        })();
        Services.DonationsService = DonationsService;
        angular.module('MyApp').service('donationsService', DonationsService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=donationsService.js.map