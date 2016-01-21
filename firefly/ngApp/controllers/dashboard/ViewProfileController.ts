namespace MyApp.Controllers {

    export class ViewProfileController {
        public profile;
        public validationErrors;

        constructor(private $stateParams: ng.ui.IStateParamsService,
            private profileService: MyApp.Services.ProfileService,
            private $state: angular.ui.IStateService) {
            this.profile = this.profileService.viewProfile();

        }

        public goBack() {
            window.history.back();
        }

        public editProfile() {
            this.profileService.save(this.profile).then(() => {
                this.$state.go('dashboard.userDashboard.userOverview.myProductionOverview');
            }).catch((results) => {
                // flatten errors, throw below into sepereate service
                let validationErrors = [];
                for (let prop in results.data.modelState) {
                    let propErrors = results.data.modelState[prop];
                    validationErrors = validationErrors.concat(propErrors);
                }
                this.validationErrors = validationErrors;
            });
        }

    }
}