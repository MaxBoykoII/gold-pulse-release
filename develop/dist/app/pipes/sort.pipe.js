import { Pipe } from '@angular/core';
import { Stock } from '../classes/stock';
export var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (stocks, sid, metaDefs) {
        return Stock.sort(stocks, sid, metaDefs);
    };
    SortPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'sort',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    SortPipe.ctorParameters = [];
    return SortPipe;
}());
//# sourceMappingURL=sort.pipe.js.map