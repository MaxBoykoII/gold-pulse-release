import { Pipe } from '@angular/core';
import { excluded } from '../constants';
export var MetricPipe = (function () {
    function MetricPipe() {
    }
    MetricPipe.prototype.transform = function (metaDefs) {
        return metaDefs.filter(function (metaDef) { return excluded.indexOf(metaDef.sid) === -1; });
    };
    MetricPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'metric'
                },] },
    ];
    /** @nocollapse */
    MetricPipe.ctorParameters = [];
    return MetricPipe;
}());
//# sourceMappingURL=metric.pipe.js.map