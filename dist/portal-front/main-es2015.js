(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/initial-page/initial-page.component */ "./src/app/components/initial-page/initial-page.component.ts");
/* harmony import */ var _components_objective_content_objective_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/objective-content/objective-content.component */ "./src/app/components/objective-content/objective-content.component.ts");
/* harmony import */ var _components_mapa_servicos_mapa_servicos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mapa-servicos/mapa-servicos.component */ "./src/app/components/mapa-servicos/mapa-servicos.component.ts");
/* harmony import */ var _components_contato_content_contato_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contato-content/contato-content.component */ "./src/app/components/contato-content/contato-content.component.ts");
/* harmony import */ var _components_ajuda_content_ajuda_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ajuda-content/ajuda-content.component */ "./src/app/components/ajuda-content/ajuda-content.component.ts");
/* harmony import */ var _grafa_painel_grafa_painel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grafa-painel/grafa-painel.component */ "./src/app/grafa-painel/grafa-painel.component.ts");










const routes = [
    { path: '', component: _components_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_2__["InitialPageComponent"] },
    { path: 'quem-somos', component: _components_objective_content_objective_content_component__WEBPACK_IMPORTED_MODULE_3__["ObjectiveContentComponent"] },
    { path: 'mapa-rede-servicos-acessiveis', component: _components_mapa_servicos_mapa_servicos_component__WEBPACK_IMPORTED_MODULE_4__["MapaServicosComponent"] },
    { path: 'contatos', component: _components_contato_content_contato_content_component__WEBPACK_IMPORTED_MODULE_5__["ContatoContentComponent"] },
    { path: 'ajuda', component: _components_ajuda_content_ajuda_content_component__WEBPACK_IMPORTED_MODULE_6__["AjudaContentComponent"] },
    { path: 'dash/:id', component: _grafa_painel_grafa_painel_component__WEBPACK_IMPORTED_MODULE_7__["GrafaPainelComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                anchorScrolling: 'enabled',
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        anchorScrolling: 'enabled',
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _portal_services_print_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portal/services/print.service */ "./src/app/portal/services/print.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/toolbar/toolbar.component */ "./src/app/navigation/toolbar/toolbar.component.ts");
/* harmony import */ var _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu-bar/menu-bar.component */ "./src/app/components/menu-bar/menu-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_foot_bar_foot_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/foot-bar/foot-bar.component */ "./src/app/components/foot-bar/foot-bar.component.ts");
/* harmony import */ var _components_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/acessibility-bar/acessibility-bar.component */ "./src/app/components/acessibility-bar/acessibility-bar.component.ts");











function AppComponent_aside_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-acessibility-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AppComponent {
    // alternatively also the host parameter in the @Component()` decorator can be used
    constructor(printService, responsive) {
        this.printService = printService;
        this.responsive = responsive;
        this.title = 'Observatório Municipal da Pessoa com Deficiência';
        this.acessoMobile = false;
    }
    ngOnInit() {
        this.responsive.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].TabletPortrait]).subscribe(result => {
            this.acessoMobile = false;
            if (result.matches) {
                this.acessoMobile = true;
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_portal_services_print_service__WEBPACK_IMPORTED_MODULE_2__["PrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 1, consts: [["aria-labelledby", "barraacessibilidade", 4, "ngIf"], ["id", "barramenu"], ["id", "menubar"], ["id", "content", 1, "content", 2, "min-block-size", "70vh"], ["name", "print"], ["id", "footbar"], ["aria-labelledby", "barraacessibilidade"], ["id", "barraacessibilidade"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_aside_0_Template, 3, 0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-menu-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "router-outlet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-foot-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.acessoMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"], _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_5__["MenuBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _components_foot_bar_foot_bar_component__WEBPACK_IMPORTED_MODULE_7__["FootBarComponent"], _components_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_8__["AcessibilityBarComponent"]], styles: ["#barraacessibilidade[_ngcontent-%COMP%]{\n    background-color: #EEEEE4;\n}\n\n#barramenu[_ngcontent-%COMP%] {\n    background-color: #1C2E8A;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7O0FBRTdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFycmFhY2Vzc2liaWxpZGFkZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUU0O1xufVxuXG4jYmFycmFtZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyRThBO1xuICAgIFxufVxuXG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _portal_services_print_service__WEBPACK_IMPORTED_MODULE_2__["PrintService"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _portal_portal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portal/portal.module */ "./src/app/portal/portal.module.ts");
/* harmony import */ var _portal_services_print_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portal/services/print.service */ "./src/app/portal/services/print.service.ts");
/* harmony import */ var _components_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/acessibility-bar/acessibility-bar.component */ "./src/app/components/acessibility-bar/acessibility-bar.component.ts");
/* harmony import */ var _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/menu-bar/menu-bar.component */ "./src/app/components/menu-bar/menu-bar.component.ts");
/* harmony import */ var _components_foot_bar_foot_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/foot-bar/foot-bar.component */ "./src/app/components/foot-bar/foot-bar.component.ts");
/* harmony import */ var _components_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/initial-page/initial-page.component */ "./src/app/components/initial-page/initial-page.component.ts");
/* harmony import */ var _components_objective_content_objective_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/objective-content/objective-content.component */ "./src/app/components/objective-content/objective-content.component.ts");
/* harmony import */ var _components_mapa_servicos_mapa_servicos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/mapa-servicos/mapa-servicos.component */ "./src/app/components/mapa-servicos/mapa-servicos.component.ts");
/* harmony import */ var _components_ajuda_content_ajuda_content_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/ajuda-content/ajuda-content.component */ "./src/app/components/ajuda-content/ajuda-content.component.ts");
/* harmony import */ var _components_contato_content_contato_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contato-content/contato-content.component */ "./src/app/components/contato-content/contato-content.component.ts");
/* harmony import */ var _grafa_painel_grafa_painel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./grafa-painel/grafa-painel.component */ "./src/app/grafa-painel/grafa-painel.component.ts");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _portal_services_print_service__WEBPACK_IMPORTED_MODULE_9__["PrintService"], _components_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_10__["AcessibilityBarComponent"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _portal_portal_module__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_10__["AcessibilityBarComponent"],
        _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_11__["MenuBarComponent"],
        _components_foot_bar_foot_bar_component__WEBPACK_IMPORTED_MODULE_12__["FootBarComponent"],
        _components_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_13__["InitialPageComponent"],
        _components_objective_content_objective_content_component__WEBPACK_IMPORTED_MODULE_14__["ObjectiveContentComponent"],
        _components_mapa_servicos_mapa_servicos_component__WEBPACK_IMPORTED_MODULE_15__["MapaServicosComponent"],
        _components_ajuda_content_ajuda_content_component__WEBPACK_IMPORTED_MODULE_16__["AjudaContentComponent"],
        _components_contato_content_contato_content_component__WEBPACK_IMPORTED_MODULE_17__["ContatoContentComponent"],
        _grafa_painel_grafa_painel_component__WEBPACK_IMPORTED_MODULE_18__["GrafaPainelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        _portal_portal_module__WEBPACK_IMPORTED_MODULE_8__["PortalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_10__["AcessibilityBarComponent"],
                    _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_11__["MenuBarComponent"],
                    _components_foot_bar_foot_bar_component__WEBPACK_IMPORTED_MODULE_12__["FootBarComponent"],
                    _components_initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_13__["InitialPageComponent"],
                    _components_objective_content_objective_content_component__WEBPACK_IMPORTED_MODULE_14__["ObjectiveContentComponent"],
                    _components_mapa_servicos_mapa_servicos_component__WEBPACK_IMPORTED_MODULE_15__["MapaServicosComponent"],
                    _components_ajuda_content_ajuda_content_component__WEBPACK_IMPORTED_MODULE_16__["AjudaContentComponent"],
                    _components_contato_content_contato_content_component__WEBPACK_IMPORTED_MODULE_17__["ContatoContentComponent"],
                    _grafa_painel_grafa_painel_component__WEBPACK_IMPORTED_MODULE_18__["GrafaPainelComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    _portal_portal_module__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
                ],
                providers: [
                    _portal_services_print_service__WEBPACK_IMPORTED_MODULE_9__["PrintService"], _components_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_10__["AcessibilityBarComponent"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/acessibility-bar/acessibility-bar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/acessibility-bar/acessibility-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: AcessibilityBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcessibilityBarComponent", function() { return AcessibilityBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_portal_acessibilidade_dialog_acessibilidade_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component */ "./src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");






class AcessibilityBarComponent {
    constructor(scroll, router, dialog, elementRef) {
        this.scroll = scroll;
        this.router = router;
        this.dialog = dialog;
        this.elementRef = elementRef;
        this.divsArray = document.getElementsByTagName('div');
        this.psArray = document.getElementsByTagName('p');
        this.hsArray = document.getElementsByTagName('h1');
        this.h2sArray = document.getElementsByTagName('h2');
        this.asArray = document.getElementsByTagName('a');
        this.ulsArray = document.getElementsByTagName('ul');
        this.situationContrast = false;
        this.situationFontSize = false;
        this.loggedIn = false;
        this.isPaginaInicial = true;
        this.isTabVisivel = 0;
        this.isDialogOpen = false;
        router.events.subscribe((val) => {
            if (this.router.url === '/paineis') {
                this.isPaginaInicial = true;
                document.getElementById("irBusca").tabIndex = 0;
                //this.isTabVisivel = 0;
            }
            else {
                this.isPaginaInicial = false;
                document.getElementById("irBusca").tabIndex = -1;
                //this.isTabVisivel = -1;
            }
        });
        this.dialog._afterAllClosed.subscribe(n => {
            this.isDialogOpen = false;
        });
    }
    ngOnInit() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                document.querySelector(this.getAttribute('href')).click();
            });
        });
    }
    irConteudo() {
        document.getElementById("titulo").scrollIntoView();
        document.getElementsByTagName("h2")[0].focus();
    }
    irMenu() {
        document.getElementById("menubar").scrollIntoView();
        document.getElementById("pgInicial").focus();
    }
    irRodape() {
        document.getElementById("footertext1").scrollIntoView();
        document.getElementById("footertext1").focus();
    }
    aumentarFonte() {
        if (this.situationFontSize === false) {
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.fontSize = "36px";
                    p.style.lineHeight = '40px';
                }
            }
            for (let a of this.asArray) {
                if (a.className != 'donotchange' &&
                    a.className != 'hover' &&
                    a.className != 'fontsize' &&
                    a.className != 'hover2' &&
                    a.className != 'hover3' &&
                    a.className != 'fontsize2') {
                    a.style.fontSize = "40px";
                    a.style.lineHeight = '44px';
                }
                else if (a.className === 'hover2' ||
                    a.className === 'hover3') {
                    a.style.fontSize = "26px";
                    a.style.lineHeight = '30px';
                }
                else if (a.className === 'hover') {
                    a.style.fontSize = "36px";
                    a.style.lineHeight = '40px';
                }
            }
            this.situationFontSize = true;
        }
        else {
            alert("A fonte já está aumentada.");
        }
    }
    diminuirFonte() {
        if (this.situationFontSize === true) {
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.fontSize = "";
                    p.style.lineHeight = '';
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.fontSize = "";
                    h.style.lineHeight = '';
                }
            }
            for (let a of this.asArray) {
                if (a.className != 'donotchange') {
                    a.style.fontSize = "";
                    a.style.lineHeight = '';
                }
            }
            this.situationFontSize = false;
        }
        else {
            alert("A fonte já está no mínimo.");
        }
    }
    altoContraste() {
        if (this.situationContrast === true) {
            for (let div of this.divsArray) {
                if (div.className != 'donotchange' &&
                    div.className != 'sem-resposta') {
                    div.style.backgroundColor = null;
                    div.style.color = null;
                    div.style.boxShadow = null;
                    div.style.border = null;
                }
            }
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.backgroundColor = null;
                    p.style.color = null;
                    p.style.boxShadow = null;
                    p.style.border = null;
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.backgroundColor = null;
                    h.style.color = null;
                    h.style.boxShadow = null;
                    h.style.border = null;
                }
            }
            for (let h2 of this.h2sArray) {
                if (h2.className != 'donotchange') {
                    h2.style.backgroundColor = null;
                    h2.style.color = null;
                    h2.style.boxShadow = null;
                    h2.style.border = null;
                }
            }
            for (let a of this.asArray) {
                if (a.className != 'donotchange') {
                    a.style.backgroundColor = null;
                    a.style.color = null;
                    a.style.boxShadow = null;
                    a.style.border = null;
                    if (a.className === 'hover3') {
                        a.classList.remove('hover3');
                        a.classList.add('hover2');
                    }
                    if (a.className == 'fontsize2') {
                        a.classList.remove('fontsize2');
                        a.classList.add('fontsize');
                    }
                }
            }
            this.situationContrast = false;
        }
        else {
            for (let div of this.divsArray) {
                if (div.className != 'donotchange' &&
                    div.className != 'content' &&
                    div.className != 'mat-card-header-text' &&
                    div.className != 'descricao' &&
                    div.className != 'autor' &&
                    div.className != 'tema' &&
                    div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'content' &&
                    div.className != 'mat-form-field-flex ng-tns-c49-0' &&
                    div.className != 'big pesquisa' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
                    div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-infix ng-tns-c49-0' &&
                    div.className != 'sem-resposta' &&
                    div.className != 'lista-paineis' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
                    div.className != 'mat-form-field-infix ng-tns-c107-0' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-0' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                    div.className != 'ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                    div.className != 'ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                    div.className != 'big pesquisa') {
                    div.style.backgroundColor = 'black';
                    div.style.color = 'white';
                }
                if (div.className === 'big pesquisa' ||
                    div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
                    div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
                    div.className === 'mat-form-field-infix ng-tns-c49-0') {
                    div.style.backgroundColor = 'white';
                    div.style.color = 'black';
                }
                if (div.className === "footer-basic") {
                    div.style.backgroundColor = 'white';
                }
                if (div.className === 'img') {
                    div.style.backgroundColor = 'white';
                    div.style.border = '2px solid #000';
                }
            }
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                    p.style.boxShadow = '0 0 0 2px #000';
                    p.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.backgroundColor = 'black';
                    h.style.color = 'white';
                    h.style.boxShadow = '0 0 0 2px #000';
                    h.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h2 of this.h2sArray) {
                if (h2.className != 'donotchange') {
                    h2.style.backgroundColor = 'black';
                    h2.style.color = 'white';
                    h2.style.boxShadow = '0 0 0 2px #000';
                    h2.style.border = '2px solid #ffeb3b';
                }
            }
            for (let a of this.asArray) {
                if (a.className != 'donotchange' &&
                    a.className != 'hover' &&
                    a.className != 'hover2') {
                    a.style.backgroundColor = 'black';
                    a.style.color = 'white';
                    a.style.boxShadow = '0 0 0 2px #000';
                    a.style.border = '2px solid #ffeb3b';
                    if (a.className === 'fontsize') {
                        a.classList.remove('fontsize');
                        a.classList.add('fontsize2');
                        a.style.boxShadow = '0 0 0 2px #000';
                        a.style.border = '2px solid #ffeb3b';
                    }
                }
                else if (a.className === 'hover2') {
                    a.classList.remove('hover2');
                    a.classList.add('hover3');
                    a.style.boxShadow = '0 0 0 2px #000';
                    a.style.border = '2px solid #ffeb3b';
                }
                else if (a.className === 'hover') {
                    a.style.boxShadow = '0 0 0 2px #000';
                    a.style.border = '2px solid #ffeb3b';
                }
            }
            for (let ul of this.ulsArray) {
                if (ul.id === 'atalhos') {
                    ul.style.backgroundColor = 'black';
                }
            }
            this.situationContrast = true;
        }
    }
    openDialog() {
        if (!this.isDialogOpen) {
            this.dialog.open(src_app_portal_acessibilidade_dialog_acessibilidade_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AcessibilidadeDialogComponent"]);
            this.isDialogOpen = true;
        }
        else {
            this.dialog.closeAll();
            this.isDialogOpen = false;
        }
    }
    closeDialog() {
        this.dialog.closeAll();
    }
    onKeyPressAcess(e) {
        if (e.keyCode == 13) {
            if (!this.isDialogOpen) {
                this.openDialog();
            }
        }
    }
    onKeyPressConteudo(e) {
        if (e.keyCode == 13) {
            this.irConteudo();
        }
    }
    onKeyDown(e) {
        let map = {};
        map[e.keyCode] = e.type == 'keydown';
        if (e.altKey && map[49]) {
            document.getElementById("irConteudo").click();
        }
        else if (e.altKey && map[50]) {
            document.getElementById("irMenu").click();
        }
        else if ((e.altKey && map[51])) {
            document.getElementById("irRodapé").click();
        }
        else if ((e.altKey && map[52])) {
            document.getElementById("irContraste").click();
        }
        else if ((e.altKey && map[53])) {
            document.getElementById("irAcessibilidade").click();
        }
        else if ((e.altKey && map[54])) {
            document.getElementById("aumentar").click();
        }
        else if ((e.altKey && map[55])) {
            document.getElementById("diminuir").click();
        }
    }
}
AcessibilityBarComponent.ɵfac = function AcessibilityBarComponent_Factory(t) { return new (t || AcessibilityBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AcessibilityBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcessibilityBarComponent, selectors: [["app-acessibility-bar"]], hostBindings: function AcessibilityBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AcessibilityBarComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 13, vars: 0, consts: [["id", "bench", 1, "table"], ["id", "atalhos"], ["href", "#", "accesskey", "4", "id", "irContraste", "tabindex", "0", "title", "Alto contraste", 1, "hover2", 3, "keypress", "click"], ["href", "#", "accesskey", "5", "id", "irAcessibilidade", "tabindex", "0", "title", "Acessibilidade", 1, "hover2", 3, "keypress", "click"], ["role", "button", "id", "aumentar", "alt", "Aumentar fonte", "tabindex", "0", "title", "Aumentar Tamanho do Texto", 1, "fontsize", 3, "keypress", "click"], ["role", "button", "id", "diminuir", "alt", "Diminuir fonte", "tabindex", "0", "title", "Diminuir Tamanho do Texto", 1, "fontsize", 3, "keypress", "click"]], template: function AcessibilityBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilityBarComponent_Template_a_keypress_3_listener() { return ctx.altoContraste(); })("click", function AcessibilityBarComponent_Template_a_click_3_listener() { return ctx.altoContraste(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Alto contraste [alt + 4]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilityBarComponent_Template_a_keypress_6_listener() { return ctx.openDialog(); })("click", function AcessibilityBarComponent_Template_a_click_6_listener() { return ctx.openDialog(); })("keypress", function AcessibilityBarComponent_Template_a_keypress_6_listener($event) { return ctx.onKeyPressAcess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Acessibilidade [alt + 5]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilityBarComponent_Template_a_keypress_9_listener() { return ctx.aumentarFonte(); })("click", function AcessibilityBarComponent_Template_a_click_9_listener() { return ctx.aumentarFonte(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "A+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilityBarComponent_Template_a_keypress_11_listener() { return ctx.diminuirFonte(); })("click", function AcessibilityBarComponent_Template_a_click_11_listener() { return ctx.diminuirFonte(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "A-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".table[_ngcontent-%COMP%] {\n    display: table;  \n\t\n}\n\n#atalhos[_ngcontent-%COMP%] {\n    background-color: #EEEEE4;\n    color: #333333;\n    font-size: 18px;\n    \n    padding: 0px;\n    list-style-type: none;\n}\n\n.fontsize[_ngcontent-%COMP%] {\n    background-color: #f9f9f9;\n    width: 8px;\n    color: #333333;\n    padding: 4px;\n    \n    border: 1px solid #c6c6c6;\n    border-radius: 50%;\n    font-size: 0.8125em;\n    font-weight: bold;\n    text-align: center;\n}\n\n.fontsize2[_ngcontent-%COMP%] {\n    background-color: #000;\n    width: 8px;\n    color: #FFF;\n    padding: 4px;\n    \n    border: 1px solid #c6c6c6;\n    border-radius: 50%;\n    font-size: 0.8125em;\n    font-weight: bold;\n    text-align: center;\n}\n\nli[_ngcontent-%COMP%] {\n    display: inline;\n    float: left;\n    min-width: 14vw;\n    width: -moz-fit-content;\n    width: fit-content;\n    max-width: 230px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    text-align: center;\n}\n\nlist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    display: inline-block;\n}\n\n.fontsize[_ngcontent-%COMP%]:hover, .fontsize[_ngcontent-%COMP%]:focus{\n    background-color: #333333 ;\n    color: #f9f9f9;\n    cursor: pointer;\n}\n\n.fontsize2[_ngcontent-%COMP%]:hover, .fontsize2[_ngcontent-%COMP%]:focus{\n    background-color: #FFF !important;\n    color: #000 !important;\n    cursor: pointer;\n}\n\na[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: black;\n}\n\na[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover{\n    cursor: pointer; \n    background-color: #333333;\n    color: #f9f9f9; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2Vzc2liaWxpdHktYmFyL2FjZXNzaWJpbGl0eS1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNlc3NpYmlsaXR5LWJhci9hY2Vzc2liaWxpdHktYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlOyAgXG5cdC8qIG1hcmdpbjogMDsgKi9cbn1cblxuI2F0YWxob3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRTQ7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIC8qIG1hcmdpbjogMHB4OyAqL1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5mb250c2l6ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICB3aWR0aDogOHB4O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICAvKiBtYXJnaW46IDNweCA1cHggMCAwOyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNmM2YzY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMC44MTI1ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9udHNpemUyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIC8qIG1hcmdpbjogM3B4IDVweCAwIDA7ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAwLjgxMjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWluLXdpZHRoOiAxNHZ3O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXgtd2lkdGg6IDIzMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmxpc3QgYXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mb250c2l6ZTpob3ZlciwgLmZvbnRzaXplOmZvY3Vze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgO1xuICAgIGNvbG9yOiAjZjlmOWY5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvbnRzaXplMjpob3ZlciwgLmZvbnRzaXplMjpmb2N1c3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuYTpmb2N1cywgYTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gICAgY29sb3I6ICNmOWY5Zjk7IFxufVxuXG5cbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcessibilityBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-acessibility-bar',
                templateUrl: './acessibility-bar.component.html',
                styleUrls: ['./acessibility-bar.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/ajuda-content/ajuda-content.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/ajuda-content/ajuda-content.component.ts ***!
  \*********************************************************************/
/*! exports provided: AjudaContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjudaContentComponent", function() { return AjudaContentComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../acessibility-bar/acessibility-bar.component */ "./src/app/components/acessibility-bar/acessibility-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AjudaContentComponent_iframe_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "iframe", 6);
} }
function AjudaContentComponent_iframe_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "iframe", 7);
} }
const _c0 = function (a0) { return { "mobile": a0 }; };
class AjudaContentComponent {
    constructor(acessibilityBarComponent, responsive) {
        this.acessibilityBarComponent = acessibilityBarComponent;
        this.responsive = responsive;
        this.divsArray = document.getElementsByTagName('div');
        this.psArray = document.getElementsByTagName('p');
        this.hsArray = document.getElementsByTagName('h1');
        this.h2sArray = document.getElementsByTagName('h2');
        this.asArray = document.getElementsByTagName('a');
        this.ulsArray = document.getElementsByTagName('ul');
        this.acessoMobile = false;
    }
    ngOnInit() {
        this.responsive.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].TabletPortrait]).subscribe(result => {
            this.acessoMobile = false;
            if (result.matches) {
                this.acessoMobile = true;
                console.log(this.acessoMobile);
            }
        });
        var bench = document.getElementById('bench');
        if (bench.style.backgroundColor === 'black') {
            for (let div of this.divsArray) {
                if (div.className != 'donotchange' &&
                    div.className != 'content' &&
                    div.className != 'mat-card-header-text' &&
                    div.className != 'descricao' &&
                    div.className != 'autor' &&
                    div.className != 'tema' &&
                    div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'content' &&
                    div.className != 'mat-form-field-flex ng-tns-c49-0' &&
                    div.className != 'big pesquisa' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
                    div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-infix ng-tns-c49-0' &&
                    div.className != 'sem-resposta' &&
                    div.className != 'lista-paineis' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
                    div.className != 'mat-form-field-infix ng-tns-c107-0' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-0' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                    div.className != 'ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                    div.className != 'big pesquisa') {
                    div.style.backgroundColor = 'black';
                    div.style.color = 'white';
                }
                if (div.className === 'big pesquisa' ||
                    div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
                    div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
                    div.className === 'mat-form-field-infix ng-tns-c49-0') {
                    div.style.backgroundColor = 'white';
                    div.style.color = 'black';
                }
                if (div.className === "footer-basic") {
                    div.style.backgroundColor = 'white';
                }
                if (div.className === 'img') {
                    div.style.backgroundColor = 'white';
                    div.style.border = '2px solid #000';
                }
            }
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                    p.style.boxShadow = '0 0 0 2px #000';
                    p.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.backgroundColor = 'black';
                    h.style.color = 'white';
                    h.style.boxShadow = '0 0 0 2px #000';
                    h.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h2 of this.h2sArray) {
                if (h2.className != 'donotchange') {
                    h2.style.backgroundColor = 'black';
                    h2.style.color = 'white';
                    h2.style.boxShadow = '0 0 0 2px #000';
                    h2.style.border = '2px solid #ffeb3b';
                }
            }
            // for (let a of this.asArray){
            //   if (a.className != 'donotchange' && 
            //   a.className != 'hover' && 
            //   a.className != 'hover2'){
            //     a.style.backgroundColor = 'black';
            //     a.style.color = 'white';
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //     if(a.className === 'fontsize') {
            //       a.classList.remove('fontsize');
            //       a.classList.add('fontsize2');
            //       a.style.boxShadow = '0 0 0 2px #000';
            //       a.style.border = '2px solid #ffeb3b'
            //     }     
            //   } else if (a.className === 'hover2'){
            //     a.classList.remove('hover2');
            //     a.classList.add('hover3');
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   } else if (a.className === 'hover') {
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   }
            // }
            for (let ul of this.ulsArray) {
                if (ul.id === 'atalhos') {
                    ul.style.backgroundColor = 'black';
                }
            }
        }
    }
}
AjudaContentComponent.ɵfac = function AjudaContentComponent_Factory(t) { return new (t || AjudaContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__["AcessibilityBarComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
AjudaContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AjudaContentComponent, selectors: [["app-ajuda-content"]], decls: 11, vars: 14, consts: [["id", "pginicial"], ["id", "titulo", "role", "tablist", 3, "ngClass"], ["tabindex", "0", "role", "tab", 3, "ngClass"], ["id", "text", "role", "tablist", 3, "ngClass"], ["width", "840", "height", "472", "src", "https://www.youtube.com/embed/hGvShzSNUyM", "title", "YouTube video player - v\u00EDdeo de ajuda", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 4, "ngIf"], ["width", "350", "height", "250", "src", "https://www.youtube.com/embed/hGvShzSNUyM", "title", "YouTube video player - v\u00EDdeo de ajuda", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 4, "ngIf"], ["width", "840", "height", "472", "src", "https://www.youtube.com/embed/hGvShzSNUyM", "title", "YouTube video player - v\u00EDdeo de ajuda", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["width", "350", "height", "250", "src", "https://www.youtube.com/embed/hGvShzSNUyM", "title", "YouTube video player - v\u00EDdeo de ajuda", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]], template: function AjudaContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Ajuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Caso esteja com dificuldade, assista esse v\u00EDdeo para utilizar o Portal do Observat\u00F3rio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AjudaContentComponent_iframe_9_Template, 1, 0, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AjudaContentComponent_iframe_10_Template, 1, 0, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.acessoMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.acessoMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#titulo[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    text-align: center;\n}\n\n\nh2[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    margin-top: 54px;\n    margin-bottom: 54px;\n    width: 100%;\n    line-height: 46px;\n}\n\n\nh2.mobile[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    margin-bottom: 0px;\n    font-size: 25px;\n}\n\n\n#text[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 60px;\n    margin-bottom: 60px;\n}\n\n\n#text.mobile[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n\n\np[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 24px;\n    color: #333333;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 28px;\n    font-weight: 500;\n}\n\n\np.mobile[_ngcontent-%COMP%] {\n    font-size: 20px;\n    text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hanVkYS1jb250ZW50L2FqdWRhLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCx3SUFBd0k7SUFDeEksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hanVkYS1jb250ZW50L2FqdWRhLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXR1bG8ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbmgye1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBjb2xvcjogIzFDMkU4QTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi10b3A6IDU0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogNDZweDtcbn1cblxuaDIubW9iaWxle1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuXG4jdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbiN0ZXh0Lm1vYmlsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxucCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAubW9iaWxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AjudaContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-ajuda-content',
                templateUrl: './ajuda-content.component.html',
                styleUrls: ['./ajuda-content.component.css']
            }]
    }], function () { return [{ type: _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__["AcessibilityBarComponent"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/contato-content/contato-content.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/contato-content/contato-content.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContatoContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoContentComponent", function() { return ContatoContentComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../acessibility-bar/acessibility-bar.component */ "./src/app/components/acessibility-bar/acessibility-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return { "mobile": a0 }; };
class ContatoContentComponent {
    constructor(acessibilityBarComponent, responsive) {
        this.acessibilityBarComponent = acessibilityBarComponent;
        this.responsive = responsive;
        this.divsArray = document.getElementsByTagName('div');
        this.psArray = document.getElementsByTagName('p');
        this.hsArray = document.getElementsByTagName('h1');
        this.h2sArray = document.getElementsByTagName('h2');
        this.asArray = document.getElementsByTagName('a');
        this.ulsArray = document.getElementsByTagName('ul');
        this.acessoMobile = false;
    }
    ngOnInit() {
        this.responsive.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].TabletPortrait]).subscribe(result => {
            this.acessoMobile = false;
            if (result.matches) {
                this.acessoMobile = true;
                console.log(this.acessoMobile);
            }
        });
        var bench = document.getElementById('bench');
        if (bench.style.backgroundColor === 'black') {
            for (let div of this.divsArray) {
                if (div.className != 'donotchange' &&
                    div.className != 'content' &&
                    div.className != 'mat-card-header-text' &&
                    div.className != 'descricao' &&
                    div.className != 'autor' &&
                    div.className != 'tema' &&
                    div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'content' &&
                    div.className != 'mat-form-field-flex ng-tns-c49-0' &&
                    div.className != 'big pesquisa' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
                    div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-infix ng-tns-c49-0' &&
                    div.className != 'sem-resposta' &&
                    div.className != 'lista-paineis' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
                    div.className != 'mat-form-field-infix ng-tns-c107-0' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-0' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                    div.className != 'ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                    div.className != 'big pesquisa') {
                    div.style.backgroundColor = 'black';
                    div.style.color = 'white';
                }
                if (div.className === 'big pesquisa' ||
                    div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
                    div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
                    div.className === 'mat-form-field-infix ng-tns-c49-0') {
                    div.style.backgroundColor = 'white';
                    div.style.color = 'black';
                }
                if (div.className === "footer-basic") {
                    div.style.backgroundColor = 'white';
                }
                if (div.className === 'img') {
                    div.style.backgroundColor = 'white';
                    div.style.border = '2px solid #000';
                }
            }
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                    p.style.boxShadow = '0 0 0 2px #000';
                    p.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.backgroundColor = 'black';
                    h.style.color = 'white';
                    h.style.boxShadow = '0 0 0 2px #000';
                    h.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h2 of this.h2sArray) {
                if (h2.className != 'donotchange') {
                    h2.style.backgroundColor = 'black';
                    h2.style.color = 'white';
                    h2.style.boxShadow = '0 0 0 2px #000';
                    h2.style.border = '2px solid #ffeb3b';
                }
            }
            // for (let a of this.asArray){
            //   if (a.className != 'donotchange' && 
            //   a.className != 'hover' && 
            //   a.className != 'hover2'){
            //     a.style.backgroundColor = 'black';
            //     a.style.color = 'white';
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //     if(a.className === 'fontsize') {
            //       a.classList.remove('fontsize');
            //       a.classList.add('fontsize2');
            //       a.style.boxShadow = '0 0 0 2px #000';
            //       a.style.border = '2px solid #ffeb3b'
            //     }     
            //   } else if (a.className === 'hover2'){
            //     a.classList.remove('hover2');
            //     a.classList.add('hover3');
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   } else if (a.className === 'hover') {
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   }
            // }
            for (let ul of this.ulsArray) {
                if (ul.id === 'atalhos') {
                    ul.style.backgroundColor = 'black';
                }
            }
        }
    }
}
ContatoContentComponent.ɵfac = function ContatoContentComponent_Factory(t) { return new (t || ContatoContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__["AcessibilityBarComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
ContatoContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContatoContentComponent, selectors: [["app-contato-content"]], decls: 10, vars: 15, consts: [["id", "pginicial"], ["id", "titulo", "role", "tablist", 3, "ngClass"], ["tabindex", "0", "role", "tab", 3, "ngClass"], ["id", "text", "role", "tablist", 3, "ngClass"], ["tabindex", "0", "id", "frstLine", "role", "tab", 3, "ngClass"]], template: function ContatoContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Qualquer d\u00FAvida ou sugest\u00E3o, entre em contato pelo e-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " observatorio.smped@prefeitura.sp.gov.br ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.acessoMobile));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["#pginicial[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n#titulo[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    text-align: center;\n}\n\n#titulo.mobile[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-left: 0;\n    margin-right: 0;\n    text-align: center;\n}\n\nh2[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    margin-top: 54px;\n    margin-bottom: 54px;\n    width: 100%;\n    line-height: 46px;\n}\n\nh2.mobile[_ngcontent-%COMP%]{\n    font-size: 25px;\n    color: #1C2E8A;\n    margin-top: 20px;\n}\n\n#text[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 60px;\n    margin-bottom: 60px;\n}\n\n#text.mobile[_ngcontent-%COMP%]{\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n\np[_ngcontent-%COMP%] {\n    font-size: 24px;\n    color: #333333;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 28px;\n    font-weight: 500;\n}\n\np.mobile[_ngcontent-%COMP%] {\n    font-size: 20px;\n    text-align: justify;\n}\n\n#frstLine[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\na.mobile[_ngcontent-%COMP%]{\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YXRvLWNvbnRlbnQvY29udGF0by1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCx3SUFBd0k7SUFDeEksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YXRvLWNvbnRlbnQvY29udGF0by1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGdpbmljaWFsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0aXR1bG8ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jdGl0dWxvLm1vYmlsZSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMntcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgY29sb3I6ICMxQzJFOEE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBtYXJnaW4tdG9wOiA1NHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDU0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbmgyLm1vYmlsZXtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICMxQzJFOEE7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuI3RleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG4jdGV4dC5tb2JpbGV7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn0gICBcblxucC5tb2JpbGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4jZnJzdExpbmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYS5tb2JpbGV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContatoContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contato-content',
                templateUrl: './contato-content.component.html',
                styleUrls: ['./contato-content.component.css']
            }]
    }], function () { return [{ type: _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__["AcessibilityBarComponent"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/foot-bar/foot-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/foot-bar/foot-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: FootBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootBarComponent", function() { return FootBarComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function FootBarComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 16);
} }
const _c0 = function (a0) { return { "mobile": a0 }; };
class FootBarComponent {
    constructor(responsive) {
        this.responsive = responsive;
        this.acessoMobile = false;
    }
    ngOnInit() {
        this.responsive.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].TabletPortrait]).subscribe(result => {
            this.acessoMobile = false;
            if (result.matches) {
                this.acessoMobile = true;
                console.log(this.acessoMobile);
            }
        });
    }
}
FootBarComponent.ɵfac = function FootBarComponent_Factory(t) { return new (t || FootBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
FootBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FootBarComponent, selectors: [["app-foot-bar"]], decls: 20, vars: 4, consts: [[1, "footer-basic"], ["id", "info", "role", "tablist", 3, "ngClass"], ["id", "footertext1", "tabindex", "0", "role", "tab", 1, "footertext", 2, "font-weight", "bold"], ["tabindex", "0", "role", "tab", 1, "footertext"], ["tabindex", "0", "href", "https://observatorio.smped.prefeitura.sp.gov.br/", 1, "footertext"], [1, "social"], ["tabindex", "0", "href", "https://www.facebook.com/SMPEDSP/"], ["alt", "facebook", "src", "./assets/facebook.png", "href", "", 1, "icon"], ["tabindex", "0", "href", "https://twitter.com/smpedsp"], ["alt", "twitter", "src", "./assets/twitter.png", "href", "", 1, "icon"], ["tabindex", "0", "href", "https://www.youtube.com/user/inclusaosp"], ["alt", "youtube", "src", "./assets/youtube.png", "href", "", 1, "icon"], ["tabindex", "0", "href", "https://www.instagram.com/smpedsp/?hl=pt-br"], ["alt", "instagram", "src", "./assets/instagram.png", "href", "", 1, "icon"], ["class", "selo", 4, "ngIf"], ["href", "https://www.prefeitura.sp.gov.br/cidade/secretarias/pessoa_com_deficiencia", 1, "copyright"], [1, "selo"]], template: function FootBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Secretaria Municipal da Pessoa com Defici\u00EAncia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Rua L\u00EDbero Badar\u00F3, 425 - 32\u00BA andar - Centro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " observatorio.smped.prefeitura.sp.gov.br ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FootBarComponent_div_17_Template, 1, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Secretaria Municipal da Pessoa com Defici\u00EAncia \u00A9 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.acessoMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".footer-basic[_ngcontent-%COMP%] {  \n  background-color:#222222;\n  color:#FFFFFF;\n  width: 100%;\n  margin-top: 100px;\n  margin-bottom: 0px;\n  display: inline-block;\n  text-align: center;\n}\n\n.footer-basic[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  margin-top:15px;\n  text-align:center;\n  font-size:13px;\n  color:#FFFFFF;\n  margin-bottom:0;\n}\n\n#info[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-right: 30px;\n    display: inline-block;\n    text-align: center;\n}\n\n#info.mobile[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: inherit;\n  color:#FFFFFF\n}\n\n.social[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.icon[_ngcontent-%COMP%]:hover{\n  box-shadow: 0 0 0 2px #FFFFFF;\n}\n\n.icon[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    margin: 10px;\n    display: inline-block ;\n}\n\n.selo[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 30px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290LWJhci9mb290LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdC1iYXIvZm9vdC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItYmFzaWMgeyAgXG4gIGJhY2tncm91bmQtY29sb3I6IzIyMjIyMjtcbiAgY29sb3I6I0ZGRkZGRjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vdGVyLWJhc2ljIC5jb3B5cmlnaHQge1xuICBtYXJnaW4tdG9wOjE1cHg7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBmb250LXNpemU6MTNweDtcbiAgY29sb3I6I0ZGRkZGRjtcbiAgbWFyZ2luLWJvdHRvbTowO1xufVxuXG4jaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2luZm8ubW9iaWxlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIGNvbG9yOiNGRkZGRkZcbn1cblxuLnNvY2lhbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmljb246aG92ZXJ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjRkZGRkZGO1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgO1xufVxuXG4uc2VsbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMzBweDtcbn1cblxuLmNvcHlyaWdodCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FootBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-foot-bar',
                templateUrl: './foot-bar.component.html',
                styleUrls: ['./foot-bar.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/initial-page/initial-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/initial-page/initial-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: InitialPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPageComponent", function() { return InitialPageComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../acessibility-bar/acessibility-bar.component */ "./src/app/components/acessibility-bar/acessibility-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function InitialPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Bem vindo ao Observat\u00F3rio Municipal da Pessoa com Defici\u00EAncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "mobile": a0 }; };
function InitialPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Bem vindo ao Observat\u00F3rio Municipal da Pessoa com Defici\u00EAncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r1.acessoMobile));
} }
function InitialPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " O Observat\u00F3rio \u00E9 uma a\u00E7\u00E3o da Secretaria Municipal da Pessoa com Defici\u00EAncia de S\u00E3o Paulo que elabora, centraliza e divulga os dados relativos a pessoas com defici\u00EAncia e acessibilidade na cidade. Ainda analisa e monitora pol\u00EDticas p\u00FAblicas que atendem pessoas com defici\u00EAncia. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r2.acessoMobile));
} }
function InitialPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " O Observat\u00F3rio \u00E9 uma a\u00E7\u00E3o da Secretaria Municipal da Pessoa com Defici\u00EAncia de S\u00E3o Paulo que elabora, centraliza e divulga os dados relativos a pessoas com defici\u00EAncia e acessibilidade na cidade. Ainda analisa e monitora pol\u00EDticas p\u00FAblicas que atendem pessoas com defici\u00EAncia. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r3.acessoMobile));
} }
class InitialPageComponent {
    constructor(acessibilityBarComponent, responsive) {
        this.acessibilityBarComponent = acessibilityBarComponent;
        this.responsive = responsive;
        this.divsArray = document.getElementsByTagName('div');
        this.psArray = document.getElementsByTagName('p');
        this.hsArray = document.getElementsByTagName('h1');
        this.h2sArray = document.getElementsByTagName('h2');
        this.asArray = document.getElementsByTagName('a');
        this.ulsArray = document.getElementsByTagName('ul');
        this.acessoMobile = false;
    }
    ngOnInit() {
        this.responsive.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].TabletPortrait]).subscribe(result => {
            this.acessoMobile = false;
            if (result.matches) {
                this.acessoMobile = true;
                console.log(this.acessoMobile);
            }
        });
        var bench = document.getElementById('bench');
        if (bench.style.backgroundColor === 'black') {
            for (let div of this.divsArray) {
                if (div.className != 'donotchange' &&
                    div.className != 'content' &&
                    div.className != 'mat-card-header-text' &&
                    div.className != 'descricao' &&
                    div.className != 'autor' &&
                    div.className != 'tema' &&
                    div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'content' &&
                    div.className != 'mat-form-field-flex ng-tns-c49-0' &&
                    div.className != 'big pesquisa' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
                    div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-infix ng-tns-c49-0' &&
                    div.className != 'sem-resposta' &&
                    div.className != 'lista-paineis' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
                    div.className != 'mat-form-field-infix ng-tns-c107-0' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-0' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                    div.className != 'ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                    div.className != 'big pesquisa') {
                    div.style.backgroundColor = 'black';
                    div.style.color = 'white';
                }
                if (div.className === 'big pesquisa' ||
                    div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
                    div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
                    div.className === 'mat-form-field-infix ng-tns-c49-0') {
                    div.style.backgroundColor = 'white';
                    div.style.color = 'black';
                }
                if (div.className === "footer-basic") {
                    div.style.backgroundColor = 'white';
                }
                if (div.className === 'img') {
                    div.style.backgroundColor = 'white';
                    div.style.border = '2px solid #000';
                }
            }
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                    p.style.boxShadow = '0 0 0 2px #000';
                    p.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.backgroundColor = 'black';
                    h.style.color = 'white';
                    h.style.boxShadow = '0 0 0 2px #000';
                    h.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h2 of this.h2sArray) {
                if (h2.className != 'donotchange') {
                    h2.style.backgroundColor = 'black';
                    h2.style.color = 'white';
                    h2.style.boxShadow = '0 0 0 2px #000';
                    h2.style.border = '2px solid #ffeb3b';
                }
            }
            // for (let a of this.asArray){
            //   if (a.className != 'donotchange' && 
            //   a.className != 'hover' && 
            //   a.className != 'hover2'){
            //     a.style.backgroundColor = 'black';
            //     a.style.color = 'white';
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //     if(a.className === 'fontsize') {
            //       a.classList.remove('fontsize');
            //       a.classList.add('fontsize2');
            //       a.style.boxShadow = '0 0 0 2px #000';
            //       a.style.border = '2px solid #ffeb3b'
            //     }     
            //   } else if (a.className === 'hover2'){
            //     a.classList.remove('hover2');
            //     a.classList.add('hover3');
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   } else if (a.className === 'hover') {
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   }
            // }
            for (let ul of this.ulsArray) {
                if (ul.id === 'atalhos') {
                    ul.style.backgroundColor = 'black';
                }
            }
        }
    }
}
InitialPageComponent.ɵfac = function InitialPageComponent_Factory(t) { return new (t || InitialPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__["AcessibilityBarComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
InitialPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InitialPageComponent, selectors: [["app-initial-page"]], decls: 5, vars: 4, consts: [["id", "pginicial"], ["id", "titulo", "role", "tablist", 4, "ngIf"], ["id", "titulo-mobile", "role", "tablist", 4, "ngIf"], ["id", "text", "role", "tablist", 4, "ngIf"], ["id", "text-mobile", "role", "tablist", 4, "ngIf"], ["id", "titulo", "role", "tablist"], ["tabindex", "0", "role", "tab"], ["id", "titulo-mobile", "role", "tablist"], ["tabindex", "0", "role", "tab", 3, "ngClass"], ["id", "text", "role", "tablist"], ["id", "text-mobile", "role", "tablist"]], template: function InitialPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InitialPageComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InitialPageComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InitialPageComponent_div_3_Template, 3, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, InitialPageComponent_div_4_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.acessoMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.acessoMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.acessoMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.acessoMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["#pginicial[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n#titulo[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 54px;\n    margin-bottom: 54px;\n    text-align: center;\n    background-color: white;\n}\n\n#titulo-mobile[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    text-align: center;\n}\n\nh2[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    width: 100%;\n    line-height: 46px;\n}\n\nh2.mobile[_ngcontent-%COMP%]{\n    font-size: 25px;\n}\n\n#text[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 60px;\n    margin-bottom: 60px;\n}\n\n#text-mobile[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 30px;\n    margin-bottom: 60px;\n}\n\np[_ngcontent-%COMP%] {\n    text-align: justify;\n    font-size: 24px;\n    color: #333333;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 28px;\n    font-weight: 500;\n}\n\np.mobile[_ngcontent-%COMP%] {\n    font-size: 20px;\n    text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbml0aWFsLXBhZ2UvaW5pdGlhbC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLHdJQUF3STtJQUN4SSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5pdGlhbC1wYWdlL2luaXRpYWwtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BnaW5pY2lhbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jdGl0dWxvIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgIG1hcmdpbi10b3A6IDU0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbiN0aXR1bG8tbW9iaWxlIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDJ7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGNvbG9yOiAjMUMyRThBO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbmgyLm1vYmlsZXtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbiN0ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuI3RleHQtbW9iaWxlIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbnAge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucC5tb2JpbGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InitialPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-initial-page',
                templateUrl: './initial-page.component.html',
                styleUrls: ['./initial-page.component.css']
            }]
    }], function () { return [{ type: _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__["AcessibilityBarComponent"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/mapa-servicos/mapa-servicos.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/mapa-servicos/mapa-servicos.component.ts ***!
  \*********************************************************************/
/*! exports provided: MapaServicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaServicosComponent", function() { return MapaServicosComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../acessibility-bar/acessibility-bar.component */ "./src/app/components/acessibility-bar/acessibility-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function MapaServicosComponent_iframe_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "iframe", 8);
} }
function MapaServicosComponent_iframe_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "iframe", 9);
} }
const _c0 = function (a0) { return { "mobile": a0 }; };
class MapaServicosComponent {
    constructor(acessibilityBarComponent, responsive) {
        this.acessibilityBarComponent = acessibilityBarComponent;
        this.responsive = responsive;
        this.acessoMobile = false;
        this.divsArray = document.getElementsByTagName('div');
        this.psArray = document.getElementsByTagName('p');
        this.hsArray = document.getElementsByTagName('h1');
        this.h2sArray = document.getElementsByTagName('h2');
        this.asArray = document.getElementsByTagName('a');
        this.ulsArray = document.getElementsByTagName('ul');
    }
    ngOnInit() {
        this.responsive.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].TabletPortrait]).subscribe(result => {
            this.acessoMobile = false;
            if (result.matches) {
                this.acessoMobile = true;
                console.log(this.acessoMobile);
            }
        });
        var bench = document.getElementById('bench');
        if (bench.style.backgroundColor === 'black') {
            for (let div of this.divsArray) {
                if (div.className != 'donotchange' &&
                    div.className != 'content' &&
                    div.className != 'mat-card-header-text' &&
                    div.className != 'descricao' &&
                    div.className != 'autor' &&
                    div.className != 'tema' &&
                    div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'content' &&
                    div.className != 'mat-form-field-flex ng-tns-c49-0' &&
                    div.className != 'big pesquisa' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
                    div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-infix ng-tns-c49-0' &&
                    div.className != 'sem-resposta' &&
                    div.className != 'lista-paineis' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
                    div.className != 'mat-form-field-infix ng-tns-c107-0' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-0' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                    div.className != 'ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                    div.className != 'big pesquisa') {
                    div.style.backgroundColor = 'black';
                    div.style.color = 'white';
                }
                if (div.className === 'big pesquisa' ||
                    div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
                    div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
                    div.className === 'mat-form-field-infix ng-tns-c49-0') {
                    div.style.backgroundColor = 'white';
                    div.style.color = 'black';
                }
                if (div.className === "footer-basic") {
                    div.style.backgroundColor = 'white';
                }
                if (div.className === 'img') {
                    div.style.backgroundColor = 'white';
                    div.style.border = '2px solid #000';
                }
            }
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                    p.style.boxShadow = '0 0 0 2px #000';
                    p.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.backgroundColor = 'black';
                    h.style.color = 'white';
                    h.style.boxShadow = '0 0 0 2px #000';
                    h.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h2 of this.h2sArray) {
                if (h2.className != 'donotchange') {
                    h2.style.backgroundColor = 'black';
                    h2.style.color = 'white';
                    h2.style.boxShadow = '0 0 0 2px #000';
                    h2.style.border = '2px solid #ffeb3b';
                }
            }
            // for (let a of this.asArray){
            //   if (a.className != 'donotchange' && 
            //   a.className != 'hover' && 
            //   a.className != 'hover2'){
            //     a.style.backgroundColor = 'black';
            //     a.style.color = 'white';
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //     if(a.className === 'fontsize') {
            //       a.classList.remove('fontsize');
            //       a.classList.add('fontsize2');
            //       a.style.boxShadow = '0 0 0 2px #000';
            //       a.style.border = '2px solid #ffeb3b'
            //     }     
            //   } else if (a.className === 'hover2'){
            //     a.classList.remove('hover2');
            //     a.classList.add('hover3');
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   } else if (a.className === 'hover') {
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   }
            // }
            for (let ul of this.ulsArray) {
                if (ul.id === 'atalhos') {
                    ul.style.backgroundColor = 'black';
                }
            }
        }
    }
}
MapaServicosComponent.ɵfac = function MapaServicosComponent_Factory(t) { return new (t || MapaServicosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__["AcessibilityBarComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
MapaServicosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapaServicosComponent, selectors: [["app-mapa-servicos"]], decls: 29, vars: 14, consts: [["id", "pginicial"], ["id", "titulo", "role", "tablist", 3, "ngClass"], ["tabindex", "0", "role", "tab", 3, "ngClass"], ["src", "https://www.google.com/maps/d/embed?mid=1Iuowv-fzbrNxTssTRVtHYhMKlXk&ehbc=2E312F", "width", "300", "height", "480", 4, "ngIf"], ["title", "mapa", "src", "https://www.google.com/maps/d/embed?mid=1Iuowv-fzbrNxTssTRVtHYhMKlXk&ehbc=2E312F", "width", "640", "height", "480", 4, "ngIf"], ["iv", "", "id", "legenda", "role", "tablist", 3, "ngClass"], ["tabindex", "0", "role", "tab"], ["id", "text", "role", "tablist", 3, "ngClass"], ["src", "https://www.google.com/maps/d/embed?mid=1Iuowv-fzbrNxTssTRVtHYhMKlXk&ehbc=2E312F", "width", "300", "height", "480"], ["title", "mapa", "src", "https://www.google.com/maps/d/embed?mid=1Iuowv-fzbrNxTssTRVtHYhMKlXk&ehbc=2E312F", "width", "640", "height", "480"]], template: function MapaServicosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mapa da Rede de Servi\u00E7os Acess\u00EDveis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MapaServicosComponent_iframe_5_Template, 1, 0, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MapaServicosComponent_iframe_6_Template, 1, 0, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "O Mapa da Rede de Servi\u00E7os Acess\u00EDveis destaca os equipamentos p\u00FAblicos com acessibilidade da cidade de S\u00E3o Paulo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " O Mapa da Rede de Servi\u00E7os Acess\u00EDveis \u00E9 um recurso que apresenta\ngeograficamente os equipamentos p\u00FAblicos com acessibilidade e os que atendem \u00E0\npessoa com defici\u00EAncia em S\u00E3o Paulo. \u00C9 um mapa online organizado de maneira\nsimples para consulta e analise. Al\u00E9m de trazer informa\u00E7\u00F5es como endere\u00E7o e\ntelefone para contato, traz tamb\u00E9m indica\u00E7\u00F5es do tipo de acessibilidade do local. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Seu objetivo principal \u00E9 facilitar a busca por equipamentos p\u00FAblicos\nacess\u00EDveis na cidade e centralizar as informa\u00E7\u00F5es de acessibilidade desses locais. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Por ser elaborado em uma plataforma popularmente conhecida e de f\u00E1cil\nutiliza\u00E7\u00E3o, o Mapa do Google (Google Maps), o Mapa de Rede facilita a busca por\ninforma\u00E7\u00F5es sobre os locais e formas de locomo\u00E7\u00E3o, j\u00E1 que conta com os recursos\nda pr\u00F3pria plataforma. Assim, garante ao mun\u00EDcipe informa\u00E7\u00E3o centralizada, r\u00E1pida e\ntransparente permitindo que os deslocamentos pela cidade se tornem mais f\u00E1ceis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " O Mapa da Rede de Servi\u00E7os foi feito com pesquisa e busca sobre os\nequipamentos p\u00FAblicos acess\u00EDveis na cidade de S\u00E3o Paulo nas Secretarias\nMunicipais. Tamb\u00E9m contou com o apoio da Coordena\u00E7\u00E3o de Acessibilidade e\nDesenho Universal CADU, parte da SMPED. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " As informa\u00E7\u00F5es foram reunidas por meio de di\u00E1logos intersecretariais entre a\nSMPED e as demais secretarias, al\u00E9m de intensa pesquisa dentro da prefeitura e\npublica\u00E7\u00F5es de Institutos que j\u00E1 dialogam com as secretarias. Vale ressaltar que\napesar de nem todos serem plenamente acess\u00EDveis para todos os tipos de\ndefici\u00EAncia, os equipamentos apresentam requisitos m\u00EDnimos de acessibilidade para\ngarantir o acesso e o atendimento da pessoa com defici\u00EAncia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " O Mapa est\u00E1 em constante constru\u00E7\u00E3o e \u00E9 periodicamente atualizado. O\nobjetivo \u00E9 que cres\u00E7a cada vez mais e aglomere mais e mais informa\u00E7\u00F5es, ajudando\nna constru\u00E7\u00E3o de uma cidade mais inclusiva. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.acessoMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.acessoMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.acessoMobile));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#pginicial[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n#titulo[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    text-align: center;\n}\n\n#titulo.mobile[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-left: 0;\n    margin-right: 0;\n    text-align: center;\n}\n\nh2[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    margin-top: 54px;\n    margin-bottom: 54px;\n    width: 100%;\n    line-height: 46px;\n}\n\nh2.mobile[_ngcontent-%COMP%]{\n    font-size: 25px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n\n#text[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 30px;\n    margin-bottom: 60px;\n    text-align: justify;\n    font-size: 24px;\n    color: #333333;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 28px;\n    font-weight: 500;\n}\n\n#text.mobile[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    font-size: 18px;\n    line-height: 28px;\n    margin-top: 20px;\n}\n\n#legenda[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    font-size: 16px !important;\n    text-align: center;\n    color: #333333;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 28px;\n    font-weight: 500;\n}\n\n#legenda.mobile[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    font-size: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXBhLXNlcnZpY29zL21hcGEtc2Vydmljb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2Qsd0lBQXdJO0lBQ3hJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3SUFBd0k7SUFDeEksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXBhLXNlcnZpY29zL21hcGEtc2Vydmljb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwZ2luaWNpYWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3RpdHVsbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0aXR1bG8ubW9iaWxlIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgye1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBjb2xvcjogIzFDMkU4QTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi10b3A6IDU0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogNDZweDtcbn1cblxuaDIubW9iaWxle1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4jdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jdGV4dC5tb2JpbGUge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4jbGVnZW5kYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jbGVnZW5kYS5tb2JpbGUge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapaServicosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-mapa-servicos',
                templateUrl: './mapa-servicos.component.html',
                styleUrls: ['./mapa-servicos.component.css']
            }]
    }], function () { return [{ type: _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__["AcessibilityBarComponent"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/menu-bar/menu-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/menu-bar/menu-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: MenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function() { return MenuBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function MenuBarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuBarComponent_div_0_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r47.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "P\u00E1gina Inicial");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuBarComponent_div_0_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r49.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Quem somos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuBarComponent_div_0_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r50.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Pain\u00E9is");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuBarComponent_div_0_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r51.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Mapa da Rede de Servi\u00E7os Acess\u00EDveis");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuBarComponent_div_0_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r52.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Contato");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuBarComponent_div_0_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r53.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Ajuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MenuBarComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuBarComponent_table_1_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r54.mobile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MenuBarComponent_table_2_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuBarComponent_table_2_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r56.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "P\u00E1gina Inicial");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuBarComponent_table_2_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r58.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Quem somos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuBarComponent_table_2_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r59.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Pain\u00E9is");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuBarComponent_table_2_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r60.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Mapa da Rede de Servi\u00E7os Acess\u00EDveis");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuBarComponent_table_2_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r61.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Contato");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuBarComponent_table_2_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r62.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Ajuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class MenuBarComponent {
    constructor(responsive) {
        this.responsive = responsive;
        this.acessoMobile = false;
        this.menuClicado = false;
    }
    ngOnInit() {
        this.responsive.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletPortrait]).subscribe(result => {
            this.acessoMobile = false;
            if (result.matches) {
                this.acessoMobile = true;
                console.log(this.acessoMobile);
            }
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    focus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.delay(500);
            document.getElementsByTagName("h2")[0].focus();
            console.log(document.getElementsByTagName("h2")[0]);
        });
    }
    mobile() {
        this.menuClicado = !this.menuClicado;
    }
}
MenuBarComponent.ɵfac = function MenuBarComponent_Factory(t) { return new (t || MenuBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
MenuBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MenuBarComponent, selectors: [["app-menu-bar"]], decls: 3, vars: 3, consts: [["class", "table", 4, "ngIf"], ["class", "barra", 4, "ngIf"], [1, "table"], ["id", "atalho"], ["id", "pgInicial1"], ["routerLink", "", "tabindex", "0", "id", "pgInicial", 1, "hover", 3, "click"], ["routerLink", "/quem-somos", "tabindex", "0", "id", "Qmsomos", 1, "hover", 3, "click"], ["routerLink", "/paineis", "tabindex", "0", "id", "Paineis", 1, "hover", 3, "click"], [1, "twolines"], ["routerLink", "/mapa-rede-servicos-acessiveis", "tabindex", "0", "id", "Mapa", 1, "hover", 3, "click"], ["routerLink", "/contatos", "tabindex", "0", "id", "Contato", 1, "hover", 3, "click"], ["routerLink", "/ajuda", "tabindex", "0", "id", "Ajuda", 1, "hover", 3, "click"], [1, "barra"], ["id", "principal", 1, "botao-menu"], [3, "click"], [1, "botao-menu"]], template: function MenuBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MenuBarComponent_div_0_Template, 20, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuBarComponent_table_1_Template, 5, 0, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuBarComponent_table_2_Template, 23, 0, "table", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.acessoMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.acessoMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.acessoMobile && ctx.menuClicado);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".table[_ngcontent-%COMP%] {\n    display: table;   \n\tmargin: 0 auto;\n}\n\n#atalho[_ngcontent-%COMP%] {\n    color: #FFFFFF ; \n    font-size: 24px;\n    font-weight: bold;\n    margin: 0;\n    list-style-type: none;\n    width: 100%;\n    align-content: center;\n}\n\n#principal[_ngcontent-%COMP%]{\n    font-size: 24px;\n}\n\n.barra[_ngcontent-%COMP%]{\n    margin-left: auto;\n    margin-right: auto;\n}\n\nli[_ngcontent-%COMP%] {\n    display: inline;\n    float: left;\n    min-width: 13vw;\n    width: -moz-fit-content;\n    width: fit-content;\n    max-width: 230px;\n    padding-top: 28px;\n    text-align: center;\n}\n\n.botao-menu[_ngcontent-%COMP%] {\n    color: #FFFFFF; \n    font-size: 18px;\n    font-weight: bold;\n    list-style-type: none;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    text-align: center;\n}\n\nlist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    display: inline-block;\n    text-decoration: none !important;\n}\n\na[_ngcontent-%COMP%]:link {\n    text-decoration: none;\n  }\n\na[_ngcontent-%COMP%] {\n    color: #FFF;\n}\n\na[_ngcontent-%COMP%]:visited {\n    text-decoration: none;\n  }\n\n.twolines[_ngcontent-%COMP%]{\n    padding-top: 10px !important;\n    padding-bottom: 10px !important;\n    line-height: 28px;\n}\n\nhover[_ngcontent-%COMP%] {\n    background-color: #1C2E8A;\n}\n\nhover[_ngcontent-%COMP%]:visited {\n    color: #FFFFFF;\n}\n\n.hover[_ngcontent-%COMP%]:hover, .hover[_ngcontent-%COMP%]:focus{\n    cursor: pointer; \n    background-color: #FFFFFF;\n    color: #1C2E8A;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51LWJhci9tZW51LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYyxJQUFJLGdDQUFnQztDQUNyRCxjQUFjO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtJQUNmLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0VBQ3ZCOztBQUVGO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0VBQ3ZCOztBQUVGO0lBQ0ksNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51LWJhci9tZW51LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZTsgICAvKiBBbGxvdyB0aGUgY2VudGVyaW5nIHRvIHdvcmsgKi9cblx0bWFyZ2luOiAwIGF1dG87XG59XG5cbiNhdGFsaG8ge1xuICAgIGNvbG9yOiAjRkZGRkZGIDsgXG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4jcHJpbmNpcGFse1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmJhcnJhe1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxubGkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtaW4td2lkdGg6IDEzdnc7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1heC13aWR0aDogMjMwcHg7XG4gICAgcGFkZGluZy10b3A6IDI4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm90YW8tbWVudSB7XG4gICAgY29sb3I6ICNGRkZGRkY7IFxuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5saXN0IGF7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hOmxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG5hIHtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuYTp2aXNpdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuLnR3b2xpbmVze1xuICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuaG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzJFOEE7XG59XG5cbmhvdmVyOnZpc2l0ZWQge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uaG92ZXI6aG92ZXIsIC5ob3Zlcjpmb2N1c3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgY29sb3I6ICMxQzJFOEE7XG4gfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MenuBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-menu-bar',
                templateUrl: './menu-bar.component.html',
                styleUrls: ['./menu-bar.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/objective-content/objective-content.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/objective-content/objective-content.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ObjectiveContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectiveContentComponent", function() { return ObjectiveContentComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../acessibility-bar/acessibility-bar.component */ "./src/app/components/acessibility-bar/acessibility-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return { "mobile": a0 }; };
class ObjectiveContentComponent {
    constructor(acessibilityBarComponent, responsive) {
        this.acessibilityBarComponent = acessibilityBarComponent;
        this.responsive = responsive;
        this.divsArray = document.getElementsByTagName('div');
        this.psArray = document.getElementsByTagName('p');
        this.hsArray = document.getElementsByTagName('h1');
        this.h2sArray = document.getElementsByTagName('h2');
        this.asArray = document.getElementsByTagName('a');
        this.ulsArray = document.getElementsByTagName('ul');
        this.acessoMobile = true;
    }
    ngOnInit() {
        this.responsive.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].HandsetPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].TabletPortrait]).subscribe(result => {
            this.acessoMobile = false;
            if (result.matches) {
                this.acessoMobile = true;
                console.log(this.acessoMobile);
            }
        });
        var bench = document.getElementById('bench');
        if (bench.style.backgroundColor === 'black') {
            for (let div of this.divsArray) {
                if (div.className != 'donotchange' &&
                    div.className != 'content' &&
                    div.className != 'mat-card-header-text' &&
                    div.className != 'descricao' &&
                    div.className != 'autor' &&
                    div.className != 'tema' &&
                    div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'content' &&
                    div.className != 'mat-form-field-flex ng-tns-c49-0' &&
                    div.className != 'big pesquisa' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
                    div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-infix ng-tns-c49-0' &&
                    div.className != 'sem-resposta' &&
                    div.className != 'lista-paineis' &&
                    div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
                    div.className != 'mat-form-field-infix ng-tns-c107-0' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-0' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                    div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                    div.className != 'ng-tns-c107-1' &&
                    div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                    div.className != 'big pesquisa') {
                    div.style.backgroundColor = 'black';
                    div.style.color = 'white';
                }
                if (div.className === 'big pesquisa' ||
                    div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
                    div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
                    div.className === 'mat-form-field-infix ng-tns-c49-0') {
                    div.style.backgroundColor = 'white';
                    div.style.color = 'black';
                }
                if (div.className === "footer-basic") {
                    div.style.backgroundColor = 'white';
                }
                if (div.className === 'img') {
                    div.style.backgroundColor = 'white';
                    div.style.border = '2px solid #000';
                }
            }
            for (let p of this.psArray) {
                if (p.className != 'donotchange') {
                    p.style.backgroundColor = 'black';
                    p.style.color = 'white';
                    p.style.boxShadow = '0 0 0 2px #000';
                    p.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h of this.hsArray) {
                if (h.className != 'donotchange') {
                    h.style.backgroundColor = 'black';
                    h.style.color = 'white';
                    h.style.boxShadow = '0 0 0 2px #000';
                    h.style.border = '2px solid #ffeb3b';
                }
            }
            for (let h2 of this.h2sArray) {
                if (h2.className != 'donotchange') {
                    h2.style.backgroundColor = 'black';
                    h2.style.color = 'white';
                    h2.style.boxShadow = '0 0 0 2px #000';
                    h2.style.border = '2px solid #ffeb3b';
                }
            }
            // for (let a of this.asArray){
            //   if (a.className != 'donotchange' && 
            //   a.className != 'hover' && 
            //   a.className != 'hover2'){
            //     a.style.backgroundColor = 'black';
            //     a.style.color = 'white';
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //     if(a.className === 'fontsize') {
            //       a.classList.remove('fontsize');
            //       a.classList.add('fontsize2');
            //       a.style.boxShadow = '0 0 0 2px #000';
            //       a.style.border = '2px solid #ffeb3b'
            //     }     
            //   } else if (a.className === 'hover2'){
            //     a.classList.remove('hover2');
            //     a.classList.add('hover3');
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   } else if (a.className === 'hover') {
            //     a.style.boxShadow = '0 0 0 2px #000';
            //     a.style.border = '2px solid #ffeb3b'
            //   }
            // }
            for (let ul of this.ulsArray) {
                if (ul.id === 'atalhos') {
                    ul.style.backgroundColor = 'black';
                }
            }
        }
    }
}
ObjectiveContentComponent.ɵfac = function ObjectiveContentComponent_Factory(t) { return new (t || ObjectiveContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__["AcessibilityBarComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
ObjectiveContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ObjectiveContentComponent, selectors: [["app-objective-content"]], decls: 22, vars: 27, consts: [["id", "pginicial"], ["id", "titulo", "role", "tablist", 3, "ngClass"], ["tabindex", "0", "role", "tab", 3, "ngClass"], ["id", "text", "role", "tablist", 3, "ngClass"]], template: function ObjectiveContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Quem somos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " O Observat\u00F3rio Municipal da Pessoa com Defici\u00EAncia \u00E9 uma a\u00E7\u00E3o da Secretaria Municipal da Pessoa com Defici\u00EAncia - SMPED que busca produzir, agrupar, analisar e divulgar dados estat\u00EDsticos e anal\u00EDticos relativos \u00E0 pessoa com defici\u00EAncia residente no munic\u00EDpio de S\u00E3o Paulo, assim como, aos servi\u00E7os e pol\u00EDticas p\u00FAblicas voltados \u00E0 plena e efetiva inclus\u00E3o destas pessoas na sociedade. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Traz um trabalho transversal que dialoga com v\u00E1rias \u00E1reas da Administra\u00E7\u00E3o P\u00FAblica, reunindo assim os mais diversos indicadores relativos \u00E0 pessoa com defici\u00EAncia e acessibilidade. Assim estabelece correla\u00E7\u00F5es entre as \u00E1reas, compreendendo a pessoa com defici\u00EAncia em sua totalidade. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Sua inciativa tem como foco subsidiar o planejamento estrat\u00E9gico de pol\u00EDticas e monitorar a realiza\u00E7\u00E3o progressiva dos direitos da pessoa com defici\u00EAncia, de modo a se tornar um reposit\u00F3rio de informa\u00E7\u00E3o sobre este assunto. Al\u00E9m de ser um instrumento de informa\u00E7\u00E3o e de suporte \u00E0 decis\u00E3o p\u00FAblica necess\u00E1rio para a articula\u00E7\u00E3o e formula\u00E7\u00E3o de pol\u00EDticas p\u00FAblicas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " No desenvolvimento das a\u00E7\u00F5es e atividades do Observat\u00F3rio est\u00E1 a implanta\u00E7\u00E3o de sistemas e plataformas de tecnologia que permitam analisar, compilar e publicizar as an\u00E1lises e estudos produzidos. Al\u00E9m do desenvolvimento de sistemas de informa\u00E7\u00E3o georreferenciados e do monitoramento e avalia\u00E7\u00E3o da efic\u00E1cia, efici\u00EAncia e efetividade das a\u00E7\u00F5es, projetos e programas vinculados \u00E0s pessoas com defici\u00EAncia na Administra\u00E7\u00E3o P\u00FAblica Municipal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Este portal \u00E9 uma plataforma online desenvolvida \u00E0 luz da acessibilidade digital, incluindo fatores de transpar\u00EAncia, usabilidade e navegabilidade, objetivando contemplar as necessidades de todas as pessoas com defici\u00EAncia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " A coordena\u00E7\u00E3o do Observat\u00F3rio est\u00E1 a cargo da Divis\u00E3o de Planejamento, Monitoramento e Avalia\u00E7\u00E3o - DPMA integrada na Coordena\u00E7\u00E3o de Pol\u00EDticas e Projetos de Inclus\u00E3o - COPPI da Secretaria Municipal da Pessoa com Defici\u00EAncia da Prefeitura de S\u00E3o Paulo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c0, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c0, ctx.acessoMobile));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["#pginicial[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n#titulo[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    text-align: center;\n}\n\n#titulo.mobile[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-left: 0;\n    margin-right: 0;\n    text-align: center;\n}\n\nh2[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    width: 100%;\n    line-height: 46px;\n}\n\nh2.mobile[_ngcontent-%COMP%]{\n    font-size: 25px;\n}\n\n#text[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 60px;\n    margin-bottom: 60px;\n}\n\n#text.mobile[_ngcontent-%COMP%]{\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 30px;\n    margin-bottom: 60px;\n}\n\np[_ngcontent-%COMP%] {\n    text-align: justify;\n    font-size: 24px;\n    color: #333333;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 28px;\n    font-weight: 500;\n}\n\np.mobile[_ngcontent-%COMP%] {\n    font-size: 20px;\n    text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vYmplY3RpdmUtY29udGVudC9vYmplY3RpdmUtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLHdJQUF3STtJQUN4SSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2JqZWN0aXZlLWNvbnRlbnQvb2JqZWN0aXZlLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwZ2luaWNpYWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3RpdHVsbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0aXR1bG8ubW9iaWxlIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgye1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBjb2xvcjogIzFDMkU4QTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xufVxuXG5oMi5tb2JpbGV7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4jdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbiN0ZXh0Lm1vYmlsZXtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbnAge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucC5tb2JpbGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ObjectiveContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-objective-content',
                templateUrl: './objective-content.component.html',
                styleUrls: ['./objective-content.component.css']
            }]
    }], function () { return [{ type: _acessibility_bar_acessibility_bar_component__WEBPACK_IMPORTED_MODULE_2__["AcessibilityBarComponent"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dash-description.service.ts":
/*!*********************************************!*\
  !*** ./src/app/dash-description.service.ts ***!
  \*********************************************/
/*! exports provided: DashDescriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashDescriptionService", function() { return DashDescriptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





class DashDescriptionService {
    constructor(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
    }
    getDescription(uid) {
        let url = "http://localhost:4200/api/dashboards/uid/" + uid;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJrIjoid3IyVjE3dVU2NDJUaTRwbG1sVWw4ZFdQQldDN1NhYmgiLCJuIjoiVGVzdGUiLCJpZCI6MX0=`
        });
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        return this.http.get(url);
    }
}
DashDescriptionService.ɵfac = function DashDescriptionService_Factory(t) { return new (t || DashDescriptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
DashDescriptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashDescriptionService, factory: DashDescriptionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashDescriptionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/grafa-painel/grafa-painel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/grafa-painel/grafa-painel.component.ts ***!
  \********************************************************/
/*! exports provided: GrafaPainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrafaPainelComponent", function() { return GrafaPainelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _dash_description_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dash-description.service */ "./src/app/dash-description.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function GrafaPainelComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("T\u00EDtulo: ", panel_r9.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Descri\u00E7\u00E3o: ", panel_r9.description, "");
} }
class GrafaPainelComponent {
    constructor(route, sanitizer, DetailsGrafana) {
        this.route = route;
        this.sanitizer = sanitizer;
        this.DetailsGrafana = DetailsGrafana;
        this.description = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.separator = this.id.indexOf("&");
        this.separator2 = this.id.indexOf("@@");
        this.url = this.id.slice(this.separator2 + 4, this.separator);
        this.uid = this.id.slice(0, this.separator2);
        this.title = this.id.slice(this.separator + 1, this.id.length);
        //this.source = "https://f5aa-143-107-167-161.sa.ngrok.io/d" + this.url + "?orgId=1" + "&kiosk=true"
        this.source = "http://localhost:3000/d" + this.url + "?orgId=1" + "&kiosk=true";
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.source);
        this.DetailsGrafana.getDescription(this.uid).subscribe(data => {
            this.description.push(data);
        });
        document.title = this.title;
    }
}
GrafaPainelComponent.ɵfac = function GrafaPainelComponent_Factory(t) { return new (t || GrafaPainelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dash_description_service__WEBPACK_IMPORTED_MODULE_3__["DashDescriptionService"])); };
GrafaPainelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GrafaPainelComponent, selectors: [["app-grafa-painel"]], decls: 17, vars: 6, consts: [["id", "pginicial"], [1, "botaoVoltar"], ["routerLink", "/paineis", 1, "botaoVoltarProprio"], ["id", "titulo", "role", "tablist"], ["tabindex", "0", "role", "tab"], [1, "text"], ["id", "titulo-valor"], ["id", "autor-valor"], ["id", "descricao-valor"], ["id", "graficos"], ["id", "myIframe", "width", "90%", "height", "1000", "frameborder", "0", 3, "src"], ["id", "text2", 4, "ngFor", "ngForOf"], ["id", "text2"], ["id", "titulo-panel-valor"], ["id", "descricao-panel-valor"]], template: function GrafaPainelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "iframe", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GrafaPainelComponent_div_16_Template, 5, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tema: ", ctx.description[0].meta.folderTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Autor: ", ctx.description[0].meta.updatedBy, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description[0].dashboard.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.safeSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.description[0].dashboard.panels);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["#titulo[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    text-align: center;\n}\n\nh1[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    margin-top: 54px;\n    margin-botton: 54px;\n    width: 100%;\n    line-height: 46px;\n}\n\nh2[_ngcontent-%COMP%]{\n    font-size: 38px;\n    color: #1C2E8A;\n    font-weight: bolder;\n    margin-top: 54px;\n    margin-botton: 54px;\n    width: 100%;\n    line-height: 46px;\n}\n\n.text[_ngcontent-%COMP%] {\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 60px;\n    margin-bottom: 60px;\n    text-align: center;\n}\n\n#text2[_ngcontent-%COMP%] {\n    margin-left: 8%;\n    margin-right: 8%;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    align-items: left;\n}\n\n#titulo-valor[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-weight: normal;\n}\n\n#autor-valor[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight:lighter;\n}\n\n#descricao-valor[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight:normal;\n}\n\n#titulo-panel-valor[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n#descricao-panel-valor[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-left: 10px;\n    font-size: 14px;\n}\n\np[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 24px;\n    color: #333333;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    line-height: 28px;\n    font-weight: 500;\n}\n\n.botaoVoltar[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 20;  \n    margin-left: 8%;\n}\n\n.botaoVoltarProprio[_ngcontent-%COMP%]{\n    display: inline;\n    font-size: 20px;\n    background-color: #1C2E8A;\n    color: white;\n    border-radius: 10px;\n    cursor: pointer;\n    float: left;\n    width: -moz-fit-content;\n    width: fit-content;\n    text-align: center;\n}\n\n.botaoVoltarProprio[_ngcontent-%COMP%]:hover{\n    background-color: #1C2EEE;\n    color: white;\n}\n\n#graficos[_ngcontent-%COMP%] {\n    align-items: center;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhZmEtcGFpbmVsL2dyYWZhLXBhaW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztJQUNkLHdJQUF3STtJQUN4SSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZ3JhZmEtcGFpbmVsL2dyYWZhLXBhaW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jdGl0dWxvIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDF7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGNvbG9yOiAjMUMyRThBO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgbWFyZ2luLXRvcDogNTRweDtcbiAgICBtYXJnaW4tYm90dG9uOiA1NHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xufVxuXG5oMntcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgY29sb3I6ICMxQzJFOEE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBtYXJnaW4tdG9wOiA1NHB4O1xuICAgIG1hcmdpbi1ib3R0b246IDU0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbi50ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0ZXh0MiB7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xuICAgIG1hcmdpbi1yaWdodDogOCU7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xufVxuXG4jdGl0dWxvLXZhbG9yIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuI2F1dG9yLXZhbG9yIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcbn1cblxuI2Rlc2NyaWNhby12YWxvciB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbn1cblxuXG4jdGl0dWxvLXBhbmVsLXZhbG9yIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2Rlc2NyaWNhby1wYW5lbC12YWxvciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbnAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYm90YW9Wb2x0YXIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyMDsgIFxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcbn1cblxuLmJvdGFvVm9sdGFyUHJvcHJpb3tcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzJFOEE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3Rhb1ZvbHRhclByb3ByaW86aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFDMkVFRTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNncmFmaWNvcyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrafaPainelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grafa-painel',
                templateUrl: './grafa-painel.component.html',
                styleUrls: ['./grafa-painel.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _dash_description_service__WEBPACK_IMPORTED_MODULE_3__["DashDescriptionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/grafana-dashs.service.ts":
/*!******************************************!*\
  !*** ./src/app/grafana-dashs.service.ts ***!
  \******************************************/
/*! exports provided: GrafanaDashsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrafanaDashsService", function() { return GrafanaDashsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class GrafanaDashsService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        let url = "http://localhost:4200/api/search";
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJrIjoid3IyVjE3dVU2NDJUaTRwbG1sVWw4ZFdQQldDN1NhYmgiLCJuIjoiVGVzdGUiLCJpZCI6MX0=`
        });
        return this.http.get(url, { headers: headers });
    }
}
GrafanaDashsService.ɵfac = function GrafanaDashsService_Factory(t) { return new (t || GrafanaDashsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GrafanaDashsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GrafanaDashsService, factory: GrafanaDashsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrafanaDashsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/navigation/navigation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/navigation/navigation.module.ts ***!
  \*************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/navigation/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class NavigationModule {
}
NavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavigationModule });
NavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NavigationModule_Factory(t) { return new (t || NavigationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavigationModule, { declarations: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]], exports: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]
                ],
                exports: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/navigation/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/navigation/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_portal_acessibilidade_dialog_acessibilidade_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component */ "./src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");









const _c0 = function (a0) { return { "mobile": a0 }; };
function ToolbarComponent_div_2_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r15.acessoMobile));
} }
const _c1 = function () { return ["/"]; };
function ToolbarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToolbarComponent_div_2_a_3_Template, 2, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r11.acessoMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.acessoMobile);
} }
function ToolbarComponent_div_3_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r16.acessoMobile));
} }
function ToolbarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToolbarComponent_div_3_a_3_Template, 2, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r12.acessoMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.acessoMobile);
} }
function ToolbarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Observat\u00F3rio Municipal da Pessoa com Defici\u00EAncia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ToolbarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ToolbarComponent {
    constructor(scroll, router, dialog, elementRef, responsive) {
        this.scroll = scroll;
        this.router = router;
        this.dialog = dialog;
        this.elementRef = elementRef;
        this.responsive = responsive;
        this.acessoMobile = false;
        this.loggedIn = false;
        this.contraste = false;
        this.isPaginaInicial = true;
        this.isTabVisivel = 0;
        this.isDialogOpen = false;
        router.events.subscribe((val) => {
            if (this.router.url === '/paineis') {
                this.isPaginaInicial = true;
                document.getElementById("irBusca").tabIndex = 0;
                //this.isTabVisivel = 0;
            }
            else {
                this.isPaginaInicial = false;
                document.getElementById("irBusca").tabIndex = -1;
                //this.isTabVisivel = -1;
            }
        });
        this.dialog._afterAllClosed.subscribe(n => {
            this.isDialogOpen = false;
        });
    }
    ngOnInit() {
        this.responsive.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].HandsetPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].TabletPortrait]).subscribe(result => {
            this.acessoMobile = false;
            if (result.matches) {
                this.acessoMobile = true;
                console.log(result.matches);
            }
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                document.querySelector(this.getAttribute('href')).click();
            });
        });
    }
    irConteudo() {
        var _a, _b;
        this.scroll.scrollToAnchor("conteudo");
        (_a = document.querySelector('#conteudo')) === null || _a === void 0 ? void 0 : _a.focus();
        (_b = document.querySelector('#conteudo')) === null || _b === void 0 ? void 0 : _b.click();
    }
    irBusca() {
        try {
            if (document.getElementById("filtro")) {
                document.getElementById("filtro").click();
            }
        }
        finally {
        }
    }
    inverterCor() {
        if (this.contraste === false) {
            document.documentElement.style.setProperty('--color-terciary-text', '#3e3d3d');
            document.documentElement.style.setProperty('--text-grey', '#111212');
            document.documentElement.style.setProperty('--color-background', '#f4f1f1');
            document.documentElement.style.setProperty('--color-primary', '#253b46');
            document.documentElement.style.setProperty('--color-search-field', '#504e4e');
            document.body.style.filter = "invert(1)";
            this.contraste = !this.contraste;
        }
        else {
            document.body.style.filter = "invert(0)";
            this.contraste = !this.contraste;
            document.documentElement.style.setProperty('--color-terciary-text', '#929292');
            document.documentElement.style.setProperty('--text-grey', '#5f6368');
            document.documentElement.style.setProperty('--color-background', '#fafafa');
            document.documentElement.style.setProperty('--color-primary', '#607d8b');
            document.documentElement.style.setProperty('--color-search-field', '#8a8a8a');
        }
    }
    openDialog() {
        if (!this.isDialogOpen) {
            this.dialog.open(src_app_portal_acessibilidade_dialog_acessibilidade_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AcessibilidadeDialogComponent"]);
            this.isDialogOpen = true;
        }
        else {
            this.dialog.closeAll();
            this.isDialogOpen = false;
        }
    }
    onKeyPressCor(e) {
        if (e.keyCode == 13) {
            this.inverterCor();
        }
    }
    closeDialog() {
        this.dialog.closeAll();
    }
    onKeyPressAcess(e) {
        if (e.keyCode == 13) {
            if (!this.isDialogOpen) {
                this.openDialog();
            }
        }
    }
    onKeyPressConteudo(e) {
        if (e.keyCode == 13) {
            this.irConteudo();
        }
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 6, vars: 4, consts: [[1, "donotchange"], ["id", "toolbar-principal", 1, "donotchange"], [4, "ngIf"], ["id", "logos", 4, "ngIf"], ["class", "donotchange", "id", "title", 4, "ngIf"], ["class", "donotchange", "style", "text-align: right; width:70%", 4, "ngIf"], ["tabindex", "0", "id", "logo-observatorio", 1, "donotchange", 3, "routerLink"], ["src", "/assets/2019.06.29---Layout-Observat\u00F3rio-Municipal-PCD--COLORIDO-VAZADO.PNG", "alt", "Observat\u00F3rio Municipal da Pessoa com Defici\u00EAncia", 1, "logo", 3, "ngClass"], ["class", "donotchange", "tabindex", "0", "href", "https://www.prefeitura.sp.gov.br/cidade/secretarias/pessoa_com_deficiencia/", "id", "logo-prefeitura", 4, "ngIf"], ["tabindex", "0", "href", "https://www.prefeitura.sp.gov.br/cidade/secretarias/pessoa_com_deficiencia/", "id", "logo-prefeitura", 1, "donotchange"], ["src", "/assets/Pessoa com Defici\u00EAncia_principal - vertical.png", "alt", "Secretaria Municipal do Deficiente", 1, "logoPref", 3, "ngClass"], ["id", "logos"], ["id", "title", 1, "donotchange"], [1, "donotchange", 2, "text-align", "right", "width", "70%"], ["src", "/assets/Pessoa+com+Defici\u00EAncia_principal+-+horizontal .png", "alt", "Secretaria Municipal do Deficiente", 1, "logoPref"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToolbarComponent_div_2_Template, 4, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToolbarComponent_div_3_Template, 4, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToolbarComponent_div_4_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToolbarComponent_div_5_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.acessoMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.acessoMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.acessoMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.acessoMobile);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["#toolbar-principal[_ngcontent-%COMP%] {\n    background-color: #FFFFFF;\n    color: #1C2E8A;\n    height: 200px;\n    position: relative;\n    padding-bottom: 10px;\n    padding-top: 10px;\n}\n\n#toolbar-principal.mobile[_ngcontent-%COMP%] {\n    background-color: #FFFFFF;\n    color: #1C2E8A;\n    height: 200px;\n}\n\n#title[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nh1[_ngcontent-%COMP%]{\n    font-size: 40px;\n    font-weight: bold;   \n    padding: 5px; \n    position: relative;\n    white-space: normal; \n}\n\n.logo[_ngcontent-%COMP%] {\n    height: 150px;\n}\n\n.logo.mobile[_ngcontent-%COMP%]{\n    height: auto;\n    width: 80%;\n}\n\n.logoPref.mobile[_ngcontent-%COMP%]{\n    height: 25vw;\n}\n\n.logoPref[_ngcontent-%COMP%] {\n    height: 180px;\n}\n\n#logos[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-content: center;\n    margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4jdG9vbGJhci1wcmluY2lwYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgY29sb3I6ICMxQzJFOEE7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbiN0b29sYmFyLXByaW5jaXBhbC5tb2JpbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgY29sb3I6ICMxQzJFOEE7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuI3RpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaDF7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgIFxuICAgIHBhZGRpbmc6IDVweDsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IFxufVxuXG4ubG9nbyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmxvZ28ubW9iaWxle1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogODAlO1xufVxuXG4ubG9nb1ByZWYubW9iaWxle1xuICAgIGhlaWdodDogMjV2dztcbn1cblxuLmxvZ29QcmVmIHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xufVxuXG4jbG9nb3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["ViewportScroller"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AcessibilidadeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcessibilidadeDialogComponent", function() { return AcessibilidadeDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class AcessibilidadeDialogComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    closeDialog() {
        this.dialog.closeAll();
    }
    onKeyPressAcess(e) {
        if (e.keyCode == 13)
            this.closeDialog();
    }
}
AcessibilidadeDialogComponent.ɵfac = function AcessibilidadeDialogComponent_Factory(t) { return new (t || AcessibilidadeDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
AcessibilidadeDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcessibilidadeDialogComponent, selectors: [["app-acessibilidade-dialog"]], decls: 28, vars: 0, consts: [[3, "keypress"], ["tabindex", "0"], ["mat-button", "", "mat-dialog-close", "", "tabindex", "0", 3, "keypress"]], template: function AcessibilidadeDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilidadeDialogComponent_Template_div_keypress_0_listener($event) { return ctx.onKeyPressAcess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Acessibilidade digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "O Portal do Observat\u00F3rio atende requisitos de acessibilidade digital com foco na usabilidade, navega\u00E7\u00E3o e compromisso com as pessoas com e sem defici\u00EAncia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Os atalhos utilizados pelo portal s\u00E3o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Teclando-se Alt + 1, chega-se diretamente ao come\u00E7o do conte\u00FAdo principal da p\u00E1gina.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Teclando-se Alt + 2, chega-se diretamente ao menu principal da p\u00E1gina.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Teclando-se Alt + 3, chega-se diretamente ao rodap\u00E9.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Teclando-se Alt + 4, chega-se diretamente \u00E0 funcionalidade do alto-contraste.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Teclando-se Alt + 5, chega-se diretamente \u00E0 p\u00E1gina de descri\u00E7\u00E3o da acessibilidade.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Teclando-se Alt + 6, chega-se diretamente \u00E0 op\u00E7\u00E3o de aumentar a fonte.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Teclando-se Alt + 7, chega-se diretamente \u00E0 op\u00E7\u00E3o de diminuir a fonte.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pode haver a necessidade de pressionar o bot\u00E3o Shift junto ao respectivo comando, a depender do Sistema Operacional e/ou do navegador web utilizado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function AcessibilidadeDialogComponent_Template_button_keypress_26_listener($event) { return ctx.onKeyPressAcess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Fechar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["div[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--color-secondary-text);\n}\ndiv[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, div[_ngcontent-%COMP%]   mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9tb2JpbGUtYWNlc3NpdmVsL3Rlc3RlLWNvbnRhZG9yL3NyYy9hcHAvcG9ydGFsL2FjZXNzaWJpbGlkYWRlLWRpYWxvZy9hY2Vzc2liaWxpZGFkZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvcnRhbC9hY2Vzc2liaWxpZGFkZS1kaWFsb2cvYWNlc3NpYmlsaWRhZGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksa0NBQUE7QUNEWjtBRElRO0VBQ0ksMEJBQUE7QUNGWiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9hY2Vzc2liaWxpZGFkZS1kaWFsb2cvYWNlc3NpYmlsaWRhZGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xuICAgIG1hdC1kaWFsb2ctYWN0aW9uc3tcbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS10ZXh0KTsgICAgICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGJ1dHRvbjpob3ZlciwgYnV0dG9uOmZvY3Vze1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZGl2IG1hdC1kaWFsb2ctYWN0aW9ucyBidXR0b24ge1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LXRleHQpO1xufVxuZGl2IG1hdC1kaWFsb2ctYWN0aW9ucyBidXR0b246aG92ZXIsIGRpdiBtYXQtZGlhbG9nLWFjdGlvbnMgYnV0dG9uOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcessibilidadeDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-acessibilidade-dialog',
                templateUrl: './acessibilidade-dialog.component.html',
                styleUrls: ['./acessibilidade-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/models/indicador.model.ts":
/*!**************************************************!*\
  !*** ./src/app/portal/models/indicador.model.ts ***!
  \**************************************************/
/*! exports provided: Indicador, TipoIndicador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indicador", function() { return Indicador; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoIndicador", function() { return TipoIndicador; });
class Indicador {
    constructor(id, titulo, descricao, autor, fonte, dimensao, metrica, agregacao, tipo, criacao, series, regioes, max) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.autor = autor;
        this.dimensao = dimensao;
        this.metrica = metrica;
        this.fonte = fonte;
        this.agregacao = agregacao;
        this.tipo = tipo;
        this.criacao = criacao;
        this.series = series;
        this.regioes = regioes;
        this.max = max;
    }
    static fromFormGroup(formGroup) {
        const id = undefined;
        const titulo = formGroup.get('titulo') ? formGroup.get('titulo').value : undefined;
        const autor = formGroup.get('autor') ? formGroup.get('autor').value : undefined;
        const descricao = formGroup.get('descricao') ? formGroup.get('descricao').value : undefined;
        const fonte = formGroup.get('fonte') ? formGroup.get('fonte').value : undefined;
        const dimensao = formGroup.get('dimensao') ? formGroup.get('dimensao').value : undefined;
        const metrica = formGroup.get('metrica') ? formGroup.get('metrica').value : undefined;
        const agregacao = formGroup.get('agregacao') ? formGroup.get('agregacao').value : undefined;
        const tipo = formGroup.get('tipo') ? formGroup.get('tipo').value : undefined;
        const criacao = new Date().getDate();
        return new Indicador(id, titulo, descricao, autor, fonte, dimensao, metrica, agregacao, tipo, criacao);
    }
    static fromResource(resource) {
        const indicador = new Indicador(resource.id, resource.titulo, resource.descricao, resource.autor, resource.fonte, resource.dimensao, resource.metrica, resource.agregacao, resource.tipo, resource.criacao, resource.series, resource.regioes, resource.max);
        return indicador;
    }
}
var TipoIndicador;
(function (TipoIndicador) {
    TipoIndicador["PIZZA"] = "pie";
    TipoIndicador["BARRAS"] = "bar";
    TipoIndicador["MAPA"] = "map";
})(TipoIndicador || (TipoIndicador = {}));


/***/ }),

/***/ "./src/app/portal/models/painel.model.ts":
/*!***********************************************!*\
  !*** ./src/app/portal/models/painel.model.ts ***!
  \***********************************************/
/*! exports provided: Painel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Painel", function() { return Painel; });
class Painel {
    constructor(id, titulo, descricao, autor, criacao, ultimaAteracao, tema) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.autor = autor;
        this.criacao = criacao;
        this.ultimaAteracao = ultimaAteracao;
        this.tema = tema;
    }
    static fromFormGroup(formGroup) {
        const id = undefined;
        const titulo = formGroup.get('titulo') ? formGroup.get('titulo').value : undefined;
        const autor = formGroup.get('autor') ? formGroup.get('autor').value : undefined;
        const descricao = formGroup.get('descricao') ? formGroup.get('descricao').value : undefined;
        const tema = formGroup.get('tema') ? formGroup.get('tema').value : undefined;
        return new Painel(id, titulo, descricao, autor, null, null, tema);
    }
    static fromResource(resource) {
        const painel = new Painel(resource.id, resource.titulo, resource.descricao, resource.autor, resource.criacao, resource.ultimaAteracao, resource.tema);
        painel.template = resource.template;
        return painel;
    }
}


/***/ }),

/***/ "./src/app/portal/models/serie.model.ts":
/*!**********************************************!*\
  !*** ./src/app/portal/models/serie.model.ts ***!
  \**********************************************/
/*! exports provided: Serie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Serie", function() { return Serie; });
class Serie {
    constructor(nome, itens) {
        this.nome = nome;
        this.itens = itens;
    }
    static fromResource(resource) {
        const serie = new Serie(resource.nome, resource.itens);
        return serie;
    }
    static toArray(serie) {
        const array = [serie.nome];
        serie.itens.map(item => {
            array.push(item);
        });
        return array;
    }
}


/***/ }),

/***/ "./src/app/portal/painel/painel.component.ts":
/*!***************************************************!*\
  !*** ./src/app/portal/painel/painel.component.ts ***!
  \***************************************************/
/*! exports provided: PainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelComponent", function() { return PainelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_serie_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/serie.model */ "./src/app/portal/models/serie.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/print.service */ "./src/app/portal/services/print.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/grafico/grafico.component */ "./src/app/portal/shared/grafico/grafico.component.ts");
/* harmony import */ var _shared_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/mapa/mapa.component */ "./src/app/portal/shared/mapa/mapa.component.ts");













