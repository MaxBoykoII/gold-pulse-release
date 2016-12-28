import { Component } from '@angular/core';
import * as _ from 'lodash';
import { hp, limit, limitOptions, start, spread, spreadOptions, title, subtitle } from '../constants';
import { DataService } from '../services/data.service';
export var ExplorationViewer = (function () {
    function ExplorationViewer(_dataService) {
        this._dataService = _dataService;
        this.currentDate = start;
        this.hp = hp;
        this.stocks = [];
        this.metaDefs = [];
        this.futureDates = [];
        this.cpMetaDefs = [];
        this.benchmarks = {};
        this.thresholds = [];
        this.activeThresholds = [];
        this.limit = limit;
        this.limitOptions = limitOptions;
        this.spread = spread;
        this.spreadOptions = spreadOptions;
        this.title = title;
        this.subtitle = subtitle;
    }
    ExplorationViewer.prototype.update = function (event) {
        var _this = this;
        /* The event is either an update to the current date or an update to the holding period. */
        if (isNaN(event)) {
            this.currentDate = event;
        }
        else {
            this.hp = event;
        }
        this._dataService.getData(this.currentDate, this.hp).subscribe(function (processedData) {
            _this.stocks = processedData[0], _this.metaDefs = processedData[1], _this.futureDates = processedData[2], _this.cpMetaDefs = processedData[3], _this.benchmarks = processedData[4];
            if (_this.limit > _this.stocks.length || _this.limitOptions.indexOf(_this.limit) === -1) {
                _this.limit = _this.stocks.length;
            }
            if (_this.spread !== 0) {
                _this.modifySpread(_this.spread);
            }
        });
    };
    ExplorationViewer.prototype.modifySpread = function (event) {
        this.spread = event;
        this.stocks = this._dataService.modifySpread(this.stocks, this.futureDates, this.spread);
    };
    ExplorationViewer.prototype.updateActiveThresholds = function () {
        /* Utility to create a new version of activeThresholds
         * This artifice ensures that ngChanges fires in StockTable
         */
        var copy = this.activeThresholds.slice();
        this.activeThresholds = copy;
    };
    ExplorationViewer.prototype.activateThreshold = function (sid, sign, val) {
        var current = this.activeThresholds.find(function (threshold) { return threshold.sid === sid; });
        /* If there is already a threshold set for metric with sid, update it. */
        if (current) {
            current.sign = sign;
            current.val = val;
        }
        else {
            this.activeThresholds.push({
                sid: sid,
                sign: sign,
                val: val
            });
        }
        this.updateActiveThresholds();
    };
    ExplorationViewer.prototype.deactivateThreshold = function (sid) {
        /* If metric with sid had an active threshold, remove it. */
        _.remove(this.activeThresholds, function (threshold) { return threshold.sid === sid; });
        this.updateActiveThresholds();
    };
    ExplorationViewer.prototype.displayThreshold = function (sid) {
        /* If there is an active threshold for metric with sid, return threshold; else 'none'. */
        var active = this.activeThresholds.find(function (threshold) { return threshold.sid === sid; });
        if (active) {
            var sign = void 0;
            switch (active.sign) {
                case 'gt':
                    sign = '>';
                    break;
                case 'lt':
                    sign = '<';
                    break;
                case 'eq':
                    sign = '=';
            }
            return sign + " " + active.val;
        }
        return 'none';
    };
    ExplorationViewer.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.config().subscribe(function (config) {
            _this.thresholds = config.thresholds ? config.thresholds : [];
            console.log("The config obj:", config);
            if (config.title && config.subtitle) {
                _this.title = config.title;
                _this.subtitle = config.subtitle;
            }
            if (config.default_date) {
                _this.currentDate = config.default_date;
            }
            if (config.limit) {
                _this.limit = config.limit.default;
                _this.limitOptions = config.limit.values;
                _this.limitTooltip = config.limit.tooltip;
                _this.limitText = config.limit.title;
            }
            if (config.spread) {
                _this.spread = config.spread.default;
                _this.spreadOptions = config.spread.values;
                _this.spreadTootlip = config.spread.tooltip;
                _this.spreadText = config.spread.title;
            }
            if (config.hold) {
                _this.hp = config.hold.default;
            }
        });
        this._dataService.getData(this.currentDate).subscribe(function (processedData) {
            _this.stocks = processedData[0], _this.metaDefs = processedData[1], _this.futureDates = processedData[2], _this.cpMetaDefs = processedData[3], _this.benchmarks = processedData[4];
            if (_this.spread !== 0) {
                _this.modifySpread(_this.spread);
            }
        });
    };
    ExplorationViewer.decorators = [
        { type: Component, args: [{
                    selector: 'exploration-viewer',
                    templateUrl: './templates/exploration.viewer.html',
                    styleUrls: ['./css/exploration.viewer.css']
                },] },
    ];
    /** @nocollapse */
    ExplorationViewer.ctorParameters = [
        { type: DataService, },
    ];
    return ExplorationViewer;
}());
//# sourceMappingURL=exploration.viewer.js.map