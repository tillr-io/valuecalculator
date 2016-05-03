(function () {
				
    'use strict';
    
    var valueCalculator = {
        controllerAs: 'calc',
        controller: function () {
            
            this.inspections = 5;
            this.inspectionsOptions = {
                floor: 1,
                ceil: 28,
                step: 1,
                id: 'inspectionsSlider',
                onEnd: () => {
                    this.update();
                }
            };
            
            this.hours = 1;
            this.hoursOptions = {
                floor: 1,
                ceil: 21,
                step: 1,
                id: 'hoursSlider',
                onEnd: () => {
                    this.update();
                }
            };
            
            this.time = this.inspections * this.hours;
            this.timeOptions = {
                floor: 1,
                step: 1,
                readOnly: true,
                id: 'timeSlider'
            };
            
            this.salary = 40000;
            this.salaryOptions = {
                floor: 15000,
                ceil: 90000,
                step: 5000,
                translate: function (value) {
                    return '£' + value;
                },
                id: 'salarySlider',
                onEnd: () => {
                    this.update();
                }
            };
            
            this.weeklyrate = this.salary / 52;
            this.weeklyrateOptions = {
                floor: 100,
                step: 1,
                translate: function (value) {
                    return '£' + value;
                },
                id: 'weeklyrateSlider',
                readOnly: true,
                enforceStep: true
            };
            
            this.hourlyrate = this.weeklyrate / 37.5;
            this.hourlyrateOptions = {
                floor: 8,
                step: 1,
                translate: function (value) {
                    return '£' + value;
                },
                id: 'hourlyrateSlider',
                readOnly: true,
                enforceStep: true
            };
            
            this.weeklycost = this.time * this.hourlyrate;
            this.weeklycostOptions = {
                floor: 50,
                step: 1,
                translate: function (value) {
                    return '£' + value;
                },
                id: 'weeklycostSlider',
                readOnly: true,
                enforceStep: true
            };
            
            this.yearlycost = this.weeklycost * 52;
            this.yearlycostOptions = {
                floor: 1000,
                step: 1,
                translate: function (value) {
                    return '£' + value;
                },
                id: 'yearlycostSlider',
                readOnly: true,
                enforceStep: true
            };
            
            this.tillrtime = this.time / 2;
            this.tillrtimesaved = this.time - this.tillrtime;
            this.tillrcost = this.yearlycost / 2;
            this.tillrcostsaved = this.yearlycost - this.tillrcost;
            
            this.update = function () {
                this.time = this.inspections * this.hours
                this.weeklyrate = this.salary / 52;
                this.hourlyrate = this.weeklyrate / 37.5;
                this.weeklycost = this.time * this.hourlyrate;
                this.yearlycost = this.weeklycost * 52;
                
                this.tillrtime = this.time / 2;
                this.tillrtimesaved = this.time - this.tillrtime;
                this.tillrcost = this.yearlycost / 2;
                this.tillrcostsaved = this.yearlycost - this.tillrcost;
            }
            
        },
        templateUrl: 'calculator.html'	
    };

    angular
        .module('vc', ['ng-currency', 'rzModule'])
        .run(function( RzSliderOptions ) {
            RzSliderOptions.options({
                enforceStep: false
            });
        })
        .component('valueCalculator', valueCalculator);
        
})();