function PainelComponent_div_12_div_17_div_1_app_grafico_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-grafico", 28);
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const i_r26 = ctx_r30.index;
    const widget_r25 = ctx_r30.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "grafico-", i_r26, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tipo", widget_r25.indicador.tipo)("dataSet$", ctx_r28.toObservable(widget_r25.indicador.series))("titulo", widget_r25.indicador.titulo)("descricao", widget_r25.indicador.descricao);
} }
function PainelComponent_div_12_div_17_div_1_app_mapa_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mapa", 29);
} if (rf & 2) {
    const widget_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indicador", widget_r25.indicador)("descricao", widget_r25.indicador.descricao);
} }
function PainelComponent_div_12_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PainelComponent_div_12_div_17_div_1_app_grafico_1_Template, 1, 5, "app-grafico", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PainelComponent_div_12_div_17_div_1_app_mapa_2_Template, 1, 2, "app-mapa", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r26 = ctx_r32.index;
    const widget_r25 = ctx_r32.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "widget-", i_r26, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r25.indicador.tipo !== "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r25.indicador.tipo === "map");
} }
function PainelComponent_div_12_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PainelComponent_div_12_div_17_div_1_Template, 3, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const widget_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r25.indicador != undefined);
} }
function PainelComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PainelComponent_div_12_div_17_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.painel.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.painel.autor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tema: ", ctx_r23.painel.tema, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.painel.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.painel.template.widgets);
} }
class PainelComponent {
    constructor(location, route, printService, router, scroll) {
        this.location = location;
        this.route = route;
        this.printService = printService;
        this.router = router;
        this.scroll = scroll;
        this.titulo = 'Titulo';
    }
    onKeyDown(e) {
        let map = {};
        map[e.keyCode] = e.type == 'keydown';
        if ((e.altKey && map[49]) || (e.altKey && map[49] && e.shiftKey) || (e.shiftKey && map[49] && map[27])) {
            document.getElementById("irConteudo").click();
        }
        else if ((e.altKey && map[50]) || (e.altKey && map[50] && e.shiftKey) || (e.shiftKey && map[50] && map[27])) {
            document.getElementById("irMenu").click();
        }
        else if ((e.altKey && map[52]) || (e.altKey && map[52] && e.shiftKey) || (e.shiftKey && map[52] && map[27])) {
            document.getElementById("irContraste").click();
        }
        else if ((e.altKey && map[53]) || (e.altKey && map[53] && e.shiftKey) || (e.shiftKey && map[53] && map[27])) {
            document.getElementById("irAcessibilidade").click();
        }
        else if ((e.altKey && map[54]) || (e.altKey && map[54] && e.shiftKey) || (e.shiftKey && map[54] && map[27])) {
            this.scroll.scrollToPosition([0, document.body.scrollHeight]);
            console.log("Rodapé");
        }
    }
    ngOnInit() {
        this.painel = this.route.snapshot.data.painel;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])).subscribe(() => {
            const mainHeader = document.getElementById('titulo-valor');
            if (mainHeader) {
                mainHeader.focus();
            }
        });
        document.title = this.painel.titulo;
    }
    ngOnChanges(e) {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])).subscribe(() => {
            const mainHeader = document.getElementById('titulo-valor');
            if (mainHeader) {
                mainHeader.focus();
                mainHeader.click();
            }
        });
    }
    onPrintPainel() {
        this.printService.printDocument('paineis', this.painel.id);
    }
    toObservable(series) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(series.map(serie => _models_serie_model__WEBPACK_IMPORTED_MODULE_1__["Serie"].toArray(serie)));
    }
    voltarNavegacao() {
        this.router.navigate(['..'], { relativeTo: this.route });
    }
    onKeyPressCor(e) {
        if (e.keyCode == 13) {
            this.voltarNavegacao();
        }
    }
}
PainelComponent.ɵfac = function PainelComponent_Factory(t) { return new (t || PainelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_6__["PrintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"])); };
PainelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PainelComponent, selectors: [["app-painel"]], hostBindings: function PainelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function PainelComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 1, consts: [[1, "container"], [1, "painel"], [1, "painel-header"], ["mat-icon-button", "", "id", "back-button", "tabindex", "0", "aria-hidden", "false", "aria-label", "voltar navega\u00E7\u00E3o", 1, "back-button", 3, "click", "keypress"], [1, "painel-title"], ["id", "titulo", 1, "titulo", 2, "margin", "0 !important"], ["id", "imprimir-button"], ["mat-button", "", "id", "imprimir", 3, "click"], ["class", "painel-content", 4, "ngIf"], [1, "painel-content"], [1, "input-box"], [1, "titulo-container"], ["id", "titulo-valor", 1, "titulo"], ["autofocus", "", "tabindex", "0"], [1, "autor-container"], ["id", "autor-valor", "tabindex", "0", 1, "autor"], [1, "tema-container"], ["id", "tema-valor", 1, "tema"], ["tabindex", "0"], [1, "descricao-container"], ["id", "descricao-valor", "tabindex", "0", 1, "descricao"], ["id", "conteudo", 1, "template"], ["class", "widget", 4, "ngFor", "ngForOf"], [1, "widget"], ["class", "grafico", 3, "id", 4, "ngIf"], [1, "grafico", 3, "id"], [3, "id", "tipo", "dataSet$", "titulo", "descricao", 4, "ngIf"], [3, "indicador", "descricao", 4, "ngIf"], [3, "id", "tipo", "dataSet$", "titulo", "descricao"], [3, "indicador", "descricao"]], template: function PainelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PainelComponent_Template_button_click_3_listener() { return ctx.voltarNavegacao(); })("keypress", function PainelComponent_Template_button_keypress_3_listener($event) { return ctx.onKeyPressCor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "arrow_back_ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Perfil do painel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PainelComponent_Template_button_click_10_listener() { return ctx.onPrintPainel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Imprimir / Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PainelComponent_div_12_Template, 18, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.painel != undefined);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_9__["GraficoComponent"], _shared_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_10__["MapaComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex: 1 1 auto;\n  height: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  margin: 24px 16px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-header[_ngcontent-%COMP%]   .painel-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 96px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-header[_ngcontent-%COMP%]   #editar-button[_ngcontent-%COMP%] {\n  margin: auto 16px auto auto;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-header[_ngcontent-%COMP%]   #imprimir-button[_ngcontent-%COMP%]   #imprimir[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .autor-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0 20vw;\n  overflow-wrap: break-word;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .autor-container[_ngcontent-%COMP%]   .autor[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 10px 0;\n  font-weight: 300;\n  color: var(--color-terciary-text);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .autor-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .titulo-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .titulo-container[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0 0 0 0 !important;\n  font-weight: 400;\n  color: var(--color-terciary-text);\n  overflow-wrap: break-word;\n  padding: 0 20vw;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .titulo-container[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .tema-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0 20vw;\n  overflow-wrap: break-word;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .tema-container[_ngcontent-%COMP%]   .tema[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0;\n  font-weight: 300;\n  color: var(--color-terciary-text);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .descricao-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 20px 0 0;\n  padding: 0 10vw;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .descricao-container[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0;\n  font-weight: 200;\n  overflow-wrap: break-word;\n  color: var(--color-terciary-text);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .template[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-self: center;\n  width: 100%;\n  height: 100%;\n  max-width: 1600px;\n  background-color: var(--color-background);\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .template[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 512px;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 16px;\n  min-width: 512px;\n  min-height: 256px;\n  \n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .template[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%]   .grafico[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9tb2JpbGUtYWNlc3NpdmVsL3Rlc3RlLWNvbnRhZG9yL3NyYy9hcHAvcG9ydGFsL3BhaW5lbC9wYWluZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvcnRhbC9wYWluZWwvcGFpbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDQ047QURDTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NSO0FEQ1E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDVjtBREVRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBVjtBREdRO0VBQ0UsMkJBQUE7QUNEVjtBREtVO0VBQ0UsMkJBQUE7QUNIWjtBRFFNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDTlI7QURVVTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ1JaO0FEVVk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUNSZDtBRFdZO0VBQ0UsZUFBQTtBQ1RkO0FEYVU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNYWjtBRGFZO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ1hkO0FEYWM7RUFDRSxtQkFBQTtBQ1hoQjtBRGdCVTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2RaO0FEZ0JZO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FDZGQ7QURrQlU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNoQlo7QURrQlk7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtBQ2hCZDtBRHFCUTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtBQ25CVjtBRHFCVTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBTUE7O0lBQUE7QUN0Qlo7QURrQlk7RUFDRSxZQUFBO0FDaEJkIiwiZmlsZSI6InNyYy9hcHAvcG9ydGFsL3BhaW5lbC9wYWluZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5wYWluZWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4OiAxIDEgYXV0bztcblxuICAgICAgLnBhaW5lbC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5iYWNrLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luOiAyNHB4IDE2cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhaW5lbC10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiA5NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI2VkaXRhci1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbjogYXV0byAxNnB4IGF1dG8gYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgICNpbXByaW1pci1idXR0b257XG4gICAgICAgICAgI2ltcHJpbWlye1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGFpbmVsLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5pbnB1dC1ib3gge1xuXG4gICAgICAgICAgLmF1dG9yLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwdnc7XG4gICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG4gICAgICAgICAgICAuYXV0b3Ige1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKCAtLWNvbG9yLXRlcmNpYXJ5LXRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXR1bG8tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgLnRpdHVsbyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoIC0tY29sb3ItdGVyY2lhcnktdGV4dCk7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjB2dztcblxuICAgICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRlbWEtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjB2dztcbiAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgICAgICAgICAgIC50ZW1hIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoIC0tY29sb3ItdGVyY2lhcnktdGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRlc2NyaWNhby1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTB2dztcblxuICAgICAgICAgICAgLmRlc2NyaWNhbyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKCAtLWNvbG9yLXRlcmNpYXJ5LXRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50ZW1wbGF0ZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxNjAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XG5cbiAgICAgICAgICAud2lkZ2V0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsZXg6IDEgMSA1MTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTEycHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyNTZweDtcblxuICAgICAgICAgICAgLmdyYWZpY28ge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qLmdyYWZpY286aG92ZXJ7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1oZWFkZXIgLmJhY2stYnV0dG9uIHtcbiAgbWFyZ2luOiAyNHB4IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWhlYWRlciAucGFpbmVsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDk2cHg7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1oZWFkZXIgI2VkaXRhci1idXR0b24ge1xuICBtYXJnaW46IGF1dG8gMTZweCBhdXRvIGF1dG87XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1oZWFkZXIgI2ltcHJpbWlyLWJ1dHRvbiAjaW1wcmltaXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLmlucHV0LWJveCAuYXV0b3ItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjB2dztcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLmlucHV0LWJveCAuYXV0b3ItY29udGFpbmVyIC5hdXRvciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXJjaWFyeS10ZXh0KTtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLmlucHV0LWJveCAuYXV0b3ItY29udGFpbmVyIGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCAuaW5wdXQtYm94IC50aXR1bG8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC5pbnB1dC1ib3ggLnRpdHVsby1jb250YWluZXIgLnRpdHVsbyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAwIDAgMCAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXJjaWFyeS10ZXh0KTtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgcGFkZGluZzogMCAyMHZ3O1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCAuaW5wdXQtYm94IC50aXR1bG8tY29udGFpbmVyIC50aXR1bG8gaDMge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCAuaW5wdXQtYm94IC50ZW1hLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwdnc7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC5pbnB1dC1ib3ggLnRlbWEtY29udGFpbmVyIC50ZW1hIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXJjaWFyeS10ZXh0KTtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLmlucHV0LWJveCAuZGVzY3JpY2FvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMCAwO1xuICBwYWRkaW5nOiAwIDEwdnc7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC5pbnB1dC1ib3ggLmRlc2NyaWNhby1jb250YWluZXIgLmRlc2NyaWNhbyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogMjAwO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGVyY2lhcnktdGV4dCk7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTYwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLnRlbXBsYXRlIC53aWRnZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDEgMSA1MTJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMTZweDtcbiAgbWluLXdpZHRoOiA1MTJweDtcbiAgbWluLWhlaWdodDogMjU2cHg7XG4gIC8qLmdyYWZpY286aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgfSovXG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC50ZW1wbGF0ZSAud2lkZ2V0IC5ncmFmaWNvIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PainelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-painel',
                templateUrl: './painel.component.html',
                styleUrls: ['./painel.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_print_service__WEBPACK_IMPORTED_MODULE_6__["PrintService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"] }]; }, { onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/portal-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/portal/portal-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PortalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalRoutingModule", function() { return PortalRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./painel/painel.component */ "./src/app/portal/painel/painel.component.ts");
/* harmony import */ var _services_painel_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/painel-resolver.service */ "./src/app/portal/services/painel-resolver.service.ts");
/* harmony import */ var _portal_portal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portal/portal.component */ "./src/app/portal/portal/portal.component.ts");
/* harmony import */ var _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./print-layout/print-layout.component */ "./src/app/portal/print-layout/print-layout.component.ts");
/* harmony import */ var _print_painel_print_painel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./print-painel/print-painel.component */ "./src/app/portal/print-painel/print-painel.component.ts");









