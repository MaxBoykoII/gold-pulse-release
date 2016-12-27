import { Pipe } from '@angular/core';
export var FormatPipe = (function () {
    function FormatPipe() {
    }
    FormatPipe.prototype.transform = function (value, ordinal, sid) {
        if (sid === 'c') {
            return value.toFixed(3);
        }
        if (!isNaN(value) && typeof value === 'number' && !ordinal) {
            return value.toFixed(2);
        }
        return value;
    };
    FormatPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'format'
                },] },
    ];
    /** @nocollapse */
    FormatPipe.ctorParameters = [];
    return FormatPipe;
}());
//# sourceMappingURL=format.pipe.js.map