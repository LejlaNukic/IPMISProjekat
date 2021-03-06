app.config(function($routeProvider){
  $routeProvider.when('/login',{
    templateUrl:"partials/loginPage.html",
    controller:"loginCtrl"
  }).when('/registration',{
    templateUrl:"partials/registrationPage.html",
    controller:"registrationCtrl"
  }).when('/services',{
    templateUrl:"partials/servicesPage.html",
    controller:"servicesCtrl"
  }).when('/services/:id',{
    templateUrl:"partials/serviceViewPage.html",
    controller:"serviceViewCtrl"
  }).when('/detailed/:text/:name/:about/:price/:options/:service',{
      templateUrl:"partials/detailedService.html",
      controller:"detailedServiceCtrl"
  }).when('/requests/:id',{
    templateUrl:"partials/showRequest.html",
    controller:"showRequestCtrl"
  }).when('/useraccount',{
      templateUrl:"partials/userInfo.html",
      controller:"userInfoCtrl",
  }).when('/incidentmanager',{
    templateUrl:"partials/incidentManager.html",
    controller:"incidentMngCtrl"
  }).when('/newincident',{
    templateUrl:"partials/newIncident.html",
    controller:"incidentCtrl"
  }).when('/changeprofileinfo',{
    templateUrl:"partials/changeProfileInfo.html",
    controller:"profileCtrl"
  }).when('/solveincident/:id',{
    templateUrl:"partials/solveIncident.html",
    controller: "incidentSolveCtrl"
  }).when("/reqm",{
    templateUrl:"partials/requestFulfillmentManager.html",
    controller: "requestFulfillmentManagerCtrl"
  }).when("/fixincident/:id",{
   templateUrl:"partials/fixIncident.html",
   controller:"fixIncidentCtrl"
}).when("/manageraddrequest",{
    templateUrl:"partials/managerAddRequest.html",
    controller:"managerAddRequestCtrl"
  }).when("/closedrequests/:id",{
    templateUrl:"partials/closedRequestView.html",
    controller:"closedRequestViewCtrl"
  }).when("/showincident/:id",{
    templateUrl:"partials/showClosedIncident.html",
    controller:"showClosedIncidentCtrl"
  }).when("/reports",{
    templateUrl:"partials/report.html",
    controller:"reportCtrl"
  }).when("/requestreports",{
    templateUrl:"partials/requestReport.html",
    controller:"requestReportCtrl"
  }).when("/myincidents",{
    templateUrl:"partials/myincidents.html",
    controller:"myIncidentsCtrl"
  }).when("/myrequests",{
    templateUrl:"partials/myrequests.html",
    controller:"myRequestsCtrl"
  }).when("/myservices",{
    templateUrl:"partials/myservices.html",
    controller:"myServicesCtrl"
  }).when("/addincident/:id",{
    templateUrl: "partials/addIncident.html",
    controller: "addIncidentCtrl"
  }).when("/",{
    templateUrl:"partials/homePage.html"
  }).otherwise("/")
});