const routes = [
    { path: 'print',
        outlet: 'print',
        component: _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_5__["PrintLayoutComponent"],
        children: [
            {
                path: 'paineis/:painelId',
                component: _print_painel_print_painel_component__WEBPACK_IMPORTED_MODULE_6__["PrintPainelComponent"],
                resolve: {
                    painel: _services_painel_resolver_service__WEBPACK_IMPORTED_MODULE_3__["PainelResolverService"]
                }
            }
        ]
    },
    {
        path: 'paineis',
        children: [
            {
                path: '',
                component: _portal_portal_component__WEBPACK_IMPORTED_MODULE_4__["PortalComponent"],
            },
            {
                path: ':painelId',
                component: _painel_painel_component__WEBPACK_IMPORTED_MODULE_2__["PainelComponent"],
                resolve: {
                    painel: _services_painel_resolver_service__WEBPACK_IMPORTED_MODULE_3__["PainelResolverService"]
                }
            },
        ]
    },
    {
        path: '',
        redirectTo: 'paineis',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'paineis',
    }
];
class PortalRoutingModule {
}
PortalRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PortalRoutingModule });
PortalRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PortalRoutingModule_Factory(t) { return new (t || PortalRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/portal/portal.module.ts":
/*!*****************************************!*\
  !*** ./src/app/portal/portal.module.ts ***!
  \*****************************************/
/*! exports provided: PortalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalModule", function() { return PortalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _portal_portal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portal/portal.component */ "./src/app/portal/portal/portal.component.ts");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./painel/painel.component */ "./src/app/portal/painel/painel.component.ts");
/* harmony import */ var _shared_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/grafico/grafico.component */ "./src/app/portal/shared/grafico/grafico.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var _portal_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./portal-routing.module */ "./src/app/portal/portal-routing.module.ts");
/* harmony import */ var _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./print-layout/print-layout.component */ "./src/app/portal/print-layout/print-layout.component.ts");
/* harmony import */ var _print_painel_print_painel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./print-painel/print-painel.component */ "./src/app/portal/print-painel/print-painel.component.ts");
/* harmony import */ var _print_grafico_print_grafico_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./print-grafico/print-grafico.component */ "./src/app/portal/print-grafico/print-grafico.component.ts");
/* harmony import */ var _shared_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/mapa/mapa.component */ "./src/app/portal/shared/mapa/mapa.component.ts");
/* harmony import */ var _print_mapa_print_mapa_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./print-mapa/print-mapa.component */ "./src/app/portal/print-mapa/print-mapa.component.ts");
/* harmony import */ var _acessibilidade_dialog_acessibilidade_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./acessibilidade-dialog/acessibilidade-dialog.component */ "./src/app/portal/acessibilidade-dialog/acessibilidade-dialog.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");































