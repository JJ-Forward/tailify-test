(function() {
  var app = angular.module('socialApp', ['ui.router', 'total-total', 'country-total', 'gender-total', 'age-total', 'engagement' ]);

  app.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /home
      $urlRouterProvider.otherwise("total");
      
      $stateProvider
      	.state('total', {
            url: "/total",
            views:{
            	'followers-view':{
            		templateUrl: "modules/total-mod.htm",
            	}
            }
        })

        .state('country', {
            url: "/country",
            views:{
            	'followers-view':{
            		templateUrl: "modules/country-mod.htm",
            	}
            }
        })

        .state('gender', {
            url: "/gender",
            
            views:{
            	'followers-view':{
            		templateUrl: "modules/gender-mod.htm",
            	}
            }
        })

        .state('age', {
            url: "/age",
            
            views:{
            	'followers-view':{
            		templateUrl: "modules/age-mod.htm",
            	}
            }
        })

        .state('engagement',{
        	url: "engagement",
        	views:{
        		'engagement-view':{
        			templateUrl: "modules/engageCalender-mod.htm",
        		}
        	}
        });

    });

})();