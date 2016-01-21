namespace MyApp.Controllers {

    export class UserListController {
        public users;

        constructor(
            private userService: MyApp.Services.UserService,
            private $location: angular.ILocationService

        ) {
            this.users = this.userService.listUser();
        }
    }
            
}