class PortalModule {
}
PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PortalModule });
PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PortalModule_Factory(t) { return new (t || PortalModule)(); }, providers: [
    // {provide: ErrorHandler, useClass: ErrorHandlerPortal}
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_20__["SweetAlert2Module"],
            _portal_routing_module__WEBPACK_IMPORTED_MODULE_21__["PortalRoutingModule"],
            // MatSnackBarModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["A11yModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, { declarations: [_portal_portal_component__WEBPACK_IMPORTED_MODULE_2__["PortalComponent"],
        _painel_painel_component__WEBPACK_IMPORTED_MODULE_3__["PainelComponent"],
        _shared_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_4__["GraficoComponent"],
        _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_22__["PrintLayoutComponent"],
        _print_painel_print_painel_component__WEBPACK_IMPORTED_MODULE_23__["PrintPainelComponent"],
        _print_grafico_print_grafico_component__WEBPACK_IMPORTED_MODULE_24__["PrintGraficoComponent"],
        _shared_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_25__["MapaComponent"],
        _print_mapa_print_mapa_component__WEBPACK_IMPORTED_MODULE_26__["PrintMapaComponent"],
        _acessibilidade_dialog_acessibilidade_dialog_component__WEBPACK_IMPORTED_MODULE_27__["AcessibilidadeDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
        _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_20__["SweetAlert2Module"],
        _portal_routing_module__WEBPACK_IMPORTED_MODULE_21__["PortalRoutingModule"],
        // MatSnackBarModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["A11yModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _portal_portal_component__WEBPACK_IMPORTED_MODULE_2__["PortalComponent"],
                    _painel_painel_component__WEBPACK_IMPORTED_MODULE_3__["PainelComponent"],
                    _shared_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_4__["GraficoComponent"],
                    _print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_22__["PrintLayoutComponent"],
                    _print_painel_print_painel_component__WEBPACK_IMPORTED_MODULE_23__["PrintPainelComponent"],
                    _print_grafico_print_grafico_component__WEBPACK_IMPORTED_MODULE_24__["PrintGraficoComponent"],
                    _shared_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_25__["MapaComponent"],
                    _print_mapa_print_mapa_component__WEBPACK_IMPORTED_MODULE_26__["PrintMapaComponent"],
                    _acessibilidade_dialog_acessibilidade_dialog_component__WEBPACK_IMPORTED_MODULE_27__["AcessibilidadeDialogComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
                    _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_20__["SweetAlert2Module"],
                    _portal_routing_module__WEBPACK_IMPORTED_MODULE_21__["PortalRoutingModule"],
                    // MatSnackBarModule,
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__["A11yModule"]
                ],
                providers: [
                // {provide: ErrorHandler, useClass: ErrorHandlerPortal}
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/portal/portal/portal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/portal/portal/portal.component.ts ***!
  \***************************************************/
/*! exports provided: PortalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalComponent", function() { return PortalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_painel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/painel.service */ "./src/app/portal/services/painel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _grafana_dashs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../grafana-dashs.service */ "./src/app/grafana-dashs.service.ts");
/* harmony import */ var _dash_description_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dash-description.service */ "./src/app/dash-description.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");


















const _c0 = function (a0) { return [a0]; };
function PortalComponent_div_18_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function PortalComponent_div_18_mat_card_1_Template_mat_card_keypress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.irPainel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const painel_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", painel_r20.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](27, _c0, painel_r20.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", painel_r20.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](5, 11, painel_r20.titulo, 0, 45), "", painel_r20.titulo.length > 45 ? "..." : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](12, 15, painel_r20.tema, 0, 60), " ", painel_r20.tema.length > 60 ? "..." : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](16, 19, painel_r20.descricao, 0, 400), " ", painel_r20.descricao.length > 400 ? "..." : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Publicado por ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](20, 23, painel_r20.autor, 0, 50), " ", painel_r20.autor.length > 50 ? "..." : "", "");
} }
const _c1 = function (a0) { return { "mobile": a0 }; };
function PortalComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PortalComponent_div_18_mat_card_1_Template, 21, 29, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r17.acessoMobile));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r17.paineisDataSource.filteredData);
} }
function PortalComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Nenhum resultado foi encontrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PortalComponent {
    constructor(location, painelService, scroll, router, GrafanaDashs, DetailsGrafana, ref, responsive) {
        this.location = location;
        this.painelService = painelService;
        this.scroll = scroll;
        this.router = router;
        this.GrafanaDashs = GrafanaDashs;
        this.DetailsGrafana = DetailsGrafana;
        this.ref = ref;
        this.responsive = responsive;
        this.numberOfTicks = 0;
        this.acessoMobile = true;
        this.divsArray = document.getElementsByTagName('div');
        this.psArray = document.getElementsByTagName('p');
        this.hsArray = document.getElementsByTagName('h1');
        this.asArray = document.getElementsByTagName('a');
        this.ulsArray = document.getElementsByTagName('ul');
        this.h2sArray = document.getElementsByTagName('h2');
        this.paineisDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.classe = 'big';
        this.multipleDetails = [];
        this.toRenderData = [];
        this.GrafanaDashs.getData().subscribe(data => {
            this.dataGrafana = data;
            if (data) {
                for (let i = 0; i < this.dataGrafana.length; i++) {
                    if (data[i] != undefined) {
                        this.DetailsGrafana.getDescription(this.dataGrafana[i].uid).subscribe(data2 => {
                            //if (data2.meta.isFolder != true){
                            this.multipleDetails.push(data2);
                            //}
                            //this.multipleDetails.push(data2)
                        });
                        //this.multipleDetails.push(row)
                        console.log(this.multipleDetails);
                    }
                }
            }
        });
        setInterval(() => {
            this.numberOfTicks++;
            this.ref.markForCheck();
        }, 3000);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.responsive.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].HandsetPortrait).subscribe(result => {
                this.acessoMobile = false;
                if (result.matches) {
                    this.acessoMobile = true;
                    console.log(this.acessoMobile);
                }
            });
            var bench = document.getElementById('bench');
            if (bench.style.backgroundColor === 'black') {
                for (let div of this.divsArray) {
                    if (div.className != 'donotchange' &&
                        div.className != 'content' &&
                        div.className != 'mat-card-header-text' &&
                        div.className != 'descricao' &&
                        div.className != 'autor' &&
                        div.className != 'tema' &&
                        div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
                        div.className != 'content' &&
                        div.className != 'mat-form-field-flex ng-tns-c49-0' &&
                        div.className != 'big pesquisa' &&
                        div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
                        div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
                        div.className != 'mat-form-field-infix ng-tns-c49-0' &&
                        div.className != 'sem-resposta' &&
                        div.className != 'lista-paineis' &&
                        div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
                        div.className != 'mat-form-field-infix ng-tns-c107-0' &&
                        div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
                        div.className != 'mat-form-field-flex ng-tns-c107-0' &&
                        div.className != 'mat-form-field-flex ng-tns-c107-4' &&
                        div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
                        div.className != 'ng-tns-c107-1' &&
                        div.className != 'mat-form-field-flex ng-tns-c107-2' &&
                        div.className != 'big pesquisa') {
                        div.style.backgroundColor = 'black';
                        div.style.color = 'white';
                    }
                    if (div.className === 'big pesquisa' ||
                        div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
                        div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
                        div.className === 'mat-form-field-infix ng-tns-c49-0') {
                        div.style.backgroundColor = 'white';
                        div.style.color = 'black';
                    }
                    if (div.className === "footer-basic") {
                        div.style.backgroundColor = 'white';
                    }
                    if (div.className === 'img') {
                        div.style.backgroundColor = 'white';
                        div.style.border = '2px solid #000';
                    }
                }
                for (let p of this.psArray) {
                    if (p.className != 'donotchange') {
                        p.style.backgroundColor = 'black';
                        p.style.color = 'white';
                        p.style.boxShadow = '0 0 0 2px #000';
                        p.style.border = '2px solid #ffeb3b';
                    }
                }
                for (let h of this.hsArray) {
                    if (h.className != 'donotchange') {
                        h.style.backgroundColor = 'black';
                        h.style.color = 'white';
                        h.style.boxShadow = '0 0 0 2px #000';
                        h.style.border = '2px solid #ffeb3b';
                    }
                }
                for (let h2 of this.h2sArray) {
                    if (h2.className != 'donotchange') {
                        h2.style.backgroundColor = 'black';
                        h2.style.color = 'white';
                        h2.style.boxShadow = '0 0 0 2px #000';
                        h2.style.border = '2px solid #ffeb3b';
                    }
                }
                // for (let a of this.asArray){
                //   if (a.className != 'donotchange' && 
                //   a.className != 'hover' && 
                //   a.className != 'hover2'){
                //     a.style.backgroundColor = 'black';
                //     a.style.color = 'white';
                //     a.style.boxShadow = '0 0 0 2px #000';
                //     a.style.border = '2px solid #ffeb3b'
                //     if(a.className === 'fontsize') {
                //       a.classList.remove('fontsize');
                //       a.classList.add('fontsize2');
                //       a.style.boxShadow = '0 0 0 2px #000';
                //       a.style.border = '2px solid #ffeb3b'
                //     }     
                //   } else if (a.className === 'hover2'){
                //     a.classList.remove('hover2');
                //     a.classList.add('hover3');
                //     a.style.boxShadow = '0 0 0 2px #000';
                //     a.style.border = '2px solid #ffeb3b'
                //   } else if (a.className === 'hover') {
                //     a.style.boxShadow = '0 0 0 2px #000';
                //     a.style.border = '2px solid #ffeb3b'
                //   }
                // }
                for (let ul of this.ulsArray) {
                    if (ul.id === 'atalhos') {
                        ul.style.backgroundColor = 'black';
                    }
                }
            }
            this.paineis = (yield this.painelService.getPaineis().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).toPromise());
            this.paineisDataSource.data = this.paineis;
            // this.paineisDataSource.filterPredicate = (data: IPainel, filter: string) => {
            //   return data.titulo == filter || data.tema == filter;
            // }
            this.paineisDataSource.filterPredicate = (d, filter) => {
                const textToSearchTi = d['titulo'] && d['titulo'].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() || '';
                const textToSearchTe = d['tema'] && d['tema'].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() || '';
                return textToSearchTi.indexOf(filter) !== -1 || textToSearchTe.indexOf(filter) !== -1;
            };
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.paineisDataSource.filter = filterValue.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        if (filterValue !== '') {
            this.classe = 'small';
        }
        else {
            this.classe = 'big';
        }
    }
    voltarNavegacao() {
        this.location.back();
    }
    //loadDescription(){
    //  if (this.dataGrafana){
    //    for (let i = 0; i < this.dataGrafana.length; i++){
    //      if (this.dataGrafana[i] != undefined){
    //        var row = []
    //        row.push(this.dataGrafana[i].title)
    //        row.push(this.dataGrafana[i].url)
    //        row.push(this.dataGrafana[i].uid)
    //        this.DetailsGrafana.getDescription(this.dataGrafana[i].uid).subscribe(data=>{
    //          row.push(data)
    //        })    
    //        console.log("ROW", row)
    //        this.multipleDetails.push(row)
    //        row = []
    //      }
    //    }
    //    //console.log(this.multipleDetails)
    //  }
    //}
    irPainel(e) {
        document.getElementById(document.activeElement.id).click();
    }
    onKeyDown(e) {
        let map = {};
        map[e.keyCode] = e.type == 'keydown';
        if ((e.altKey && map[49]) || (e.altKey && map[49] && e.shiftKey) || (e.shiftKey && map[49] && map[27])) {
            document.getElementById("irConteudo").click();
        }
        else if ((e.altKey && map[50]) || (e.altKey && map[50] && e.shiftKey) || (e.shiftKey && map[50] && map[27])) {
            document.getElementById("irMenu").click();
        }
        else if ((e.altKey && map[51]) || (e.altKey && map[51] && e.shiftKey) || (e.shiftKey && map[51] && map[27])) {
            document.getElementById("irBusca").click();
        }
        else if ((e.altKey && map[52]) || (e.altKey && map[52] && e.shiftKey) || (e.shiftKey && map[52] && map[27])) {
            document.getElementById("irContraste").click();
        }
        else if ((e.altKey && map[53]) || (e.altKey && map[53] && e.shiftKey) || (e.shiftKey && map[53] && map[27])) {
            document.getElementById("irAcessibilidade").click();
        }
        else if ((e.altKey && map[54]) || (e.altKey && map[54] && e.shiftKey) || (e.shiftKey && map[54] && map[27])) {
            this.scroll.scrollToPosition([0, document.body.scrollHeight]);
        }
    }
}
PortalComponent.ɵfac = function PortalComponent_Factory(t) { return new (t || PortalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_painel_service__WEBPACK_IMPORTED_MODULE_7__["PainelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_grafana_dashs_service__WEBPACK_IMPORTED_MODULE_9__["GrafanaDashsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dash_description_service__WEBPACK_IMPORTED_MODULE_10__["DashDescriptionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"])); };
PortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortalComponent, selectors: [["app-portal"]], hostBindings: function PortalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function PortalComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 20, vars: 17, consts: [["id", "general-container", 1, "container"], ["id", "titulo", "role", "tablist", 3, "ngClass"], ["tabindex", "0", "role", "tab", 3, "ngClass"], ["role", "tablist"], ["tabindex", "0", "id", "introducao", "role", "tab", 3, "ngClass"], [1, "lista-paineis"], ["id", "matform", 1, "form-field", 3, "ngClass"], ["matPrefix", ""], ["alt", "Pesquisar"], ["type", "text", "matInput", "", "id", "filtro", "placeholder", "Ex: Deficientes auditivos", 3, "keyup"], ["column", "", 1, "lista-paineis-content"], ["class", "grid-list", "id", "conteudo", "isFocusable", "", 3, "ngClass", 4, "ngIf"], ["class", "sem-resposta", 4, "ngIf"], ["id", "conteudo", "isFocusable", "", 1, "grid-list", 3, "ngClass"], ["cdkMonitorSubtreeFocus", "", "class", "painel-card", 3, "id", "routerLink", "keypress", 4, "ngFor", "ngForOf"], ["cdkMonitorSubtreeFocus", "", 1, "painel-card", 3, "id", "routerLink", "keypress"], [1, "header"], ["aria-hidden", "false"], ["alt", "painel"], [1, "content"], [1, "tema"], [1, "descricao"], [1, "autor"], [1, "sem-resposta"], [1, "img"], ["src", "assets/notfound.png"]], template: function PortalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Pain\u00E9is");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Os pain\u00E9is s\u00E3o an\u00E1lises de dados e indicadores que o Observat\u00F3rio elabora atrav\u00E9s de cruzamentos de informa\u00E7\u00F5es qualitativas e quantitativas compartilhadas com a Secretaria Municipal da Pessoa com Defici\u00EAncia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Pesquise por um painel ou por um tema");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function PortalComponent_Template_input_keyup_16_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PortalComponent_div_18_Template, 2, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PortalComponent_div_19_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c1, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("pesquisa ", ctx.classe, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c1, ctx.acessoMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paineisDataSource.filteredData.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paineisDataSource.filteredData.length == 0 && ctx.dataGrafana.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatPrefix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["CdkMonitorFocus"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardTitle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex: 1 1 auto;\n  height: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%] {\n  max-height: calc(100% - 32px);\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 5px 0 0 0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 320px;\n  width: 320px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .pesquisa[_ngcontent-%COMP%] {\n  transition: width 1.5s ease, font-size 1.5s ease, padding 1.5s ease;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .pesquisa[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  transition: width 1.5s ease;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 20px 0 5px 0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  width: 660px;\n  font-size: 20px;\n  margin: 0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  color: #333333;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #333333;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]   .form-field.mobile[_ngcontent-%COMP%] {\n  width: 300px;\n  font-size: 15px;\n  margin: 0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]   .form-field.mobile[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  color: #333333;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]   .form-field.mobile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #333333;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  width: 485px;\n  margin: 0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #8a8a8a;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card[_ngcontent-%COMP%] {\n  width: 530px;\n  height: 200px;\n  margin: 16px;\n  box-shadow: 0px 1px 5px -1px black;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: #333333;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  height: 170px;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .autor[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  color: #333333;\n  font-weight: 400;\n  font-size: 16px;\n  overflow: break-word;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #333333;\n  overflow: break-word;\n  line-height: 20px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tema[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #333333;\n  overflow: break-word;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 2px #1c2e8a;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card.mobile[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 130px;\n  margin: 16px;\n  box-shadow: 0px 1px 5px -1px black;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card.mobile[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: #333333;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card.mobile[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  height: 100px;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card.mobile[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card.mobile[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .autor[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  color: #333333;\n  font-weight: 400;\n  font-size: 16px;\n  overflow: break-word;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card.mobile[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #333333;\n  overflow: break-word;\n  line-height: 20px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   .painel-card.mobile[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tema[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #333333;\n  overflow: break-word;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .lista-paineis[_ngcontent-%COMP%]   .lista-paineis-content[_ngcontent-%COMP%]   .grid-list[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 2px #1c2e8a;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .sem-resposta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  color: #333333;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .sem-resposta[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  -webkit-filter: opacity(0.5);\n          filter: opacity(0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9tb2JpbGUtYWNlc3NpdmVsL3Rlc3RlLWNvbnRhZG9yL3NyYy9hcHAvcG9ydGFsL3BvcnRhbC9wb3J0YWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvcnRhbC9wb3J0YWwvcG9ydGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQ0k7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NOO0FEQ007RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQ1E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNDVjtBREdNO0VBQ0UsbUVBQUE7QUNEUjtBREdRO0VBQ0UsMkJBQUE7QUNEVjtBREtNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNIUjtBREtRO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDSFY7QURLVTtFQUNFLGNBQUE7QUNIWjtBRE9ZO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNMZDtBRFVRO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDUlY7QURVVTtFQUNFLGNBQUE7QUNSWjtBRFlZO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNWZDtBRGdCTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUNkUjtBRGdCUTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FDZFY7QURpQlk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ2ZkO0FEcUJNO0VBQ0UseUJBQUE7QUNuQlI7QURxQlE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDbkJWO0FEcUJVO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FDbkJaO0FEcUJZO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ25CZDtBRHNCWTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDcEJkO0FEc0JjO0VBQ0UsaUJBQUE7QUNwQmhCO0FEdUJjO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNyQmhCO0FEd0JjO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUN0QmhCO0FEeUJjO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUN2QmhCO0FENEJVO0VBQ0UsNkJBQUE7QUMxQlo7QUQ2QlU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUMzQlo7QUQ2Qlk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDM0JkO0FEOEJZO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUM1QmQ7QUQ4QmM7RUFDRSxpQkFBQTtBQzVCaEI7QUQrQmM7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQzdCaEI7QURnQ2M7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQzlCaEI7QURpQ2M7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQy9CaEI7QURvQ1U7RUFDRSw2QkFBQTtBQ2xDWjtBRHlDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ3ZDTjtBRHlDUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQ3ZDViIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9wb3J0YWwvcG9ydGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMSAxIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxIDEgYXV0bzsgICAgXG5cbiAgICAubGlzdGEtcGFpbmVpcyB7XG4gICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgXG4gICAgICAubG9nby1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNXB4IDAgMCAwO1xuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDMyMHB4O1xuICAgICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wZXNxdWlzYSB7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDEuNXMgZWFzZSwgZm9udC1zaXplIDEuNXMgZWFzZSwgcGFkZGluZyAxLjVzIGVhc2U7XG5cbiAgICAgICAgLmZvcm0tZmllbGQge1xuICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDEuNXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYmlnIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMCA1cHggMDtcblxuICAgICAgICAuZm9ybS1maWVsZCB7XG4gICAgICAgICAgd2lkdGg6IDY2MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICBtYXQtbGFiZWx7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1maWVsZC5tb2JpbGUge1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgbWF0LWxhYmVse1xuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zbWFsbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIC5mb3JtLWZpZWxkIHtcbiAgICAgICAgICB3aWR0aDogNDg1cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgY29sb3I6ICM4YThhOGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5saXN0YS1wYWluZWlzLWNvbnRlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXG4gICAgICAgIC5ncmlkLWxpc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgLnBhaW5lbC1jYXJkIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAtMXB4IGJsYWNrO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAgIC50aXR1bG8ge1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmF1dG9yIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuZGVzY3JpY2FvIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC50ZW1hIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdC1jYXJkOmZvY3VzLCBtYXQtY2FyZDpob3ZlcntcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjMWMyZThhO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYWluZWwtY2FyZC5tb2JpbGUge1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IC0xcHggYmxhY2s7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAgICAgLnRpdHVsbyB7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuYXV0b3Ige1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5kZXNjcmljYW8ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnRlbWEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0LWNhcmQ6Zm9jdXMsIG1hdC1jYXJkOmhvdmVye1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICMxYzJlOGE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnNlbS1yZXNwb3N0YSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIC5pbWcge1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMSAxIGF1dG87XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMCAwIDA7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5sb2dvLWNvbnRhaW5lciAubG9nbyB7XG4gIGhlaWdodDogMzIwcHg7XG4gIHdpZHRoOiAzMjBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLnBlc3F1aXNhIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMS41cyBlYXNlLCBmb250LXNpemUgMS41cyBlYXNlLCBwYWRkaW5nIDEuNXMgZWFzZTtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLnBlc3F1aXNhIC5mb3JtLWZpZWxkIHtcbiAgdHJhbnNpdGlvbjogd2lkdGggMS41cyBlYXNlO1xufVxuOmhvc3QgLmNvbnRhaW5lciAubGlzdGEtcGFpbmVpcyAuYmlnIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMCA1cHggMDtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLmJpZyAuZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA2NjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5iaWcgLmZvcm0tZmllbGQgbWF0LWxhYmVsIHtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5iaWcgLmZvcm0tZmllbGQgc3BhbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5iaWcgLmZvcm0tZmllbGQubW9iaWxlIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLmJpZyAuZm9ybS1maWVsZC5tb2JpbGUgbWF0LWxhYmVsIHtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5iaWcgLmZvcm0tZmllbGQubW9iaWxlIHNwYW4gbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuOmhvc3QgLmNvbnRhaW5lciAubGlzdGEtcGFpbmVpcyAuc21hbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLnNtYWxsIC5mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDQ4NXB4O1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5zbWFsbCAuZm9ybS1maWVsZCBzcGFuIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzhhOGE4YTtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLmxpc3RhLXBhaW5laXMtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5saXN0YS1wYWluZWlzLWNvbnRlbnQgLmdyaWQtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5saXN0YS1wYWluZWlzLWNvbnRlbnQgLmdyaWQtbGlzdCAucGFpbmVsLWNhcmQge1xuICB3aWR0aDogNTMwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogMTZweDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggLTFweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLmNvbnRhaW5lciAubGlzdGEtcGFpbmVpcyAubGlzdGEtcGFpbmVpcy1jb250ZW50IC5ncmlkLWxpc3QgLnBhaW5lbC1jYXJkIC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuOmhvc3QgLmNvbnRhaW5lciAubGlzdGEtcGFpbmVpcyAubGlzdGEtcGFpbmVpcy1jb250ZW50IC5ncmlkLWxpc3QgLnBhaW5lbC1jYXJkIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGhlaWdodDogMTcwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLmxpc3RhLXBhaW5laXMtY29udGVudCAuZ3JpZC1saXN0IC5wYWluZWwtY2FyZCAuY29udGVudCAudGl0dWxvIHtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5saXN0YS1wYWluZWlzLWNvbnRlbnQgLmdyaWQtbGlzdCAucGFpbmVsLWNhcmQgLmNvbnRlbnQgLmF1dG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3ZlcmZsb3c6IGJyZWFrLXdvcmQ7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuOmhvc3QgLmNvbnRhaW5lciAubGlzdGEtcGFpbmVpcyAubGlzdGEtcGFpbmVpcy1jb250ZW50IC5ncmlkLWxpc3QgLnBhaW5lbC1jYXJkIC5jb250ZW50IC5kZXNjcmljYW8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBvdmVyZmxvdzogYnJlYWstd29yZDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5saXN0YS1wYWluZWlzLWNvbnRlbnQgLmdyaWQtbGlzdCAucGFpbmVsLWNhcmQgLmNvbnRlbnQgLnRlbWEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBvdmVyZmxvdzogYnJlYWstd29yZDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5saXN0YS1wYWluZWlzLWNvbnRlbnQgLmdyaWQtbGlzdCBtYXQtY2FyZDpmb2N1cywgOmhvc3QgLmNvbnRhaW5lciAubGlzdGEtcGFpbmVpcyAubGlzdGEtcGFpbmVpcy1jb250ZW50IC5ncmlkLWxpc3QgbWF0LWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggIzFjMmU4YTtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLmxpc3RhLXBhaW5laXMtY29udGVudCAuZ3JpZC1saXN0IC5wYWluZWwtY2FyZC5tb2JpbGUge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIG1hcmdpbjogMTZweDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggLTFweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLmNvbnRhaW5lciAubGlzdGEtcGFpbmVpcyAubGlzdGEtcGFpbmVpcy1jb250ZW50IC5ncmlkLWxpc3QgLnBhaW5lbC1jYXJkLm1vYmlsZSAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogIzMzMzMzMztcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLmxpc3RhLXBhaW5laXMtY29udGVudCAuZ3JpZC1saXN0IC5wYWluZWwtY2FyZC5tb2JpbGUgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuOmhvc3QgLmNvbnRhaW5lciAubGlzdGEtcGFpbmVpcyAubGlzdGEtcGFpbmVpcy1jb250ZW50IC5ncmlkLWxpc3QgLnBhaW5lbC1jYXJkLm1vYmlsZSAuY29udGVudCAudGl0dWxvIHtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5saXN0YS1wYWluZWlzLWNvbnRlbnQgLmdyaWQtbGlzdCAucGFpbmVsLWNhcmQubW9iaWxlIC5jb250ZW50IC5hdXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG92ZXJmbG93OiBicmVhay13b3JkO1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLmxpc3RhLXBhaW5laXMtY29udGVudCAuZ3JpZC1saXN0IC5wYWluZWwtY2FyZC5tb2JpbGUgLmNvbnRlbnQgLmRlc2NyaWNhbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG92ZXJmbG93OiBicmVhay13b3JkO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbjpob3N0IC5jb250YWluZXIgLmxpc3RhLXBhaW5laXMgLmxpc3RhLXBhaW5laXMtY29udGVudCAuZ3JpZC1saXN0IC5wYWluZWwtY2FyZC5tb2JpbGUgLmNvbnRlbnQgLnRlbWEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBvdmVyZmxvdzogYnJlYWstd29yZDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG46aG9zdCAuY29udGFpbmVyIC5saXN0YS1wYWluZWlzIC5saXN0YS1wYWluZWlzLWNvbnRlbnQgLmdyaWQtbGlzdCBtYXQtY2FyZDpmb2N1cywgOmhvc3QgLmNvbnRhaW5lciAubGlzdGEtcGFpbmVpcyAubGlzdGEtcGFpbmVpcy1jb250ZW50IC5ncmlkLWxpc3QgbWF0LWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggIzFjMmU4YTtcbn1cbjpob3N0IC5jb250YWluZXIgLnNlbS1yZXNwb3N0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuOmhvc3QgLmNvbnRhaW5lciAuc2VtLXJlc3Bvc3RhIC5pbWcgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZmlsdGVyOiBvcGFjaXR5KDAuNSk7XG59Il19 */", ".container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#titulo[_ngcontent-%COMP%] {\n  margin-left: 25%;\n  margin-right: 25%;\n  text-align: center;\n}\n\n#titulo.mobile[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: 0;\n  margin-bottom: 0px;\n  margin-right: 0;\n  text-align: center;\n}\n\nh2[_ngcontent-%COMP%]{\n  font-size: 38px;\n  color: #1C2E8A;\n  font-weight: bolder;\n  margin-top: 54px;\n  margin-bottom: 54px;\n  width: 100%;\n  line-height: 46px;\n}\n\nh3.mobile[_ngcontent-%COMP%]{\n  font-size: 25px;\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n\nh3[_ngcontent-%COMP%]{\n  font-weight: bold;\n}\n\n.mat-input-element[_ngcontent-%COMP%] {\n  color: #333333;\n  background: #FFFFFF;\n  caret-color: #333333;\n  width: 50%;\n}\n\n#introducao[_ngcontent-%COMP%] {\n  margin-left: 25%;\n  margin-right: 25%;\n  margin-top: 30px;\n  margin-bottom: 60px;\n  text-align: justify;\n  font-size: 24px;\n  color: #333333;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  line-height: 28px;\n  font-weight: 500;\n}\n\n#introducao.mobile[_ngcontent-%COMP%]{\n  margin-top: 30px;\n  margin-bottom: 0px;\n  margin-left: 5%;\n  margin-right: 5%;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGFsL3BvcnRhbC9wb3J0YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLHdJQUF3STtFQUN4SSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wb3J0YWwvcG9ydGFsL3BvcnRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3RpdHVsbyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi1yaWdodDogMjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0aXR1bG8ubW9iaWxlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgye1xuICBmb250LXNpemU6IDM4cHg7XG4gIGNvbG9yOiAjMUMyRThBO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXJnaW4tdG9wOiA1NHB4O1xuICBtYXJnaW4tYm90dG9tOiA1NHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG59XG5cbmgzLm1vYmlsZXtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaDN7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0LWlucHV0LWVsZW1lbnQge1xuICBjb2xvcjogIzMzMzMzMztcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgY2FyZXQtY29sb3I6ICMzMzMzMzM7XG4gIHdpZHRoOiA1MCU7XG59XG5cbiNpbnRyb2R1Y2FvIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jaW50cm9kdWNhby5tb2JpbGV7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PortalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-portal',
                template: `Number of ticks: {{numberOfTicks}}`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './portal.component.html',
                styleUrls: ['./portal.component.scss', './portal.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }, { type: _services_painel_service__WEBPACK_IMPORTED_MODULE_7__["PainelService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["ViewportScroller"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _grafana_dashs_service__WEBPACK_IMPORTED_MODULE_9__["GrafanaDashsService"] }, { type: _dash_description_service__WEBPACK_IMPORTED_MODULE_10__["DashDescriptionService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] }]; }, { onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/print-grafico/print-grafico.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/portal/print-grafico/print-grafico.component.ts ***!
  \*****************************************************************/
/*! exports provided: PrintGraficoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintGraficoComponent", function() { return PrintGraficoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! c3 */ "./node_modules/c3/c3.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_indicador_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/indicador.model */ "./src/app/portal/models/indicador.model.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function PrintGraficoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r43.descricao, " ");
} }
class PrintGraficoComponent {
    constructor() {
        this.xCategoria = true;
        this.categoriaArray = ['x'];
        this.dataSetHolder = [];
        this.informacao = false;
    }
    ngOnInit() {
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
    }
    separaDados(data, id, pacote) {
        const x = [id + '_x'];
        const y = [id];
        data.forEach(item => {
            x.push(item.nome);
            y.push(item.valor);
        });
        pacote.eixo_x = x;
        pacote.eixo_y = y;
        return pacote;
    }
    loadData(pacote) {
        if (this.xCategoria === true) {
            const arrayToAdd = pacote.eixo_x.slice(1);
            this.categoriaArray.push(...arrayToAdd);
            this.chart.load({
                columns: [
                    this.categoriaArray,
                    pacote.eixo_y
                ]
            });
        }
        else {
            const x = '' + pacote.eixo_x[0];
            const y = '' + pacote.eixo_y[0];
            const xsc = {};
            xsc[y] = x;
            this.chart.load({
                xs: xsc,
                columns: [
                    pacote.eixo_x,
                    pacote.eixo_y
                ]
            });
        }
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const config = {
                bindto: '#chart-' + this.id,
                data: {
                    columns: [],
                    xFormat: '%H:%M:%S',
                    type: this.tipo
                },
                padding: {
                    right: 20,
                    bottom: 20,
                },
                point: {
                    show: false
                },
                transition: {
                    duration: 500
                }
            };
            if (this.xCategoria === true) {
                config.data.x = 'x';
                config.axis = {
                    x: {
                        type: 'category'
                    }
                };
            }
            else {
                config.data.xs = {};
            }
            switch (this.tipo) {
                case _models_indicador_model__WEBPACK_IMPORTED_MODULE_4__["TipoIndicador"].BARRAS:
                    config.legend = {
                        show: false
                    };
                    break;
                default:
                    break;
            }
            this.chart = c3__WEBPACK_IMPORTED_MODULE_3__["generate"](config);
            this.chart.resize();
            this.dataSet$.subscribe(data => {
                data.forEach(array => {
                    const dataNoId = Object.assign([], array);
                    const id = array[0];
                    dataNoId.shift();
                    let pacote = { eixo_x: [], eixo_y: [] };
                    if (this.dataSetHolder.length === 0) {
                        pacote = this.separaDados(dataNoId, id, pacote);
                        this.loadData(pacote);
                    }
                    else {
                        this.dataSetHolder.forEach(arrayHolder => {
                            if (id === arrayHolder[0]) {
                                const length = Object.keys(arrayHolder).length;
                                if (array.length > length) {
                                    pacote = this.separaDados(dataNoId, id, pacote);
                                    this.loadData(pacote);
                                }
                            }
                        });
                    }
                });
                this.dataSetHolder = [];
                data.forEach(dataItem => this.dataSetHolder.push(Object.assign({}, dataItem)));
            });
            this.resizeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).subscribe(() => this.chart.resize());
        });
    }
    abrirInfo() {
        this.informacao = !this.informacao;
    }
    onKeyPressInfo(e) {
        if (e.keyCode == 13) {
            this.abrirInfo();
        }
    }
    ngOnDestroy() {
        this.resizeSubscription.unsubscribe();
    }
}
PrintGraficoComponent.ɵfac = function PrintGraficoComponent_Factory(t) { return new (t || PrintGraficoComponent)(); };
PrintGraficoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PrintGraficoComponent, selectors: [["app-print-grafico"]], inputs: { dataSet$: "dataSet$", tipo: "tipo", titulo: "titulo", descricao: "descricao" }, decls: 11, vars: 4, consts: [[1, "card"], [1, "card-top-action"], ["mat-icon-button", "", "matTooltipPosition", "above", "matTooltipClass", "tooltip", 2, "border", "none", "background-color", "white", "cursor", "pointer", 3, "matTooltip", "keypress"], [3, "click", "keypress"], ["class", "informacao", 4, "ngIf"], [1, "content"], [3, "id"], [1, "informacao"]], template: function PrintGraficoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function PrintGraficoComponent_Template_button_keypress_5_listener($event) { return ctx.onKeyPressInfo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrintGraficoComponent_Template_mat_icon_click_6_listener() { return ctx.abrirInfo(); })("keypress", function PrintGraficoComponent_Template_mat_icon_keypress_6_listener($event) { return ctx.onKeyPressInfo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PrintGraficoComponent_div_8_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", ctx.descricao);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.informacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "chart-", ctx.id, "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 270mm;\n  max-width: 270mm;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 260mm;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%] {\n  padding-left: 2%;\n  margin-bottom: 2%;\n  color: var(--color-terciary-text);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 250mm;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .c3[_ngcontent-%COMP%] {\n  width: 250mm;\n  max-width: 250mm;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .c3[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 250mm;\n  max-width: 250mm;\n}\n[_ngcontent-%COMP%]:ng-deep   .c3-lines[_ngcontent-%COMP%] {\n  stroke-width: 50px;\n}\n  .c3-ygrid-line line {\n  stroke: #585858;\n}\n  .c3-xgrid-line line {\n  stroke: red;\n}\n  .c3-xgrid-line text {\n  fill: #020202;\n  font-size: 12px;\n  font-weight: bold;\n}\n  .c3-ygrid-line text {\n  fill: #020202;\n  font-size: 12px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9tb2JpbGUtYWNlc3NpdmVsL3Rlc3RlLWNvbnRhZG9yL3NyYy9hcHAvcG9ydGFsL3ByaW50LWdyYWZpY28vcHJpbnQtZ3JhZmljby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9ydGFsL3ByaW50LWdyYWZpY28vcHJpbnQtZ3JhZmljby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7QUNDUjtBRENRO0VBQ0ksY0FBQTtBQ0NaO0FEQ1k7RUFDSSxhQUFBO0FDQ2hCO0FER1E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUNEWjtBRElRO0VBQ0ksWUFBQTtBQ0ZaO0FESWdCO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDRnBCO0FESWdCO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDRnBCO0FEU0E7RUFDSSxrQkFBQTtBQ05KO0FEU0E7RUFDSSxlQUFBO0FDTko7QURTQTtFQUNJLFdBQUE7QUNOSjtBRFNBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ05KO0FEU0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wb3J0YWwvcHJpbnQtZ3JhZmljby9wcmludC1ncmFmaWNvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjcwbW07XG4gICAgbWF4LXdpZHRoOiAyNzBtbTtcbiAgXG4gICAgLmNhcmQge1xuICAgICAgICB3aWR0aDogMjYwbW07XG4gIFxuICAgICAgICBtYXQtY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmZvcm1hY2Fve1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRlcmNpYXJ5LXRleHQpO1xuICAgICAgICB9XG4gIFxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogMjUwbW07XG4gICAgXG4gICAgICAgICAgICAgICAgLmMzIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MG1tO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI1MG1tO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwbW07XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjUwbW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuICBcbjpuZy1kZWVwIC5jMy1saW5lcyB7XG4gICAgc3Ryb2tlLXdpZHRoOiA1MHB4O1xufVxuXG46Om5nLWRlZXAgLmMzLXlncmlkLWxpbmUgbGluZSB7XG4gICAgc3Ryb2tlOiByZ2IoODgsIDg4LCA4OCk7XG59XG5cbjo6bmctZGVlcCAuYzMteGdyaWQtbGluZSBsaW5lIHtcbiAgICBzdHJva2U6IHJlZDtcbn1cblxuOjpuZy1kZWVwIC5jMy14Z3JpZC1saW5lIHRleHR7XG4gICAgZmlsbDogIzAyMDIwMjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjo6bmctZGVlcCAuYzMteWdyaWQtbGluZSB0ZXh0e1xuICAgIGZpbGw6ICMwMjAyMDI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjcwbW07XG4gIG1heC13aWR0aDogMjcwbW07XG59XG46aG9zdCAuY2FyZCB7XG4gIHdpZHRoOiAyNjBtbTtcbn1cbjpob3N0IC5jYXJkIG1hdC1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgLmNhcmQgbWF0LWNhcmQtaGVhZGVyIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCAuY2FyZCAuaW5mb3JtYWNhbyB7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGVyY2lhcnktdGV4dCk7XG59XG46aG9zdCAuY2FyZCAuY29udGVudCB7XG4gIHdpZHRoOiAyNTBtbTtcbn1cbjpob3N0IC5jYXJkIC5jb250ZW50IC5jMyB7XG4gIHdpZHRoOiAyNTBtbTtcbiAgbWF4LXdpZHRoOiAyNTBtbTtcbn1cbjpob3N0IC5jYXJkIC5jb250ZW50IC5jMyBzdmcge1xuICB3aWR0aDogMjUwbW07XG4gIG1heC13aWR0aDogMjUwbW07XG59XG5cbjpuZy1kZWVwIC5jMy1saW5lcyB7XG4gIHN0cm9rZS13aWR0aDogNTBweDtcbn1cblxuOjpuZy1kZWVwIC5jMy15Z3JpZC1saW5lIGxpbmUge1xuICBzdHJva2U6ICM1ODU4NTg7XG59XG5cbjo6bmctZGVlcCAuYzMteGdyaWQtbGluZSBsaW5lIHtcbiAgc3Ryb2tlOiByZWQ7XG59XG5cbjo6bmctZGVlcCAuYzMteGdyaWQtbGluZSB0ZXh0IHtcbiAgZmlsbDogIzAyMDIwMjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOjpuZy1kZWVwIC5jMy15Z3JpZC1saW5lIHRleHQge1xuICBmaWxsOiAjMDIwMjAyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PrintGraficoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-print-grafico',
                templateUrl: './print-grafico.component.html',
                styleUrls: ['./print-grafico.component.scss']
            }]
    }], function () { return []; }, { dataSet$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], tipo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], descricao: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/print-layout/print-layout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/portal/print-layout/print-layout.component.ts ***!
  \***************************************************************/
