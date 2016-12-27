import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/app/modules/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
