//Built-in Percent pipe is unreliable outside of Chrome at the moment, so we build our own.
import { Pipe } from '@angular/core';
export var CustomPercentPipe = (function () {
    function CustomPercentPipe() {
    }
    CustomPercentPipe.prototype.transform = function (value) {
        //NOTE: no need to multiply by 100 because that occured in data.service
        return !isNaN(value) && value !== null ? (value).toFixed(1) + "%" : null;
    };
    CustomPercentPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'cpercent'
                },] },
    ];
    /** @nocollapse */
    CustomPercentPipe.ctorParameters = [];
    return CustomPercentPipe;
}());
//# sourceMappingURL=custom-percent.pipe.js.map