/*! exports provided: PrintLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintLayoutComponent", function() { return PrintLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/print.service */ "./src/app/portal/services/print.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class PrintLayoutComponent {
    constructor(printService) {
        this.printService = printService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(500).subscribe(() => this.printService.onDataReady());
    }
}
PrintLayoutComponent.ɵfac = function PrintLayoutComponent_Factory(t) { return new (t || PrintLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_2__["PrintService"])); };
PrintLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintLayoutComponent, selectors: [["app-print-layout"]], decls: 6, vars: 0, consts: [[1, "content"]], template: function PrintLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["@page portrait {\n  size[_ngcontent-%COMP%]:   A4[_ngcontent-%COMP%]   portrait[_ngcontent-%COMP%];\n  margin[_ngcontent-%COMP%]:   2cm[_ngcontent-%COMP%]   3cm[_ngcontent-%COMP%];\n}\n@page landscape {\n  size[_ngcontent-%COMP%]:   A4[_ngcontent-%COMP%]   landscape[_ngcontent-%COMP%];\n  margin[_ngcontent-%COMP%]:   2cm[_ngcontent-%COMP%]   3cm[_ngcontent-%COMP%];\n}\n.content[_ngcontent-%COMP%] {\n  width: 270mm;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9tb2JpbGUtYWNlc3NpdmVsL3Rlc3RlLWNvbnRhZG9yL3NyYy9hcHAvcG9ydGFsL3ByaW50LWxheW91dC9wcmludC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvcnRhbC9wcmludC1sYXlvdXQvcHJpbnQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wb3J0YWwvcHJpbnQtbGF5b3V0L3ByaW50LWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBwYWdlIHBvcnRyYWl0IHtcbiAgc2l6ZTogQTQgcG9ydHJhaXQ7XG4gIG1hcmdpbjogMmNtIDNjbTtcbn1cblxuQHBhZ2UgbGFuZHNjYXBlIHtcbiAgc2l6ZTogQTQgbGFuZHNjYXBlO1xuICBtYXJnaW46IDJjbSAzY207XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDI3MG1tO1xufVxuXG4vLyAuY29udGVudCB7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG4vLyBAbWVkaWEgc2NyZWVuIHtcbi8vICAgOmhvc3Qge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgIH1cbi8vIH1cblxuLy8gQG1lZGlhIHByaW50IHtcblxuLy8gICBAcGFnZSBwb3J0cmFpdCB7XG4vLyAgICAgc2l6ZTogQTQgcG9ydHJhaXQ7XG4vLyAgICAgbWFyZ2luOiAyY20gM2NtO1xuLy8gICB9XG5cbi8vICAgQHBhZ2UgbGFuZHNjYXBlIHtcbi8vICAgICBzaXplOiBBNCBsYW5kc2NhcGU7XG4vLyAgICAgbWFyZ2luOiAyY20gM2NtO1xuLy8gICB9XG5cbi8vICAgLmNvbnRlbnQge1xuLy8gICAgIHdpZHRoOiAyNzBtbTtcbi8vICAgfVxuLy8gfVxuXG5cbi8vIEBtZWRpYSBwcmludCBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICBcblxuLy8gICAvLyAuY29udGVudCB7XG4vLyAgIC8vICAgd2lkdGg6IDI3MG1tO1xuLy8gICAvLyB9XG4vLyB9XG4iLCJAcGFnZSBwb3J0cmFpdCB7XG4gIHNpemU6IEE0IHBvcnRyYWl0O1xuICBtYXJnaW46IDJjbSAzY207XG59XG5AcGFnZSBsYW5kc2NhcGUge1xuICBzaXplOiBBNCBsYW5kc2NhcGU7XG4gIG1hcmdpbjogMmNtIDNjbTtcbn1cbi5jb250ZW50IHtcbiAgd2lkdGg6IDI3MG1tO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print-layout',
                templateUrl: './print-layout.component.html',
                styleUrls: ['./print-layout.component.scss']
            }]
    }], function () { return [{ type: _services_print_service__WEBPACK_IMPORTED_MODULE_2__["PrintService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/print-mapa/print-mapa.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/portal/print-mapa/print-mapa.component.ts ***!
  \***********************************************************/
/*! exports provided: PrintMapaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintMapaComponent", function() { return PrintMapaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");





class PrintMapaComponent {
    constructor() {
        this.paleta = ['#bd0026', '#f03b20', '#fd8d3c', '#fecc5c', '#ffffb2'];
    }
    ngAfterViewInit() {
        // Invoca o mapa
        this.invocaMapa();
        // Carrega a camada de fundo
        this.adicionarRegioes(this.indicador);
        // Cria as regiões com os seus atributos
        // Cria a legenda
        this.criarLegenda(this.indicador);
    }
    ngOnInit() {
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
    }
    invocaMapa() {
        this.mymap = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map-' + this.id).setView([-23.7, -46.7], 9.3);
        leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' +
                'contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(this.mymap);
    }
    adicionarRegioes(mapa) {
        for (let j = 0; j < mapa.regioes.length; j++) {
            const polygon = [];
            for (let i = 0; i < mapa.regioes[j].coordenadas.length; i++) {
                polygon.push([this.indicador.regioes[j].coordenadas[i].y, this.indicador.regioes[j].coordenadas[i].x]);
            }
            if (mapa.regioes[j].valor === undefined || isNaN(mapa.regioes[j].valor)) {
                leaflet__WEBPACK_IMPORTED_MODULE_1__["polygon"](polygon, {
                    color: mapa.regioes[j].cor,
                    fillOpacity: 0.5
                }).bindPopup('<h3>' + mapa.regioes[j].nome + '</h3>'
                    + '<h4 >Valor: Sem dados</h4>').addTo(this.mymap);
            }
            else {
                leaflet__WEBPACK_IMPORTED_MODULE_1__["polygon"](polygon, {
                    color: mapa.regioes[j].cor,
                    fillOpacity: 0.5
                }).bindPopup('<h3>' + mapa.regioes[j].nome + '</h3>'
                    + '<h4 >Valor: ' + mapa.regioes[j].valor + '</h4>').addTo(this.mymap);
            }
        }
    }
    getColor(valor, max) {
        const limit = Math.trunc(max * 0.8);
        return valor > limit ? this.paleta[0] :
            valor > limit / 2 ? this.paleta[1] :
                valor > limit / 4 ? this.paleta[2] :
                    valor > limit / 8 ? this.paleta[3] :
                        this.paleta[4];
    }
    // done
    criarLegenda(mapa) {
        const self = this;
        const legend = new leaflet__WEBPACK_IMPORTED_MODULE_1__["Control"]({ position: 'bottomright' });
        legend.onAdd = () => {
            const div = leaflet__WEBPACK_IMPORTED_MODULE_1__["DomUtil"].create('div', 'info legend');
            const grades = [0,
                Math.trunc(mapa.max * 0.8 / 8),
                Math.trunc(mapa.max * 0.8 / 4),
                Math.trunc(mapa.max * 0.8 / 2),
                Math.trunc(mapa.max * 0.8)];
            div.innerHTML +=
                '<div style="display: flex;align-items: center;"><div style="width: 0; height: 0;border: 8.8px solid #AAAAAA;">' +
                    '</div><p style="    font-weight: 600;margin: 0 0px 0px 5px;">Sem dados</p</div>';
            for (let i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    '<div><div style="width: 0; height: 0;border: 10px solid ' + self.getColor(grades[i] + 1, mapa.max) + ';"></div> ' +
                        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '</div>' : '+');
            }
            return div;
        };
        legend.addTo(this.mymap);
    }
}
PrintMapaComponent.ɵfac = function PrintMapaComponent_Factory(t) { return new (t || PrintMapaComponent)(); };
PrintMapaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintMapaComponent, selectors: [["app-print-mapa"]], inputs: { indicador: "indicador" }, decls: 5, vars: 2, consts: [[1, "titulo"], [1, "map", 3, "id"]], template: function PrintMapaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.indicador.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "map-", ctx.id, "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 500px;\n  flex-direction: column;\n  align-items: center;\n}\n[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 100%;\n}\n  .legend {\n  line-height: 18px;\n  color: #555;\n}\n  .legend i {\n  width: 18px;\n  height: 18px;\n  float: left;\n  margin-right: 8px;\n  opacity: 0.7;\n}\n  .legend div {\n  font-weight: 600;\n  font-size: 14px;\n  height: 20px;\n  display: flex;\n  margin: 5px 0;\n  align-items: center;\n  justify-content: space-between;\n}\n  .info.legend.leaflet-control {\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0px 0px 12px 0px grey, 0px 0px 3px 0px black;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9tb2JpbGUtYWNlc3NpdmVsL3Rlc3RlLWNvbnRhZG9yL3NyYy9hcHAvcG9ydGFsL3ByaW50LW1hcGEvcHJpbnQtbWFwYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9ydGFsL3ByaW50LW1hcGEvcHJpbnQtbWFwYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDRVI7QUREUTtFQUNJLFdBQUE7QUNHWjtBRERRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNHWjtBREVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQ0o7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDR0o7QUREQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3REFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9wcmludC1tYXBhL3ByaW50LW1hcGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXQtY2FyZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAudGl0dWxvIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5tYXAge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cbjo6bmctZGVlcCAubGVnZW5kIHtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogIzU1NTtcbn1cbjo6bmctZGVlcCAubGVnZW5kIGkge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG46Om5nLWRlZXAgLmxlZ2VuZCBkaXYge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46Om5nLWRlZXAgLmluZm8ubGVnZW5kLmxlYWZsZXQtY29udHJvbCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggZ3JleSwgMHB4IDBweCAzcHggMHB4IGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IG1hdC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCBtYXQtY2FyZCAudGl0dWxvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBtYXQtY2FyZCAubWFwIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAubGVnZW5kIHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG46Om5nLWRlZXAgLmxlZ2VuZCBpIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbjo6bmctZGVlcCAubGVnZW5kIGRpdiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDVweCAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbjo6bmctZGVlcCAuaW5mby5sZWdlbmQubGVhZmxldC1jb250cm9sIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCBncmV5LCAwcHggMHB4IDNweCAwcHggYmxhY2s7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintMapaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print-mapa',
                templateUrl: './print-mapa.component.html',
                styleUrls: ['./print-mapa.component.scss']
            }]
    }], function () { return []; }, { indicador: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/print-painel/print-painel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/portal/print-painel/print-painel.component.ts ***!
  \***************************************************************/
/*! exports provided: PrintPainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintPainelComponent", function() { return PrintPainelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_serie_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/serie.model */ "./src/app/portal/models/serie.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/print.service */ "./src/app/portal/services/print.service.ts");
/* harmony import */ var _print_grafico_print_grafico_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../print-grafico/print-grafico.component */ "./src/app/portal/print-grafico/print-grafico.component.ts");
/* harmony import */ var _print_mapa_print_mapa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../print-mapa/print-mapa.component */ "./src/app/portal/print-mapa/print-mapa.component.ts");









function PrintPainelComponent_div_2_div_15_div_1_app_print_grafico_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-print-grafico", 20);
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const i_r36 = ctx_r40.index;
    const widget_r35 = ctx_r40.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "print-grafico-", i_r36, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tipo", widget_r35.indicador.tipo)("dataSet$", ctx_r38.toObservable(widget_r35.indicador.series))("titulo", widget_r35.indicador.titulo)("descricao", widget_r35.indicador.descricao);
} }
function PrintPainelComponent_div_2_div_15_div_1_app_print_mapa_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-print-mapa", 21);
} if (rf & 2) {
    const widget_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indicador", widget_r35.indicador);
} }
function PrintPainelComponent_div_2_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrintPainelComponent_div_2_div_15_div_1_app_print_grafico_1_Template, 1, 5, "app-print-grafico", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrintPainelComponent_div_2_div_15_div_1_app_print_mapa_2_Template, 1, 1, "app-print-mapa", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r36 = ctx_r42.index;
    const widget_r35 = ctx_r42.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "print-widget-", i_r36, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r35.indicador.tipo !== "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r35.indicador.tipo === "map");
} }
function PrintPainelComponent_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrintPainelComponent_div_2_div_15_div_1_Template, 3, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const widget_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", widget_r35.indicador != undefined);
} }
function PrintPainelComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PrintPainelComponent_div_2_div_15_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.painel.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.painel.autor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tema: ", ctx_r33.painel.tema, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.painel.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.painel.template.widgets);
} }
class PrintPainelComponent {
    constructor(location, route, printService) {
        this.location = location;
        this.route = route;
        this.printService = printService;
        this.titulo = 'Exemplo layout';
    }
    ngOnInit() {
        this.painel = this.route.snapshot.data.painel;
    }
    onPrintPainel() {
        this.printService.printDocument('paineis', this.painel.id);
    }
    toObservable(series) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(series.map(serie => _models_serie_model__WEBPACK_IMPORTED_MODULE_1__["Serie"].toArray(serie)));
    }
    voltarNavegacao() {
        this.location.back();
    }
}
PrintPainelComponent.ɵfac = function PrintPainelComponent_Factory(t) { return new (t || PrintPainelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_5__["PrintService"])); };
PrintPainelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintPainelComponent, selectors: [["app-print-painel"]], decls: 3, vars: 1, consts: [[1, "container"], [1, "painel"], ["class", "painel-content", 4, "ngIf"], [1, "painel-content"], [1, "input-box"], [1, "titulo-container"], ["id", "titulo-valor", 1, "titulo"], [1, "autor-container"], ["id", "autor-valor", 1, "autor"], [1, "tema-container"], ["id", "tema-valor", 1, "tema"], [1, "descricao-container"], ["id", "descricao-valor", 1, "descricao"], [1, "template"], ["class", "widget", 4, "ngFor", "ngForOf"], [1, "widget"], ["class", "grafico", 3, "id", 4, "ngIf"], [1, "grafico", 3, "id"], [3, "id", "tipo", "dataSet$", "titulo", "descricao", 4, "ngIf"], [3, "indicador", 4, "ngIf"], [3, "id", "tipo", "dataSet$", "titulo", "descricao"], [3, "indicador"]], template: function PrintPainelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrintPainelComponent_div_2_Template, 16, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.painel != undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _print_grafico_print_grafico_component__WEBPACK_IMPORTED_MODULE_6__["PrintGraficoComponent"], _print_mapa_print_mapa_component__WEBPACK_IMPORTED_MODULE_7__["PrintMapaComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 270mm;\n  max-width: 270mm;\n  height: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: block;\n  width: 270mm;\n  max-width: 270mm;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%] {\n  display: block;\n  width: 270mm;\n  max-width: 270mm;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%] {\n  width: 270mm;\n  max-width: 270mm;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .autor-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0 20vw;\n  overflow-wrap: break-word;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .autor-container[_ngcontent-%COMP%]   .autor[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 10px 0;\n  font-weight: 300;\n  color: #888888;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .titulo-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .titulo-container[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n  font-weight: 400;\n  color: #888;\n  overflow-wrap: break-word;\n  padding: 0 20vw;\n  line-height: 30px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .tema-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0 20vw;\n  overflow-wrap: break-word;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .tema-container[_ngcontent-%COMP%]   .tema[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0;\n  font-weight: 300;\n  color: #888888;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .descricao-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 20px 0 0;\n  padding: 0 10vw;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .descricao-container[_ngcontent-%COMP%]   .descricao[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 0;\n  font-weight: 200;\n  overflow-wrap: break-word;\n  color: #888;\n  line-height: 26px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .template[_ngcontent-%COMP%] {\n  display: block;\n  width: 270mm;\n  max-width: 270mm;\n  height: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .painel[_ngcontent-%COMP%]   .painel-content[_ngcontent-%COMP%]   .template[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 5px;\n  margin: 16px;\n  min-width: 512px;\n  min-height: 256px;\n  page-break-inside: avoid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9tb2JpbGUtYWNlc3NpdmVsL3Rlc3RlLWNvbnRhZG9yL3NyYy9hcHAvcG9ydGFsL3ByaW50LXBhaW5lbC9wcmludC1wYWluZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvcnRhbC9wcmludC1wYWluZWwvcHJpbnQtcGFpbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQ1E7RUFDSSxjQUFBO0FDQ1o7QURDWTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDaEI7QURDZ0I7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNDcEI7QURDb0I7RUFDSSxhQUFBO0VBRUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNDeEI7QURDd0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQzVCO0FER29CO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDRHhCO0FER3dCO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0Q1QjtBREtvQjtFQUNJLGFBQUE7RUFFQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0h4QjtBREt3QjtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNINUI7QURPb0I7RUFDSSxhQUFBO0VBRUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNMeEI7QURPd0I7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNMNUI7QURVZ0I7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1JwQjtBRFVvQjtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDUnhCIiwiZmlsZSI6InNyYy9hcHAvcG9ydGFsL3ByaW50LXBhaW5lbC9wcmludC1wYWluZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI3MG1tO1xuICAgIG1heC13aWR0aDogMjcwbW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICBcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyNzBtbTtcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBtbTtcbiAgXG4gICAgICAgIC5wYWluZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gIFxuICAgICAgICAgICAgLnBhaW5lbC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMjcwbW07XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNzBtbTtcbiAgXG4gICAgICAgICAgICAgICAgLmlucHV0LWJveCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNzBtbTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNzBtbTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmF1dG9yLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXV0b3Ige1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4ODg4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC50aXR1bG8tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpdHVsbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC50ZW1hLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAudGVtYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4ODg4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC5kZXNjcmljYW8tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwdnc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZXNjcmljYW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC50ZW1wbGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjcwbW07XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjcwbW07XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLndpZGdldCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjU2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjcwbW07XG4gIG1heC13aWR0aDogMjcwbW07XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI3MG1tO1xuICBtYXgtd2lkdGg6IDI3MG1tO1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNzBtbTtcbiAgbWF4LXdpZHRoOiAyNzBtbTtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLmlucHV0LWJveCB7XG4gIHdpZHRoOiAyNzBtbTtcbiAgbWF4LXdpZHRoOiAyNzBtbTtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLmlucHV0LWJveCAuYXV0b3ItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHZ3O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCAuaW5wdXQtYm94IC5hdXRvci1jb250YWluZXIgLmF1dG9yIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCAuaW5wdXQtYm94IC50aXR1bG8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC5pbnB1dC1ib3ggLnRpdHVsby1jb250YWluZXIgLnRpdHVsbyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzg4ODtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgcGFkZGluZzogMCAyMHZ3O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLmlucHV0LWJveCAudGVtYS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwdnc7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG46aG9zdCAuY29udGFpbmVyIC5wYWluZWwgLnBhaW5lbC1jb250ZW50IC5pbnB1dC1ib3ggLnRlbWEtY29udGFpbmVyIC50ZW1hIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjODg4ODg4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLmlucHV0LWJveCAuZGVzY3JpY2FvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwIDA7XG4gIHBhZGRpbmc6IDAgMTB2dztcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLmlucHV0LWJveCAuZGVzY3JpY2FvLWNvbnRhaW5lciAuZGVzY3JpY2FvIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGNvbG9yOiAjODg4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cbjpob3N0IC5jb250YWluZXIgLnBhaW5lbCAucGFpbmVsLWNvbnRlbnQgLnRlbXBsYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNzBtbTtcbiAgbWF4LXdpZHRoOiAyNzBtbTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmNvbnRhaW5lciAucGFpbmVsIC5wYWluZWwtY29udGVudCAudGVtcGxhdGUgLndpZGdldCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDE2cHg7XG4gIG1pbi13aWR0aDogNTEycHg7XG4gIG1pbi1oZWlnaHQ6IDI1NnB4O1xuICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintPainelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print-painel',
                templateUrl: './print-painel.component.html',
                styleUrls: ['./print-painel.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_print_service__WEBPACK_IMPORTED_MODULE_5__["PrintService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/services/painel-resolver.service.ts":
/*!************************************************************!*\
  !*** ./src/app/portal/services/painel-resolver.service.ts ***!
  \************************************************************/
/*! exports provided: PainelResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelResolverService", function() { return PainelResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _painel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./painel.service */ "./src/app/portal/services/painel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class PainelResolverService {
    constructor(painelService, router) {
        this.painelService = painelService;
        this.router = router;
    }
    resolve(route, state) {
        const painelId = route.paramMap.get('painelId');
        return this.painelService.getPainel(painelId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            this.router.navigate(['']);
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
        }));
    }
}
PainelResolverService.ɵfac = function PainelResolverService_Factory(t) { return new (t || PainelResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
PainelResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PainelResolverService, factory: PainelResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PainelResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _painel_service__WEBPACK_IMPORTED_MODULE_3__["PainelService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/services/painel.service.ts":
/*!***************************************************!*\
  !*** ./src/app/portal/services/painel.service.ts ***!
  \***************************************************/
/*! exports provided: PainelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelService", function() { return PainelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_painel_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/painel.model */ "./src/app/portal/models/painel.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class PainelService {
    constructor(http) {
        this.http = http;
    }
    getPaineis() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url + '/paineis').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((paineis) => {
            return paineis.map((painel) => _models_painel_model__WEBPACK_IMPORTED_MODULE_2__["Painel"].fromResource(painel));
        }));
    }
    getPainel(painelId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url + '/paineis/' + painelId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((painel) => {
            return _models_painel_model__WEBPACK_IMPORTED_MODULE_2__["Painel"].fromResource(painel);
        }));
    }
}
PainelService.ɵfac = function PainelService_Factory(t) { return new (t || PainelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PainelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PainelService, factory: PainelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PainelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/services/print.service.ts":
/*!**************************************************!*\
  !*** ./src/app/portal/services/print.service.ts ***!
  \**************************************************/
/*! exports provided: PrintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintService", function() { return PrintService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PrintService {
    constructor(router) {
        this.router = router;
        this.isPrinting = false;
    }
    printDocument(documentCollection, documentId) {
        this.isPrinting = true;
        this.router.navigate(['/',
            { outlets: {
                    print: ['print', documentCollection, documentId]
                } }]);
    }
    onDataReady() {
        setTimeout(() => {
            window.print();
            this.isPrinting = false;
            this.router.navigate([{ outlets: { print: null } }]);
        });
    }
}
PrintService.ɵfac = function PrintService_Factory(t) { return new (t || PrintService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PrintService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrintService, factory: PrintService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portal/shared/grafico/grafico.component.ts":
/*!************************************************************!*\
  !*** ./src/app/portal/shared/grafico/grafico.component.ts ***!
  \************************************************************/
/*! exports provided: GraficoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficoComponent", function() { return GraficoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! c3 */ "./node_modules/c3/c3.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_indicador_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/indicador.model */ "./src/app/portal/models/indicador.model.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");










class GraficoComponent {
    constructor() {
        this.xCategoria = true;
        this.categoriaArray = ['x'];
        this.dataSetHolder = [];
        this.informacao = false;
    }
    ngOnInit() {
    }
    separaDados(data, id, pacote) {
        const x = [id + '_x'];
        const y = [id];
        data.forEach(item => {
            x.push(item.nome);
            y.push(item.valor);
        });
        pacote.eixo_x = x;
        pacote.eixo_y = y;
        return pacote;
    }
    loadData(pacote) {
        if (this.xCategoria === true) {
            const arrayToAdd = pacote.eixo_x.slice(1);
            this.categoriaArray.push(...arrayToAdd);
            this.chart.load({
                columns: [
                    this.categoriaArray,
                    pacote.eixo_y
                ]
            });
        }
        else {
            const x = '' + pacote.eixo_x[0];
            const y = '' + pacote.eixo_y[0];
            const xsc = {};
            xsc[y] = x;
            this.chart.load({
                xs: xsc,
                columns: [
                    pacote.eixo_x,
                    pacote.eixo_y
                ]
            });
        }
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.tipo === 'pie') {
                this.config = {
                    bindto: '#chart-' + this.id,
                    data: {
                        columns: [],
                        xFormat: '%H:%M:%S',
                        type: 'pie',
                    },
                    pie: {
                        label: {
                            format: function (value, ratio, id) {
                                return d3__WEBPACK_IMPORTED_MODULE_5__["format"]('.2s')(value);
                            }
                        }
                    },
                    padding: {
                        right: 20,
                        bottom: 20,
                    },
                    point: {
                        show: false
                    },
                    transition: {
                        duration: 500
                    }
                };
            }
            else if (this.tipo === 'bar') {
                this.config = {
                    bindto: '#chart-' + this.id,
                    data: {
                        columns: [],
                        xFormat: '%H:%M:%S',
                        type: this.tipo,
                    },
                    padding: {
                        right: 20,
                        bottom: 20,
                    },
                    point: {
                        show: false
                    },
                    transition: {
                        duration: 500
                    }
                };
            }
            if (this.xCategoria === true) {
                this.config.data.x = 'x';
                this.config.axis = {
                    x: {
                        type: 'category'
                    }
                };
            }
            else {
                this.config.data.xs = {};
            }
            switch (this.tipo) {
                case _models_indicador_model__WEBPACK_IMPORTED_MODULE_4__["TipoIndicador"].BARRAS:
                    this.config.legend = {
                        show: false
                    };
                    break;
                default:
                    break;
            }
            this.chart = c3__WEBPACK_IMPORTED_MODULE_3__["generate"](this.config);
            this.dataSet$.subscribe(data => {
                data.forEach(array => {
                    const dataNoId = Object.assign([], array);
                    const id = array[0];
                    dataNoId.shift();
                    let pacote = { eixo_x: [], eixo_y: [] };
                    if (this.dataSetHolder.length === 0) {
                        pacote = this.separaDados(dataNoId, id, pacote);
                        this.loadData(pacote);
                    }
                    else {
                        this.dataSetHolder.forEach(arrayHolder => {
                            if (id === arrayHolder[0]) {
                                const length = Object.keys(arrayHolder).length;
                                if (array.length > length) {
                                    pacote = this.separaDados(dataNoId, id, pacote);
                                    this.loadData(pacote);
                                }
                            }
                        });
                    }
                });
                this.dataSetHolder = [];
                data.forEach(dataItem => this.dataSetHolder.push(Object.assign({}, dataItem)));
            });
            this.resizeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).subscribe(() => this.chart.resize());
        });
    }
    abrirInfo() {
        this.informacao = !this.informacao;
    }
    onKeyPressInfo(e) {
        if (e.keyCode == 13) {
            this.abrirInfo();
        }
    }
    ngOnDestroy() {
        this.resizeSubscription.unsubscribe();
    }
}
GraficoComponent.ɵfac = function GraficoComponent_Factory(t) { return new (t || GraficoComponent)(); };
GraficoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GraficoComponent, selectors: [["app-grafico"]], inputs: { dataSet$: "dataSet$", tipo: "tipo", id: "id", titulo: "titulo", descricao: "descricao" }, decls: 13, vars: 3, consts: [[1, "card"], ["tabindex", "0"], [1, "card-top-action"], [1, "content"], [3, "id"], [1, "mat-elevation-z0", 2, "font-size", "larger"], ["cdkMonitorSubtreeFocus", "", 1, "left-aligned-header", 2, "font-size", "large"], ["tabindex", "0", "cdkMonitorSubtreeFocus", "", 1, "informacao"]], template: function GraficoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-expansion-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-expansion-panel-header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Descri\u00E7\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "chart-", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.descricao, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["CdkMonitorFocus"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: calc(100% - 32px);\n  height: calc(100% - 32px);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  width: 100%;\n}\n[_ngcontent-%COMP%]:ng-deep   .c3-lines[_ngcontent-%COMP%] {\n  stroke-width: 50px;\n}\n  .c3-ygrid-line line {\n  stroke: #585858;\n}\n  .c3-xgrid-line line {\n  stroke: red;\n}\n  .c3-xgrid-line text {\n  fill: #020202;\n  font-size: 12px;\n  font-weight: bold;\n}\n  .c3-ygrid-line text {\n  fill: #020202;\n  font-size: 12px;\n  font-weight: bold;\n}\n@media print {\n  [_nghost-%COMP%] {\n    display: block;\n    height: 100%;\n    width: 270mm;\n    max-width: 270mm;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 260mm;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n    display: block;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 250mm;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .c3[_ngcontent-%COMP%] {\n    width: 250mm;\n    max-width: 250mm;\n  }\n  [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .c3[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 250mm;\n    max-width: 250mm;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9tb2JpbGUtYWNlc3NpdmVsL3Rlc3RlLWNvbnRhZG9yL3NyYy9hcHAvcG9ydGFsL3NoYXJlZC9ncmFmaWNvL2dyYWZpY28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvcnRhbC9zaGFyZWQvZ3JhZmljby9ncmFmaWNvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0U7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDQ047QURJQTtFQUNFLGtCQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtBQ0RGO0FESUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNERjtBRElBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ0RGO0VER0U7SUFDRSxZQUFBO0VDREo7RURHSTtJQUNFLGNBQUE7RUNETjtFREdNO0lBQ0UsYUFBQTtFQ0RSO0VES0k7SUFDRSxZQUFBO0VDSE47RURLTTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtFQ0hSO0VES1E7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUNIVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9ydGFsL3NoYXJlZC9ncmFmaWNvL2dyYWZpY28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5jYXJkIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMnB4KTtcblxuICAgIG1hdC1jYXJkLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfSAgXG4gIH1cbn1cblxuOm5nLWRlZXAgLmMzLWxpbmVzIHtcbiAgc3Ryb2tlLXdpZHRoOiA1MHB4O1xufVxuXG46Om5nLWRlZXAgLmMzLXlncmlkLWxpbmUgbGluZSB7XG4gIHN0cm9rZTogcmdiKDg4LCA4OCwgODgpO1xufVxuXG46Om5nLWRlZXAgLmMzLXhncmlkLWxpbmUgbGluZSB7XG4gIHN0cm9rZTogcmVkO1xufVxuXG46Om5nLWRlZXAgLmMzLXhncmlkLWxpbmUgdGV4dHtcbiAgZmlsbDogIzAyMDIwMjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOjpuZy1kZWVwIC5jMy15Z3JpZC1saW5lIHRleHR7XG4gIGZpbGw6ICMwMjAyMDI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDI3MG1tO1xuICAgIG1heC13aWR0aDogMjcwbW07XG5cbiAgICAuY2FyZCB7XG4gICAgICB3aWR0aDogMjYwbW07XG4gIFxuICAgICAgbWF0LWNhcmQtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMjUwbW07XG5cbiAgICAgICAgLmMzIHtcbiAgICAgICAgICB3aWR0aDogMjUwbW07XG4gICAgICAgICAgbWF4LXdpZHRoOiAyNTBtbTtcblxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogMjUwbW07XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MG1tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IC5jYXJkIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMycHgpO1xufVxuOmhvc3QgLmNhcmQgbWF0LWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjpuZy1kZWVwIC5jMy1saW5lcyB7XG4gIHN0cm9rZS13aWR0aDogNTBweDtcbn1cblxuOjpuZy1kZWVwIC5jMy15Z3JpZC1saW5lIGxpbmUge1xuICBzdHJva2U6ICM1ODU4NTg7XG59XG5cbjo6bmctZGVlcCAuYzMteGdyaWQtbGluZSBsaW5lIHtcbiAgc3Ryb2tlOiByZWQ7XG59XG5cbjo6bmctZGVlcCAuYzMteGdyaWQtbGluZSB0ZXh0IHtcbiAgZmlsbDogIzAyMDIwMjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOjpuZy1kZWVwIC5jMy15Z3JpZC1saW5lIHRleHQge1xuICBmaWxsOiAjMDIwMjAyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAyNzBtbTtcbiAgICBtYXgtd2lkdGg6IDI3MG1tO1xuICB9XG4gIDpob3N0IC5jYXJkIHtcbiAgICB3aWR0aDogMjYwbW07XG4gIH1cbiAgOmhvc3QgLmNhcmQgbWF0LWNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICA6aG9zdCAuY2FyZCBtYXQtY2FyZC1oZWFkZXIgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIDpob3N0IC5jYXJkIC5jb250ZW50IHtcbiAgICB3aWR0aDogMjUwbW07XG4gIH1cbiAgOmhvc3QgLmNhcmQgLmNvbnRlbnQgLmMzIHtcbiAgICB3aWR0aDogMjUwbW07XG4gICAgbWF4LXdpZHRoOiAyNTBtbTtcbiAgfVxuICA6aG9zdCAuY2FyZCAuY29udGVudCAuYzMgc3ZnIHtcbiAgICB3aWR0aDogMjUwbW07XG4gICAgbWF4LXdpZHRoOiAyNTBtbTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GraficoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-grafico',
                templateUrl: './grafico.component.html',
                styleUrls: ['./grafico.component.scss']
            }]
    }], function () { return []; }, { dataSet$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], tipo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], descricao: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/portal/shared/mapa/mapa.component.ts":
