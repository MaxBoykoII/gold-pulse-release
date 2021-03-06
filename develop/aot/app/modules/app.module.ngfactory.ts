/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../app/modules/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '@angular/http/src/http_module';
import * as import8 from '@angular/common/src/localization';
import * as import9 from '@angular/core/src/application_init';
import * as import10 from '@angular/core/src/testability/testability';
import * as import11 from '@angular/core/src/application_ref';
import * as import12 from '@angular/core/src/linker/compiler';
import * as import13 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import14 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import15 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import16 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import17 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import18 from '@angular/core/src/linker/view_utils';
import * as import19 from '@angular/platform-browser/src/browser/title';
import * as import20 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import21 from '@angular/http/src/backends/browser_xhr';
import * as import22 from '@angular/http/src/base_response_options';
import * as import23 from '@angular/http/src/backends/xhr_backend';
import * as import24 from '@angular/http/src/base_request_options';
import * as import25 from '../../../app/services/data.service';
import * as import26 from '../../../app/services/date.service';
import * as import27 from '../../../app/services/quantile.service';
import * as import28 from '../../../app/services/coloring.service';
import * as import29 from '@angular/core/src/di/injector';
import * as import30 from '../components/exploration.viewer.ngfactory';
import * as import31 from '@angular/core/src/application_tokens';
import * as import32 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import33 from '@angular/platform-browser/src/dom/events/key_events';
import * as import34 from '@angular/core/src/zone/ng_zone';
import * as import35 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import36 from '@angular/core/src/console';
import * as import37 from '@angular/core/src/i18n/tokens';
import * as import38 from '@angular/core/src/error_handler';
import * as import39 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import40 from '@angular/platform-browser/src/dom/animation_driver';
import * as import41 from '@angular/core/src/render/api';
import * as import42 from '@angular/core/src/security';
import * as import43 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import44 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import45 from '@angular/http/src/interfaces';
import * as import46 from '@angular/http/src/http';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _InternalFormsSharedModule_3:import5.InternalFormsSharedModule;
  _FormsModule_4:import6.FormsModule;
  _HttpModule_5:import7.HttpModule;
  _AppModule_6:import1.AppModule;
  __LOCALE_ID_7:any;
  __NgLocalization_8:import8.NgLocaleLocalization;
  _ErrorHandler_9:any;
  _ApplicationInitStatus_10:import9.ApplicationInitStatus;
  _Testability_11:import10.Testability;
  _ApplicationRef__12:import11.ApplicationRef_;
  __ApplicationRef_13:any;
  __Compiler_14:import12.Compiler;
  __APP_ID_15:any;
  __DOCUMENT_16:any;
  __HAMMER_GESTURE_CONFIG_17:import13.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_18:any[];
  __EventManager_19:import14.EventManager;
  __DomSharedStylesHost_20:import15.DomSharedStylesHost;
  __AnimationDriver_21:any;
  __DomRootRenderer_22:import16.DomRootRenderer_;
  __RootRenderer_23:any;
  __DomSanitizer_24:import17.DomSanitizerImpl;
  __Sanitizer_25:any;
  __ViewUtils_26:import18.ViewUtils;
  __IterableDiffers_27:any;
  __KeyValueDiffers_28:any;
  __SharedStylesHost_29:any;
  __Title_30:import19.Title;
  __RadioControlRegistry_31:import20.RadioControlRegistry;
  __BrowserXhr_32:import21.BrowserXhr;
  __ResponseOptions_33:import22.BaseResponseOptions;
  __XSRFStrategy_34:any;
  __XHRBackend_35:import23.XHRBackend;
  __RequestOptions_36:import24.BaseRequestOptions;
  __Http_37:any;
  __DataService_38:import25.DataService;
  __DateService_39:import26.DateService;
  __QuantileService_40:import27.QuantileService;
  __ColoringService_41:import28.ColoringService;
  constructor(parent:import29.Injector) {
    super(parent,[import30.ExplorationViewerNgFactory],[import30.ExplorationViewerNgFactory]);
  }
  get _LOCALE_ID_7():any {
    if ((this.__LOCALE_ID_7 == null)) { (this.__LOCALE_ID_7 = 'en-US'); }
    return this.__LOCALE_ID_7;
  }
  get _NgLocalization_8():import8.NgLocaleLocalization {
    if ((this.__NgLocalization_8 == null)) { (this.__NgLocalization_8 = new import8.NgLocaleLocalization(this._LOCALE_ID_7)); }
    return this.__NgLocalization_8;
  }
  get _ApplicationRef_13():any {
    if ((this.__ApplicationRef_13 == null)) { (this.__ApplicationRef_13 = this._ApplicationRef__12); }
    return this.__ApplicationRef_13;
  }
  get _Compiler_14():import12.Compiler {
    if ((this.__Compiler_14 == null)) { (this.__Compiler_14 = new import12.Compiler()); }
    return this.__Compiler_14;
  }
  get _APP_ID_15():any {
    if ((this.__APP_ID_15 == null)) { (this.__APP_ID_15 = import31._appIdRandomProviderFactory()); }
    return this.__APP_ID_15;
  }
  get _DOCUMENT_16():any {
    if ((this.__DOCUMENT_16 == null)) { (this.__DOCUMENT_16 = import4._document()); }
    return this.__DOCUMENT_16;
  }
  get _HAMMER_GESTURE_CONFIG_17():import13.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_17 == null)) { (this.__HAMMER_GESTURE_CONFIG_17 = new import13.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_17;
  }
  get _EVENT_MANAGER_PLUGINS_18():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_18 == null)) { (this.__EVENT_MANAGER_PLUGINS_18 = [
      new import32.DomEventsPlugin(),
      new import33.KeyEventsPlugin(),
      new import13.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_17)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_18;
  }
  get _EventManager_19():import14.EventManager {
    if ((this.__EventManager_19 == null)) { (this.__EventManager_19 = new import14.EventManager(this._EVENT_MANAGER_PLUGINS_18,this.parent.get(import34.NgZone))); }
    return this.__EventManager_19;
  }
  get _DomSharedStylesHost_20():import15.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_20 == null)) { (this.__DomSharedStylesHost_20 = new import15.DomSharedStylesHost(this._DOCUMENT_16)); }
    return this.__DomSharedStylesHost_20;
  }
  get _AnimationDriver_21():any {
    if ((this.__AnimationDriver_21 == null)) { (this.__AnimationDriver_21 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_21;
  }
  get _DomRootRenderer_22():import16.DomRootRenderer_ {
    if ((this.__DomRootRenderer_22 == null)) { (this.__DomRootRenderer_22 = new import16.DomRootRenderer_(this._DOCUMENT_16,this._EventManager_19,this._DomSharedStylesHost_20,this._AnimationDriver_21,this._APP_ID_15)); }
    return this.__DomRootRenderer_22;
  }
  get _RootRenderer_23():any {
    if ((this.__RootRenderer_23 == null)) { (this.__RootRenderer_23 = import35._createConditionalRootRenderer(this._DomRootRenderer_22,this.parent.get(import35.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_23;
  }
  get _DomSanitizer_24():import17.DomSanitizerImpl {
    if ((this.__DomSanitizer_24 == null)) { (this.__DomSanitizer_24 = new import17.DomSanitizerImpl()); }
    return this.__DomSanitizer_24;
  }
  get _Sanitizer_25():any {
    if ((this.__Sanitizer_25 == null)) { (this.__Sanitizer_25 = this._DomSanitizer_24); }
    return this.__Sanitizer_25;
  }
  get _ViewUtils_26():import18.ViewUtils {
    if ((this.__ViewUtils_26 == null)) { (this.__ViewUtils_26 = new import18.ViewUtils(this._RootRenderer_23,this._Sanitizer_25)); }
    return this.__ViewUtils_26;
  }
  get _IterableDiffers_27():any {
    if ((this.__IterableDiffers_27 == null)) { (this.__IterableDiffers_27 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_27;
  }
  get _KeyValueDiffers_28():any {
    if ((this.__KeyValueDiffers_28 == null)) { (this.__KeyValueDiffers_28 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_28;
  }
  get _SharedStylesHost_29():any {
    if ((this.__SharedStylesHost_29 == null)) { (this.__SharedStylesHost_29 = this._DomSharedStylesHost_20); }
    return this.__SharedStylesHost_29;
  }
  get _Title_30():import19.Title {
    if ((this.__Title_30 == null)) { (this.__Title_30 = new import19.Title()); }
    return this.__Title_30;
  }
  get _RadioControlRegistry_31():import20.RadioControlRegistry {
    if ((this.__RadioControlRegistry_31 == null)) { (this.__RadioControlRegistry_31 = new import20.RadioControlRegistry()); }
    return this.__RadioControlRegistry_31;
  }
  get _BrowserXhr_32():import21.BrowserXhr {
    if ((this.__BrowserXhr_32 == null)) { (this.__BrowserXhr_32 = new import21.BrowserXhr()); }
    return this.__BrowserXhr_32;
  }
  get _ResponseOptions_33():import22.BaseResponseOptions {
    if ((this.__ResponseOptions_33 == null)) { (this.__ResponseOptions_33 = new import22.BaseResponseOptions()); }
    return this.__ResponseOptions_33;
  }
  get _XSRFStrategy_34():any {
    if ((this.__XSRFStrategy_34 == null)) { (this.__XSRFStrategy_34 = import7._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_34;
  }
  get _XHRBackend_35():import23.XHRBackend {
    if ((this.__XHRBackend_35 == null)) { (this.__XHRBackend_35 = new import23.XHRBackend(this._BrowserXhr_32,this._ResponseOptions_33,this._XSRFStrategy_34)); }
    return this.__XHRBackend_35;
  }
  get _RequestOptions_36():import24.BaseRequestOptions {
    if ((this.__RequestOptions_36 == null)) { (this.__RequestOptions_36 = new import24.BaseRequestOptions()); }
    return this.__RequestOptions_36;
  }
  get _Http_37():any {
    if ((this.__Http_37 == null)) { (this.__Http_37 = import7.httpFactory(this._XHRBackend_35,this._RequestOptions_36)); }
    return this.__Http_37;
  }
  get _DataService_38():import25.DataService {
    if ((this.__DataService_38 == null)) { (this.__DataService_38 = new import25.DataService(this._Http_37)); }
    return this.__DataService_38;
  }
  get _DateService_39():import26.DateService {
    if ((this.__DateService_39 == null)) { (this.__DateService_39 = new import26.DateService(this._Http_37)); }
    return this.__DateService_39;
  }
  get _QuantileService_40():import27.QuantileService {
    if ((this.__QuantileService_40 == null)) { (this.__QuantileService_40 = new import27.QuantileService()); }
    return this.__QuantileService_40;
  }
  get _ColoringService_41():import28.ColoringService {
    if ((this.__ColoringService_41 == null)) { (this.__ColoringService_41 = new import28.ColoringService()); }
    return this.__ColoringService_41;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
    this._FormsModule_4 = new import6.FormsModule();
    this._HttpModule_5 = new import7.HttpModule();
    this._AppModule_6 = new import1.AppModule();
    this._ErrorHandler_9 = import4.errorHandler();
    this._ApplicationInitStatus_10 = new import9.ApplicationInitStatus(this.parent.get(import9.APP_INITIALIZER,(null as any)));
    this._Testability_11 = new import10.Testability(this.parent.get(import34.NgZone));
    this._ApplicationRef__12 = new import11.ApplicationRef_(this.parent.get(import34.NgZone),this.parent.get(import36.Console),this,this._ErrorHandler_9,this,this._ApplicationInitStatus_10,this.parent.get(import10.TestabilityRegistry,(null as any)),this._Testability_11);
    return this._AppModule_6;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_3; }
    if ((token === import6.FormsModule)) { return this._FormsModule_4; }
    if ((token === import7.HttpModule)) { return this._HttpModule_5; }
    if ((token === import1.AppModule)) { return this._AppModule_6; }
    if ((token === import37.LOCALE_ID)) { return this._LOCALE_ID_7; }
    if ((token === import8.NgLocalization)) { return this._NgLocalization_8; }
    if ((token === import38.ErrorHandler)) { return this._ErrorHandler_9; }
    if ((token === import9.ApplicationInitStatus)) { return this._ApplicationInitStatus_10; }
    if ((token === import10.Testability)) { return this._Testability_11; }
    if ((token === import11.ApplicationRef_)) { return this._ApplicationRef__12; }
    if ((token === import11.ApplicationRef)) { return this._ApplicationRef_13; }
    if ((token === import12.Compiler)) { return this._Compiler_14; }
    if ((token === import31.APP_ID)) { return this._APP_ID_15; }
    if ((token === import39.DOCUMENT)) { return this._DOCUMENT_16; }
    if ((token === import13.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_17; }
    if ((token === import14.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_18; }
    if ((token === import14.EventManager)) { return this._EventManager_19; }
    if ((token === import15.DomSharedStylesHost)) { return this._DomSharedStylesHost_20; }
    if ((token === import40.AnimationDriver)) { return this._AnimationDriver_21; }
    if ((token === import16.DomRootRenderer)) { return this._DomRootRenderer_22; }
    if ((token === import41.RootRenderer)) { return this._RootRenderer_23; }
    if ((token === import17.DomSanitizer)) { return this._DomSanitizer_24; }
    if ((token === import42.Sanitizer)) { return this._Sanitizer_25; }
    if ((token === import18.ViewUtils)) { return this._ViewUtils_26; }
    if ((token === import43.IterableDiffers)) { return this._IterableDiffers_27; }
    if ((token === import44.KeyValueDiffers)) { return this._KeyValueDiffers_28; }
    if ((token === import15.SharedStylesHost)) { return this._SharedStylesHost_29; }
    if ((token === import19.Title)) { return this._Title_30; }
    if ((token === import20.RadioControlRegistry)) { return this._RadioControlRegistry_31; }
    if ((token === import21.BrowserXhr)) { return this._BrowserXhr_32; }
    if ((token === import22.ResponseOptions)) { return this._ResponseOptions_33; }
    if ((token === import45.XSRFStrategy)) { return this._XSRFStrategy_34; }
    if ((token === import23.XHRBackend)) { return this._XHRBackend_35; }
    if ((token === import24.RequestOptions)) { return this._RequestOptions_36; }
    if ((token === import46.Http)) { return this._Http_37; }
    if ((token === import25.DataService)) { return this._DataService_38; }
    if ((token === import26.DateService)) { return this._DateService_39; }
    if ((token === import27.QuantileService)) { return this._QuantileService_40; }
    if ((token === import28.ColoringService)) { return this._ColoringService_41; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__12.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);