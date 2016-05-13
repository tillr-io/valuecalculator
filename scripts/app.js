(function () {
				
    'use strict';
    
    var valueCalculator = {
        controllerAs: 'calc',
        controller: function () {
            
            this.edit = false;
            this.updatePercent = function () {
                console.log('clicked');
                this.edit = !this.edit;
            }
            
            /* B3 */ this.inspections = 0;
            this.inspectionsOptions = {
                floor: 0,
                ceil: 10,
                step: 1,
                id: 'inspectionsSlider',
                onEnd: function () {
                    this.update();
                }
            };
            
            /* B4 */ this.hours = 0;
            this.hoursOptions = {
                floor: 0,
                ceil: 16,
                step: 1,
                id: 'hoursSlider',
                onEnd: function () {
                    this.update();
                }
            };
            
            /* B5 */ this.salary = 0;
            this.salaryOptions = {
                floor: 0,
                ceil: 70000,
                step: 5000,
                translate: function (value) {
                    return '£' + value;
                },
                id: 'salarySlider',
                onEnd: function () {
                    this.update();
                }
            };
            
            /* B7 */ this.chase = this.inspections * this.hours ;
            /* B8 */ this.rate = this.salary / 2080;
            /* B9 */ this.weekcost = this.chase * this.rate;
            /* B10 */ this.yearcost = this.weekcost * 52;
            
            this.percent = 40;
            
            /* private */ this.percentage = this.percent / 100;
            /* private */ this.tillrhours = this.chase * (1 - this.percentage);
            
            /* B17 */ this.team = 1;
            this.teamOptions = {
                floor: 1,
                ceil: 60,
                step: 1,
                id: 'teamSlider',
                onEnd: () => {
                    this.update();
                }
            };

            /* B13 */ this.hourssaved = ((this.chase - this.tillrhours).toFixed(0)) * this.team;
            /* B14 */ this.moneysaved = (this.yearcost * this.percentage) * this.team;
            
            this.update = function () {
                /* B7 */ this.chase = this.inspections * this.hours;
                /* B8 */ this.rate = this.salary / 2080;
                /* B9 */ this.weekcost = this.chase * this.rate;
                /* B10 */ this.yearcost = this.weekcost * 52;
                
                /* private */ this.percentage = this.percent / 100;
                /* private */ this.tillrhours = this.chase * (1 - this.percentage);
                
                /* B13 */ this.hourssaved = ((this.chase - this.tillrhours).toFixed(0)) * this.team;
                /* B14 */ this.moneysaved = (this.yearcost * this.percentage) * this.team;
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