var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ViewProfileController = (function () {
            function ViewProfileController($stateParams, profileService, $state) {
                this.$stateParams = $stateParams;
                this.profileService = profileService;
                this.$state = $state;
                this.profile = this.profileService.viewProfile();
            }
            ViewProfileController.prototype.goBack = function () {
                window.history.back();
            };
            ViewProfileController.prototype.editProfile = function () {
                var _this = this;
                this.profileService.save(this.profile).then(function () {
                    _this.$state.go('dashboard.userDashboard.userOverview.myProductionOverview');
                }).catch(function (results) {
                    // flatten errors, throw below into sepereate service
                    var validationErrors = [];
                    for (var prop in results.data.modelState) {
                        var propErrors = results.data.modelState[prop];
                        validationErrors = validationErrors.concat(propErrors);
                    }
                    _this.validationErrors = validationErrors;
                });
            };
            return ViewProfileController;
        })();
        Controllers.ViewProfileController = ViewProfileController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=ViewProfileController.js.map