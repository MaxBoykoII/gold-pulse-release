import { Pipe } from '@angular/core';
import { Stock } from '../classes/stock';
export var ThresholdPipe = (function () {
    function ThresholdPipe() {
    }
    ThresholdPipe.prototype.transform = function (stocks, thresholds) {
        return Stock.filter(stocks, thresholds);
    };
    ThresholdPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'threshold',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    ThresholdPipe.ctorParameters = [];
    return ThresholdPipe;
}());
//# sourceMappingURL=threshold.pipe.js.map