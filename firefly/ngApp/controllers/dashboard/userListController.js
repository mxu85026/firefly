var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var UserListController = (function () {
            function UserListController(userService, $location) {
                this.userService = userService;
                this.$location = $location;
                this.users = this.userService.listUser();
            }
            return UserListController;
        })();
        Controllers.UserListController = UserListController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=userListController.js.map