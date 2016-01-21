namespace MyApp {

    angular.module('MyApp', ['ngRoute', 'ngResource', "ui.bootstrap", "ui.router", "angular-filepicker"]).config((
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider,
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        filepickerProvider: any) => {

        filepickerProvider.setKey('AhQwRZ2Rl6s0LFaHClVgVz');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'controller',
                abstract: true
            })
            .state('home.listProduction', {
                url: '',
                templateUrl: '/ngApp/views/home/listProductions.html',
                controller: MyApp.Controllers.ListProductionController,
                controllerAs: 'controller'
            })
            .state('addProduction', {
                url: '/addProduction',
                templateUrl: '/ngApp/views/home/addProduction.html',
                controller: MyApp.Controllers.AddProductionController,
                controllerAs: 'controller'
            })
            .state('dashboard.userDashboard.addProduction', {
                url: '/addProduction',
                templateUrl: '/ngApp/views/home/addProduction.html',
                controller: MyApp.Controllers.AddProductionController,
                controllerAs: 'controller'
            })
            .state('home.editProduction', {
                url: 'editProduction/:id',
                templateUrl: 'ngApp/views/home/editProduction.html',
                controller: MyApp.Controllers.EditProductionController,
                controllerAs: 'controller'
            })
            
            .state('dashboard.adminDashboard.editProduction', {
                url: 'editProduction/:id',
                templateUrl: 'ngApp/views/home/editProduction.html',
                controller: MyApp.Controllers.EditProductionController,
                controllerAs: 'controller'
            })
            .state('dashboard.userDashboard.editProduction', {
                url: 'editProduction/:id',
                templateUrl: 'ngApp/views/home/editProduction.html',
                controller: MyApp.Controllers.EditProductionController,
                controllerAs: 'controller'
            })
            .state('home.detailsProduction', {
                url: 'production/:id',
                templateUrl: '/ngApp/views/home/detailsProduction.html',
                controller: MyApp.Controllers.DetailsProductionController,
                controllerAs: 'controller'
            })
            .state('home.editComment', {
                url: 'editComment/:id',
                templateUrl: '/ngApp/views/home/editComment.html',
                controller: MyApp.Controllers.EditCommentController,
                controllerAs: 'controller'
            })
            .state('dashboard.adminDashboard.detailsProduction', {
                url: '/production/:id',
                templateUrl: '/ngApp/views/dashboards/detailProdDash.html',
                controller: MyApp.Controllers.DetailsProductionController,
                controllerAs: 'controller'
            })
            .state('dashboard.userDashboard.detailsProduction', {
                url: '/production/:id',
                templateUrl: '/ngApp/views/dashboards/detailProdDash.html',
                controller: MyApp.Controllers.DetailsProductionController,
                controllerAs: 'controller'
            })
            .state('dashboard.adminDashboard.deleteProduction', {
                url: '/deleteProduction/:id',
                templateUrl: '/ngApp/views/dashboards/deleteProduction.html',
                controller: MyApp.Controllers.DialogController,
                controllerAs: 'controller'
            })
            .state('home.deleteProduction', {
                url: 'deleteProduction/:id',
                templateUrl: '/ngApp/views/home/deleteProduction.html',
                controller: MyApp.Controllers.DialogController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: MyApp.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: '/ngApp/views/dashboards/dashboard.html',
                controller: MyApp.Controllers.DashboardController,
                controllerAs: 'controller'
            })
            .state('dashboard.userDashboard', {
                url: '/userDashboard',
                templateUrl: '/ngApp/views/dashboards/userDashboard.html',
                controller: MyApp.Controllers.ViewProfileController,
                controllerAs: 'controller',
                abstract: true
            })
            .state('dashboard.userDashboard.userOverview', {
                url: '',
                templateUrl: '/ngApp/views/dashboards/userOverview.html',
                controller: MyApp.Controllers.ViewProfileController,
                controllerAs: 'controller',
                abstract: true
            })
            .state('dashboard.adminDashboard.messages', {
                url: '/messages',
                templateUrl: '/ngApp/views/dashboards/message.html',
                
            })
            .state('dashboard.userDashboard.userOverview.myProductionOverview', {
                url: '',
                templateUrl: '/ngApp/views/dashboards/myProductionOverview.html',
                controller: MyApp.Controllers.ListMyProductionController,
                controllerAs: 'controller'
            })
            .state('dashboard.userDashboard.myProfile', {
                url: '/myProfile',
                templateUrl: '/ngApp/views/dashboards/editProfile.html',
                controller: MyApp.Controllers.ViewProfileController,
                controllerAs: 'controller'
            })
            .state('dashboard.userDashboard.help', {
                url: '/help',
                templateUrl: '/ngApp/views/dashboards/help.html',
                
            })
            .state('dashboard.userDashboard.myProductions', {
                url: '/myProductions',
                templateUrl: '/ngApp/views/dashboards/listMyProductions.html',
                controller: MyApp.Controllers.ListMyProductionController,
                controllerAs: 'controller'
            })
            .state('dashboard.adminDashboard', {
                url: '/adminDashboard',
                templateUrl: '/ngApp/views/dashboards/adminDashboard.html',
                controller: MyApp.Controllers.AdminDashboardController,
                controllerAs: 'controller',
                abstract: true
            })
            .state('dashboard.adminDashboard.listAllProductions', {
                url: '', 
                templateUrl: '/ngApp/views/dashboards/listAllProductions.html',
                controller: MyApp.Controllers.ListProductionController,
                controllerAs: 'controller'
            })
            .state('dashboard.adminDashboard.userList', {
                url: '/userList',
                templateUrl: '/ngApp/views/dashboards/userList.html',
                controller: MyApp.Controllers.UserListController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: MyApp.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: MyApp.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .state('externalLogin', {
                url: '/externalLogin',
                templateUrl: '/ngApp/views/externalLogin.html', 
                controller: MyApp.Controllers.ExternalLoginController,
                controllerAs: 'controller'
            })
            .state('externalRegister', {
                url: '/externalRegister', 
                templateUrl: '/ngApp/views/externalRegister.html',
                controller: MyApp.Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            })
            .state('confirmEmail', {
                url: '/confirmEmail',
                templateUrl: '/ngApp/views/confirmEmail.html',
                controller: MyApp.Controllers.ConfirmEmailController,
                controllerAs: 'controller'
            })

        $urlRouterProvider  
            .otherwise('/ngApp/views/notFound.html')

        //$routeProvider
        //    .when('/', {
        //        templateUrl: '/ngApp/views/home/listProductions.html',
        //        controller: MyApp.Controllers.ListProductionController,
        //        controllerAs: 'controller'
        //    })
            //.when('/addProduction', {
            //    templateUrl: '/ngApp/views/home/addProduction.html',
            //    controller: MyApp.Controllers.AddProductionController,
            //    controllerAs: 'controller'
            //})
            //.when('/editProduction/:id', {
            //    templateUrl: '/ngApp/views/home/editProduction.html',
            //    controller: MyApp.Controllers.EditProductionController,
            //    controllerAs: 'controller'
            //})
            //.when('/production/:id', {
            //    templateUrl: '/ngApp/views/home/detailsProduction.html',
            //    controller: MyApp.Controllers.DetailsProductionController,
            //    controllerAs: 'controller'
            //})
            // dashboard
            //.when('/dashboard/myProductions', {
            //    templateUrl: '/ngApp/views/home/dashboard/listMyProductions.html',
            //    controller: MyApp.Controllers.ListMyProductionController,
            //    controllerAs: 'controller'
            //})
            //.when('/dashboard/myProfile', {
            //    templateUrl: '/ngApp/views/home/dashboard/editProfile.html',
            //    controller: MyApp.Controllers.ViewProfileController,
            //    controllerAs: 'controller'
            //})
            //.when('/about', {
            //    templateUrl: '/ngApp/views/about.html',
            //    controller: MyApp.Controllers.AboutController,
            //    controllerAs: 'controller'
            //})
            //.when('/login', {
            //    templateUrl: '/ngApp/views/login.html',
            //    controller: MyApp.Controllers.LoginController,
            //    controllerAs: 'controller'
            //})
            //.when('/register', {
            //    templateUrl: '/ngApp/views/register.html',
            //    controller: MyApp.Controllers.RegisterController,
            //    controllerAs: 'controller'
            //})
            //.when('/externalLogin', {
            //    templateUrl: '/ngApp/views/externalLogin.html',
            //    controller: MyApp.Controllers.ExternalLoginController,
            //    controllerAs: 'controller'
            //})
            //.when('/externalRegister', {
            //    templateUrl: '/ngApp/views/externalRegister.html',
            //    controller: MyApp.Controllers.ExternalRegisterController,
            //    controllerAs: 'controller'
            //})
            //.when('/confirmEmail', {
            //    templateUrl: '/ngApp/views/confirmEmail.html',
            //    controller: MyApp.Controllers.ConfirmEmailController,
            //    controllerAs: 'controller'
            //})
            //.otherwise({
            //    redirectTo: '/ngApp/views/notFound.html'
            //});

        $locationProvider.html5Mode(true);
    });

    angular.module('MyApp').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                let token = $window.sessionStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                }
                return response || $q.when(response);
            }
        })
    );


    angular.module('MyApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

}