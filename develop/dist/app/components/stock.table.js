import { Component, Input } from '@angular/core';
import { QuantileService } from '../services/quantile.service';
import { ColoringService } from '../services/coloring.service';
import { defaultSelection } from '../constants';
import { Stock } from '../classes/stock';
export var StockTable = (function () {
    function StockTable(_quantileService, _coloringService) {
        this._quantileService = _quantileService;
        this._coloringService = _coloringService;
        this.selection = defaultSelection;
        this.stockAverages = {};
        this.metricAverages = {};
        this.quartilesDates = {};
        this.quartilesStockAvg = [];
        this.quartilesMetricAvg = [];
    }
    StockTable.prototype.select = function (event, sid) {
        event.preventDefault();
        this.selection = sid;
    };
    StockTable.prototype.onDisplay = function (sid) {
        var stocks = this.stocks.slice();
        /*Reality check to ensure at least one stock has a value for the metric*/
        if (stocks.filter(function (stock) { return stock[sid] === undefined; }).length === stocks.length) {
            return null;
        }
        /* Apply ThresholdPipe */
        if (this.thresholds.length) {
            stocks = Stock.filter(stocks, this.thresholds);
        }
        /* Apply the sort and limit pipes */
        stocks = Stock.sort(stocks, sid, this.metaDefs);
        return stocks.slice(0, this.limit);
    };
    StockTable.prototype.averageByMetric = function (metaDef) {
        var sid = metaDef.sid;
        var stocks = this.onDisplay(sid);
        var sum = 0;
        var count = 0;
        for (var _i = 0, stocks_1 = stocks; _i < stocks_1.length; _i++) {
            var stock = stocks_1[_i];
            var avg = this.stockAverages[stock.id];
            if (!isNaN(avg)) {
                sum += avg;
                count++;
            }
        }
        return sum / count;
    };
    StockTable.prototype.colorDates = function (stock, ymd) {
        return this._coloringService.colorDates(stock, ymd, this.quartilesDates);
    };
    StockTable.prototype.colorStockAvg = function (stock) {
        var id = stock.id, avg = this.stockAverages[id], quartiles = this.quartilesStockAvg;
        return this._coloringService.colorByQuartile(avg, quartiles);
    };
    StockTable.prototype.colorMetricAvg = function (metaDef) {
        var sid = metaDef.sid, avg = this.metricAverages[sid], quartiles = this.quartilesMetricAvg;
        if (this.limit === this.stocks.length || this.displayed && this.displayed.length < this.limit || avg === null) {
            return null;
        }
        else {
            return this._coloringService.colorByQuartile(avg, quartiles);
        }
    };
    StockTable.prototype.ngOnChanges = function (changes) {
        this.stockAverages = {};
        this.metricAverages = {};
        this.displayed = this.onDisplay(this.selection);
        for (var _i = 0, _a = this.stocks; _i < _a.length; _i++) {
            var stock = _a[_i];
            this.stockAverages[stock.id] = stock.meanReturn();
        }
        for (var _b = 0, _c = this.metaDefs; _b < _c.length; _b++) {
            var metaDef = _c[_b];
            this.metricAverages[metaDef.sid] = this.averageByMetric(metaDef);
        }
        this.quartilesDates = this._quantileService.quartilesDates(this.stocks, this.futureDates);
        this.quartilesStockAvg = this._quantileService.quartilesStockAvg(this.stockAverages);
        this.quartilesMetricAvg = this._quantileService.quartilesMetricAvg(this.metricAverages);
    };
    StockTable.decorators = [
        { type: Component, args: [{
                    selector: 'stock-table',
                    templateUrl: './templates/stock.table.html',
                    styleUrls: ['./css/stock.table.css'],
                },] },
    ];
    /** @nocollapse */
    StockTable.ctorParameters = [
        { type: QuantileService, },
        { type: ColoringService, },
    ];
    StockTable.propDecorators = {
        'stocks': [{ type: Input },],
        'hp': [{ type: Input },],
        'metaDefs': [{ type: Input },],
        'currentDate': [{ type: Input },],
        'futureDates': [{ type: Input },],
        'cpMetaDefs': [{ type: Input },],
        'benchmarks': [{ type: Input },],
        'limit': [{ type: Input },],
        'spread': [{ type: Input },],
        'thresholds': [{ type: Input },],
    };
    return StockTable;
}());
//# sourceMappingURL=stock.table.js.map