/*!******************************************************!*\
  !*** ./src/app/portal/shared/mapa/mapa.component.ts ***!
  \******************************************************/
/*! exports provided: MapaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaComponent", function() { return MapaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");







class MapaComponent {
    constructor() {
        this.paleta = ['#bd0026', '#f03b20', '#fd8d3c', '#fecc5c', '#ffffb2'];
        this.faSquareFull = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSquareFull"];
    }
    ngAfterViewInit() {
        // Invoca o mapa
        this.invocaMapa();
        // Carrega a camada de fundo
        this.adicionarRegioes(this.indicador);
        // Cria as regiões com os seus atributos
        // Cria a legenda
        this.criarLegenda(this.indicador);
    }
    ngOnInit() {
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
    }
    invocaMapa() {
        this.mymap = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map-' + this.id).setView([-23.7, -46.7], 9.55);
        leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' +
                'contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(this.mymap);
    }
    adicionarRegioes(mapa) {
        for (let j = 0; j < mapa.regioes.length; j++) {
            const polygon = [];
            for (let i = 0; i < mapa.regioes[j].coordenadas.length; i++) {
                polygon.push([this.indicador.regioes[j].coordenadas[i].y, this.indicador.regioes[j].coordenadas[i].x]);
            }
            if (mapa.regioes[j].valor === undefined || isNaN(mapa.regioes[j].valor)) {
                leaflet__WEBPACK_IMPORTED_MODULE_1__["polygon"](polygon, {
                    color: mapa.regioes[j].cor,
                    fillOpacity: 0.5
                }).bindPopup('<h3>' + mapa.regioes[j].nome + '</h3>'
                    + '<h4 >Valor: Sem dados</h4>').addTo(this.mymap);
            }
            else {
                leaflet__WEBPACK_IMPORTED_MODULE_1__["polygon"](polygon, {
                    color: mapa.regioes[j].cor,
                    fillOpacity: 0.5
                }).bindPopup('<h3>' + mapa.regioes[j].nome + '</h3>'
                    + '<h4 >Valor: ' + mapa.regioes[j].valor + '</h4>').addTo(this.mymap);
            }
        }
    }
    getColor(valor, max) {
        const limit = Math.trunc(max * 0.8);
        return valor > limit ? this.paleta[0] :
            valor > limit / 2 ? this.paleta[1] :
                valor > limit / 4 ? this.paleta[2] :
                    valor > limit / 8 ? this.paleta[3] :
                        this.paleta[4];
    }
    // done
    criarLegenda(mapa) {
        const self = this;
        const legend = new leaflet__WEBPACK_IMPORTED_MODULE_1__["Control"]({ position: 'bottomright' });
        legend.onAdd = () => {
            const div = leaflet__WEBPACK_IMPORTED_MODULE_1__["DomUtil"].create('div', 'info legend');
            const grades = [0,
                Math.trunc(mapa.max * 0.8 / 8),
                Math.trunc(mapa.max * 0.8 / 4),
                Math.trunc(mapa.max * 0.8 / 2),
                Math.trunc(mapa.max * 0.8)];
            div.innerHTML +=
                '<div style="display: flex;align-items: center;"><div style="width: 0; height: 0;border: 8.8px solid #AAAAAA;">' +
                    '</div><p style="    font-weight: 600;margin: 0 0px 0px 5px;">Sem dados</p</div>';
            for (let i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    '<div><div style="width: 0; height: 0;border: 10px solid ' + self.getColor(grades[i] + 1, mapa.max) + ';"></div> ' +
                        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '</div><br>' : '+');
            }
            return div;
        };
        legend.addTo(this.mymap);
    }
}
MapaComponent.ɵfac = function MapaComponent_Factory(t) { return new (t || MapaComponent)(); };
MapaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapaComponent, selectors: [["app-mapa"]], inputs: { indicador: "indicador", descricao: "descricao" }, decls: 11, vars: 3, consts: [[1, "titulo"], ["tabindex", "0"], [1, "map", 3, "id"], [1, "mat-elevation-z0", 2, "font-size", "larger"], [1, "left-aligned-header", 2, "font-size", "large"], ["tabindex", "0", 1, "informacao"]], template: function MapaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Descri\u00E7\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.indicador.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "map-", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.descricao, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  height: 500px;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 100%;\n}\n  .legend {\n  line-height: 18px;\n  color: #555;\n}\n  .legend i {\n  width: 18px;\n  height: 18px;\n  float: left;\n  margin-right: 8px;\n  opacity: 0.7;\n}\n  .legend div {\n  font-weight: 600;\n  font-size: 14px;\n  height: 20px;\n  display: flex;\n  margin: 5px 0;\n  align-items: center;\n  justify-content: space-between;\n}\n  .info.legend.leaflet-control {\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0px 0px 12px 0px grey, 0px 0px 3px 0px black;\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n}\n@media print {\n  [_nghost-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  [_nghost-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    height: 520px;\n    flex-direction: column;\n    align-items: center;\n  }\n  [_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n    height: 400px;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhcnNvZnQvRG9jdW1lbnRvcy9yZXBvcy9tb2JpbGUtYWNlc3NpdmVsL3Rlc3RlLWNvbnRhZG9yL3NyYy9hcHAvcG9ydGFsL3NoYXJlZC9tYXBhL21hcGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvcnRhbC9zaGFyZWQvbWFwYS9tYXBhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRVI7QUREUTtFQUNJLFdBQUE7QUNHWjtBRERRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNHWjtBREdBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQUo7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRUo7QURBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3REFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNHSjtBRERBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsdUJBQUE7RUNJTjtFREhNO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQ0tWO0VESlU7SUFDSSxXQUFBO0VDTWQ7RURKVTtJQUNJLGFBQUE7SUFDQSxXQUFBO0VDTWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9zaGFyZWQvbWFwYS9tYXBhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF0LWNhcmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLnRpdHVsbyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAubWFwIHtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuOjpuZy1kZWVwIC5sZWdlbmQge1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiAjNTU1O1xufVxuOjpuZy1kZWVwIC5sZWdlbmQgaSB7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIG9wYWNpdHk6IDAuNztcbn1cbjo6bmctZGVlcCAubGVnZW5kIGRpdiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjo6bmctZGVlcCAuaW5mby5sZWdlbmQubGVhZmxldC1jb250cm9sIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCBncmV5LCAwcHggMHB4IDNweCAwcHggYmxhY2s7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSBwcmludCB7XG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWF0LWNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MjBweDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLnRpdHVsbyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWFwIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IG1hdC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCBtYXQtY2FyZCAudGl0dWxvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBtYXQtY2FyZCAubWFwIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAubGVnZW5kIHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG46Om5nLWRlZXAgLmxlZ2VuZCBpIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbjo6bmctZGVlcCAubGVnZW5kIGRpdiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDVweCAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbjo6bmctZGVlcCAuaW5mby5sZWdlbmQubGVhZmxldC1jb250cm9sIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCBncmV5LCAwcHggMHB4IDNweCAwcHggYmxhY2s7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgOmhvc3QgbWF0LWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA1MjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgOmhvc3QgbWF0LWNhcmQgLnRpdHVsbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgOmhvc3QgbWF0LWNhcmQgLm1hcCB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mapa',
                templateUrl: './mapa.component.html',
                styleUrls: ['./mapa.component.scss']
            }]
    }], function () { return []; }, { indicador: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], descricao: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    test: false,
    hmg: false,
    base_url: 'https://api.observatorio.smped.prefeitura.sp.gov.br/portal'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/garsoft/Documentos/repos/mobile-acessivel/teste-contador/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map