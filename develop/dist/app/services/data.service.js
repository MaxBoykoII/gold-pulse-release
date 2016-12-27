import * as _ from 'lodash';
import { Stock } from '../classes/stock';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.config = function () {
        /* Calls out to an internal API for configuring the app */
        return this.http.get('../config.php')
            .map(function (response) { return response.json(); });
    };
    DataService.prototype._buildBenchmarks = function (cpMetaDefs, futureDates, dates) {
        //helper function for building average returns for each benchmark
        //start building benchmarks with prices on current date
        var benchmarks = dates[0].cp;
        var _loop_1 = function(cpMetaDef) {
            var close_1 = benchmarks[cpMetaDef.sid];
            //Only compute average returns if price on current date is available
            if (!isNaN(close_1) && close_1 > 0) {
                //An array to store the future closes
                var futureCloses = [];
                var _loop_2 = function(ymd) {
                    var cp = dates.find(function (date) { return date.ymd === ymd; }).cp, futureClose = cp[cpMetaDef.sid];
                    if (!isNaN(futureClose)) {
                        futureCloses.push(futureClose);
                    }
                };
                for (var _i = 0, futureDates_1 = futureDates; _i < futureDates_1.length; _i++) {
                    var ymd = futureDates_1[_i];
                    _loop_2(ymd);
                }
                //Future Returns from Future closes
                var futureReturns = futureCloses.map(function (fclose) { return (fclose - close_1) / close_1; }), avg = futureReturns.reduce(function (sum, cur) { return sum + cur; }, 0) / futureReturns.length, formattedAvg = (avg * 100).toFixed(1);
                benchmarks[cpMetaDef.sid] = isNaN(parseFloat(formattedAvg)) ? null : formattedAvg + "%";
            }
        };
        for (var _a = 0, cpMetaDefs_1 = cpMetaDefs; _a < cpMetaDefs_1.length; _a++) {
            var cpMetaDef = cpMetaDefs_1[_a];
            _loop_1(cpMetaDef);
        }
        return benchmarks;
    };
    DataService.prototype._processData = function (raw_data) {
        var dates = raw_data.dates;
        var metaDefs = raw_data.meta_definitions;
        var cpMetaDefs = raw_data.cp_meta_definitions;
        var currentDate = dates[0].ymd;
        var stocks = _.head(dates).oids.map(function (oid) { return new Stock(oid); }), futureDates = dates.map(function (date) { return date.ymd; });
        futureDates.splice(0, 1); //remove current date from future_dates
        //metaDefs.splice(0, 1); //remove id from metaDefs
        //add closing prices for the future dates;
        for (var _i = 0, stocks_1 = stocks; _i < stocks_1.length; _i++) {
            var stock = stocks_1[_i];
            stock.setCloses(futureDates, dates, currentDate);
        }
        //Build benchmark averages from cp data;
        var benchmarks = this._buildBenchmarks(cpMetaDefs, futureDates, dates);
        return [stocks, metaDefs, futureDates, cpMetaDefs, benchmarks];
    };
    DataService.prototype.getData = function (ymd, hp) {
        var _this = this;
        if (ymd === void 0) { ymd = ''; }
        if (hp === void 0) { hp = 63; }
        return this.http.get("../edp-api-v3a.php?m=" + ymd + "&hp=" + hp)
            .map(function (response) { return response.json(); })
            .map(function (data) { return _this._processData(data); });
    };
    DataService.prototype.modifySpread = function (stocks, futureDates, spread) {
        _.forEach(stocks, function (stock) { return stock.modifySpread(futureDates, spread); });
        return stocks;
    };
    DataService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DataService.ctorParameters = [
        { type: Http, },
    ];
    return DataService;
}());
//# sourceMappingURL=data.service.js.map