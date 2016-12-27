import { Pipe } from '@angular/core';
export var ShortenPipe = (function () {
    function ShortenPipe() {
    }
    ShortenPipe.prototype.transform = function (limitOptions, upperBound) {
        return limitOptions.filter(function (option) { return option < upperBound; });
    };
    ShortenPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'shorten',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    ShortenPipe.ctorParameters = [];
    return ShortenPipe;
}());
//# sourceMappingURL=shorten.pipe.js.map