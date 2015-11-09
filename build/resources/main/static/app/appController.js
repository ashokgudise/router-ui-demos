(
function(){
    'use strict';

    angular.module('routerApp')
            .controller('scotchController',scotchController);

    function scotchController(){

        var vm = this;

        vm.message = 'test';
        vm.scotches = [
                              {
                                  name: 'Macallan 12',
                                  price: 50
                              },
                              {
                                  name: 'Chivas Regal Royal Salute',
                                  price: 10000
                              },
                              {
                                  name: 'Glenfiddich 1937',
                                  price: 20000
                              }
                          ];

    }
}
)();

