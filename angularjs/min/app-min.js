!function(){var t=angular.module("socialApp",["ui.router","total-total","country-total","gender-total","age-total","engagement"]);t.config(function(t,e){e.otherwise("total"),t.state("total",{url:"/total",views:{"followers-view":{templateUrl:"/tailify-test/blob/master/modules/total-mod.htm"}}}).state("country",{url:"/country",views:{"followers-view":{templateUrl:"/tailify-test/blob/master/country-mod.htm"}}}).state("gender",{url:"/gender",views:{"followers-view":{templateUrl:"/tailify-test/blob/master/gender-mod.htm"}}}).state("age",{url:"/age",views:{"followers-view":{templateUrl:"/tailify-test/blob/master/modules/age-mod.htm"}}}).state("engagement",{url:"engagement",views:{"engagement-view":{templateUrl:"/tailify-test/blob/master/modules/engageCalender-mod.htm"}}})})}();