import { Injectable } from '@angular/core';
export var ColoringService = (function () {
    function ColoringService() {
    }
    ColoringService.prototype.colorByQuartile = function (el, quartiles) {
        if (isNaN(el)) {
            return null;
        }
        else if (el <= quartiles[1]) {
            return 'red';
        }
        else if (el <= quartiles[2]) {
            return 'yellow';
        }
        else if (el <= quartiles[3]) {
            return 'blue';
        }
        else {
            return 'green';
        }
    };
    ColoringService.prototype.colorDates = function (stock, ymd, quartilesByDate) {
        var change = stock.closes.find(function (date) { return date.ymd === ymd; }).change;
        var quartiles = quartilesByDate[ymd];
        change = (change === 'NA') ? change : parseFloat(change);
        return this.colorByQuartile(change, quartiles);
    };
    ColoringService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ColoringService.ctorParameters = [];
    return ColoringService;
}());
//# sourceMappingURL=coloring.service.js.map