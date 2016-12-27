import { Injectable } from '@angular/core';
import * as d3 from "d3";
export var QuantileService = (function () {
    function QuantileService() {
    }
    QuantileService.prototype.getQuartiles = function (arr) {
        arr.sort(function (el1, el2) { return el1 - el2; });
        var quartiles = [];
        for (var i = 0; i <= 1; i += 0.25) {
            quartiles.push(d3.quantile(arr, i));
        }
        return quartiles;
    };
    QuantileService.prototype.quartilesStockAvg = function (returns) {
        var arr = [];
        var ids = Object.keys(returns);
        for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
            var id = ids_1[_i];
            var stockReturn = returns[id];
            if (!isNaN(stockReturn)) {
                arr.push(stockReturn);
            }
        }
        return this.getQuartiles(arr);
    };
    QuantileService.prototype.quartilesMetricAvg = function (returns) {
        var arr = [];
        var sids = Object.keys(returns);
        for (var _i = 0, sids_1 = sids; _i < sids_1.length; _i++) {
            var sid = sids_1[_i];
            var metricReturn = returns[sid];
            if (metricReturn !== null && !isNaN(metricReturn)) {
                arr.push(metricReturn);
            }
        }
        return this.getQuartiles(arr);
    };
    QuantileService.prototype.quartilesDates = function (stocks, futureDates) {
        //Create object to store an array of quartiles for each ymd;
        var quartilesByDate = {};
        //Get quartiles for each ymd
        var _loop_1 = function(ymd) {
            var changes = [];
            //Collect the changes for each with data on ymd
            for (var _i = 0, stocks_1 = stocks; _i < stocks_1.length; _i++) {
                var stock = stocks_1[_i];
                var change = stock.closes.find(function (date) { return date.ymd === ymd; }).change;
                if (change !== 'NA') {
                    changes.push(parseFloat(change));
                }
            }
            quartilesByDate[ymd] = this_1.getQuartiles(changes);
        };
        var this_1 = this;
        for (var _a = 0, futureDates_1 = futureDates; _a < futureDates_1.length; _a++) {
            var ymd = futureDates_1[_a];
            _loop_1(ymd);
        }
        return quartilesByDate;
    };
    QuantileService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    QuantileService.ctorParameters = [];
    return QuantileService;
}());
//# sourceMappingURL=quantile.service.js.map