import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export var DateService = (function () {
    function DateService(http) {
        this.http = http;
    }
    DateService.prototype.getValidDates = function () {
        return this.http.get('../valid-dates-api.php').map(function (response) { return response.json(); });
    };
    DateService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DateService.ctorParameters = [
        { type: Http, },
    ];
    return DateService;
}());
//# sourceMappingURL=date.service.js.map