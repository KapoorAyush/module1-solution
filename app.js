(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope)
{
    $scope.check=function(){
        if($scope.string)
        {
            var items=$scope.string.split(',');
            if(items.length<=3)
            {
                $scope.msg="Enjoy!";
            }
            else{
                $scope.msg="Too much!";
            }
        }
        else{
            $scope.msg='Please enter data first';
        }
    };
}})();