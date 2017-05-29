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
            		templateUrl: "JJ-Forward/tailify-test/modules/total-mod.htm",
            	}
            }
        })

        .state('country', {
            url: "/country",
            views:{
            	'followers-view':{
            		templateUrl: "JJ-Forward/tailify-test/modules/country-mod.htm",
            	}
            }
        })

        .state('gender', {
            url: "/gender",
            
            views:{
            	'followers-view':{
            		templateUrl: "JJ-Forward/tailify-test/modules/gender-mod.htm",
            	}
            }
        })

        .state('age', {
            url: "/age",
            
            views:{
            	'followers-view':{
            		templateUrl: "JJ-Forward/tailify-test/modules/age-mod.htm",
            	}
            }
        })

        .state('engagement',{
        	url: "engagement",
        	views:{
        		'engagement-view':{
        			templateUrl: "JJ-Forward/tailify-test/modules/engageCalender-mod.htm",
        		}
        	}
        });

    });

})();