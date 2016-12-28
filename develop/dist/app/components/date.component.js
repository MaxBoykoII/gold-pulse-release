import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DateService } from '../services/date.service';
import { DataService } from '../services/data.service';
import { hpOptions, jump, jumpOptions, gap, gapOptions } from '../constants';
export var DateComponent = (function () {
    function DateComponent(_dateService, _dataService) {
        this._dateService = _dateService;
        this._dataService = _dataService;
        this.hpOptions = hpOptions;
        this.jump = jump;
        this.jumpOptions = jumpOptions;
        this.gap = gap;
        this.gapOptions = gapOptions;
        this.validDates = [];
        this.inputDate = {
            'ymd': '',
            'valid': true
        };
        this.updateCurrentDate = new EventEmitter();
        this.updateHp = new EventEmitter();
    }
    DateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dateService.getValidDates().subscribe(function (dates) {
            _this.validDates = dates;
            var length = dates.length;
            if (length) {
                _this.min = dates[0];
                _this.max = dates[length - 1];
            }
        });
        this._dataService.config().subscribe(function (config) {
            if (config.jump) {
                _this.jump = config.jump.default;
                _this.jumpOptions = config.jump.values;
                _this.jumpTooltip = config.jump.tooltip;
            }
            if (config.hold) {
                _this.hpOptions = config.hold.values;
                _this.hpTootlip = config.hold.tooltip;
            }
        });
    };
    DateComponent.prototype.flag = function (event) {
        var invalid = isNaN(Date.parse(event));
        this.inputDate.valid = !invalid;
    };
    DateComponent.prototype.updateYmd = function (ymd) {
        this.inputDate.ymd = ymd;
        this.updateCurrentDate.emit(this.inputDate.ymd);
        this.flag(ymd);
    };
    DateComponent.prototype.updateHoldingPeriod = function (hpOption) {
        this.updateHp.emit(hpOption);
    };
    DateComponent.prototype.submit = function () {
        var timeStamp = Date.parse(this.inputDate.ymd);
        if (!isNaN(timeStamp)) {
            var closest = this.validDates.filter(function (ymd) { return Date.parse(ymd) >= timeStamp; }).reduce(function (acc, curr) {
                var diff1 = Date.parse(curr) - timeStamp, diff2 = Date.parse(acc) - timeStamp;
                return (diff1 < diff2) ? curr : acc;
            });
            this.updateYmd(closest);
        }
        else {
            alert('Invalid date!');
        }
    };
    DateComponent.prototype.increment = function (change) {
        var index = this.validDates.indexOf(this.currentDate), indexLast = this.validDates.length - 1;
        if ((change === 'up' && (index + this.jump <= indexLast)) || (change === 'down' && (index - this.jump >= 0))) {
            var newIndex = (change === 'up') ? (index + this.jump) : (index - this.jump), newCurrentDate = this.validDates[newIndex];
            this.updateYmd(newCurrentDate);
        }
        else {
            var newCurrentDate = (change === 'up') ? this.validDates[indexLast] : this.validDates[0];
            this.updateYmd(newCurrentDate);
        }
    };
    DateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'date-component',
                    templateUrl: './templates/date.component.html',
                    styleUrls: ['./css/date.component.css']
                },] },
    ];
    /** @nocollapse */
    DateComponent.ctorParameters = [
        { type: DateService, },
        { type: DataService, },
    ];
    DateComponent.propDecorators = {
        'currentDate': [{ type: Input },],
        'hp': [{ type: Input },],
        'updateCurrentDate': [{ type: Output },],
        'updateHp': [{ type: Output },],
    };
    return DateComponent;
}());
//# sourceMappingURL=date.component.js.map