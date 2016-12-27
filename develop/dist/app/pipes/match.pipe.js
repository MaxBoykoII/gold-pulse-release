import { Pipe } from '@angular/core';
export var MatchPipe = (function () {
    function MatchPipe() {
    }
    MatchPipe.prototype.transform = function (value, args) {
        var ymd = args, match = value.find(function (el) { return el.ymd === ymd; });
        return (match) ? match.change : 'NA';
    };
    MatchPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'match'
                },] },
    ];
    /** @nocollapse */
    MatchPipe.ctorParameters = [];
    return MatchPipe;
}());
//# sourceMappingURL=match.pipe.js.map