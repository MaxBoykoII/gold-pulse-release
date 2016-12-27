import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DateComponent } from '../components/date.component';
import { ExplorationViewer } from '../components/exploration.viewer';
import { StockTable } from '../components/stock.table';
import { DataService } from '../services/data.service';
import { DateService } from '../services/date.service';
import { QuantileService } from '../services/quantile.service';
import { ColoringService } from '../services/coloring.service';
import { ShortenPipe } from '../pipes/shorten.pipe';
import { MatchPipe } from '../pipes/match.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { CustomPercentPipe } from '../pipes/custom-percent.pipe';
import { MetricPipe } from '../pipes/metric.pipe';
import { ThresholdPipe } from '../pipes/threshold.pipe';
import { FormatPipe } from '../pipes/format.pipe';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [BrowserModule,
                        FormsModule,
                        HttpModule
                    ],
                    declarations: [ExplorationViewer,
                        DateComponent,
                        StockTable,
                        ShortenPipe,
                        MatchPipe,
                        SortPipe,
                        CustomPercentPipe,
                        MetricPipe,
                        ThresholdPipe,
                        FormatPipe
                    ],
                    providers: [
                        DataService,
                        DateService,
                        QuantileService,
                        ColoringService
                    ],
                    bootstrap: [ExplorationViewer]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map