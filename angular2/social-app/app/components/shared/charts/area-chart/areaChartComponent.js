"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AreaChartComponent = (function () {
    function AreaChartComponent() {
        this.datasets = [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3]
            }
        ];
        this.labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
        this.options = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
    }
    AreaChartComponent = __decorate([
        core_1.Component({
            selector: "area-chart",
            styles: ["\n      chart {\n        display: block;\n      }\n    "],
            template: "<base-chart\n      class=\"chart\"\n      [datasets]=\"datasets\"\n      [labels]=\"labels\"\n      [options]=\"options\"\n      [chartType]=\"'line'\">\n    </base-chart>"
        }), 
        __metadata('design:paramtypes', [])
    ], AreaChartComponent);
    return AreaChartComponent;
}());
exports.AreaChartComponent = AreaChartComponent;
//# sourceMappingURL=areaChartComponent.js.map