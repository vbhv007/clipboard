(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\n    font-size:4em;\n    line-height: 2em;\n    /* background-color: #e0d2a1; */\n    background: linear-gradient(160deg, #e0d2a1, #e69696);    \n    overflow: auto;\n    text-align: center;\n\n\n    /* animation */\n    background-size: 400% 400%;\n    -webkit-animation: bg 5s ease infinite;\n    animation: bg 5s ease infinite;\n\n}\n.logo {\n    border-radius: 40%;\n    margin:2% 5%;\n    float: left;\n}\n.description{\n    font-family: 'Courier New', Courier, monospace;\n    padding: 10ex;\n    text-align: justify;\n    cursor: pointer;\n    /* background-color: bisque; */\n}\n.description:hover{\n    -webkit-animation-name: ani;\n            animation-name: ani;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n}\n.links{\n    margin: 1%;\n}\n.links > a{\n    color:inherit;\n    text-decoration: underline;\n}\na{\n    color:inherit;\n    text-decoration: none;\n}\n.contact_info{\n    background: linear-gradient(160deg, #e0d2a1, #e69696);\n    padding: 1%;\n\n    /* animations */\n    background-size: 400% 400%;\n    -webkit-animation: bg 5s ease infinite;\n    animation: bg 5s ease infinite;\n\n\n\n\n}\n.contact{\n    margin: 3% 5%;\n}\n@-webkit-keyframes ani{\n    0%{\n        \n    }\n    100%{\n        /* background-color: #cc7070; */\n        background-color: #e0d2a1;\n        border-radius: 30%;\n    }\n}\n@keyframes ani{\n    0%{\n        \n    }\n    100%{\n        /* background-color: #cc7070; */\n        background-color: #e0d2a1;\n        border-radius: 30%;\n    }\n}\n@-webkit-keyframes bg {\n    0%{background-position:0% 96%}\n    50%{background-position:100% 5%}\n    100%{background-position:0% 96%}\n}\n@keyframes bg {\n    0%{background-position:0% 96%}\n    50%{background-position:100% 5%}\n    100%{background-position:0% 96%}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixxREFBcUQ7SUFDckQsY0FBYztJQUNkLGtCQUFrQjs7O0lBR2xCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsc0NBQXNDO0lBRXRDLDhCQUE4Qjs7QUFFbEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0kscURBQXFEO0lBQ3JELFdBQVc7O0lBRVgsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixzQ0FBc0M7SUFFdEMsOEJBQThCOzs7OztBQUtsQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0k7O0lBRUE7SUFDQTtRQUNJLCtCQUErQjtRQUMvQix5QkFBeUI7UUFDekIsa0JBQWtCO0lBQ3RCO0FBQ0o7QUFUQTtJQUNJOztJQUVBO0lBQ0E7UUFDSSwrQkFBK0I7UUFDL0IseUJBQXlCO1FBQ3pCLGtCQUFrQjtJQUN0QjtBQUNKO0FBR0E7SUFDSSxHQUFHLDBCQUEwQjtJQUM3QixJQUFJLDJCQUEyQjtJQUMvQixLQUFLLDBCQUEwQjtBQUNuQztBQU1BO0lBQ0ksR0FBRywwQkFBMEI7SUFDN0IsSUFBSSwyQkFBMkI7SUFDL0IsS0FBSywwQkFBMEI7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgICBmb250LXNpemU6NGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2UwZDJhMTsgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjZTBkMmExLCAjZTY5Njk2KTsgICAgXG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG5cbiAgICAvKiBhbmltYXRpb24gKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmcgNXMgZWFzZSBpbmZpbml0ZTtcbiAgICAtbW96LWFuaW1hdGlvbjogYmcgNXMgZWFzZSBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IGJnIDVzIGVhc2UgaW5maW5pdGU7XG5cbn1cbi5sb2dvIHtcbiAgICBib3JkZXItcmFkaXVzOiA0MCU7XG4gICAgbWFyZ2luOjIlIDUlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmRlc2NyaXB0aW9ue1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgcGFkZGluZzogMTBleDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7ICovXG59XG4uZGVzY3JpcHRpb246aG92ZXJ7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xufVxuXG4ubGlua3N7XG4gICAgbWFyZ2luOiAxJTtcbn1cbi5saW5rcyA+IGF7XG4gICAgY29sb3I6aW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYXtcbiAgICBjb2xvcjppbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhY3RfaW5mb3tcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCAjZTBkMmExLCAjZTY5Njk2KTtcbiAgICBwYWRkaW5nOiAxJTtcblxuICAgIC8qIGFuaW1hdGlvbnMgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmcgNXMgZWFzZSBpbmZpbml0ZTtcbiAgICAtbW96LWFuaW1hdGlvbjogYmcgNXMgZWFzZSBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IGJnIDVzIGVhc2UgaW5maW5pdGU7XG5cblxuXG5cbn1cbi5jb250YWN0e1xuICAgIG1hcmdpbjogMyUgNSU7XG59XG5cbkBrZXlmcmFtZXMgYW5pe1xuICAgIDAle1xuICAgICAgICBcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2NjNzA3MDsgKi9cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZDJhMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzAlO1xuICAgIH1cbn1cblxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmcge1xuICAgIDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgOTYlfVxuICAgIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgNSV9XG4gICAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDk2JX1cbn1cbkAtbW96LWtleWZyYW1lcyBiZyB7XG4gICAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA5NiV9XG4gICAgNTAle2JhY2tncm91bmQtcG9zaXRpb246MTAwJSA1JX1cbiAgICAxMDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgOTYlfVxufVxuQGtleWZyYW1lcyBiZyB7XG4gICAgMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA5NiV9XG4gICAgNTAle2JhY2tncm91bmQtcG9zaXRpb246MTAwJSA1JX1cbiAgICAxMDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgOTYlfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <img src=\"../assets/logo.jpg\" class=\"logo\" alt=\"\" height=\"100px\">\n  {{ title }}\n</div>\n\n<div class='description'>\n  <b>Presenting</b> a {{ cli }} as an simple alternative for notepad.\n  It is a simple tool to store useful information online.\n  It can be used for online note keeping from the commandline itself.\n  This helps user store information with out cli without hindering\n  their tasks on the terminal.\n  <div style=\"text-align: center\" class='links'>\n    <a href=\"https://github.com/vbhv007/clipboard\">CLIPBOARD</a>\n  </div>\n</div>\n\n<div class='contact_info' style=\"text-align: center\">\n  <h3>Contact Information</h3>\n  <div class = \"contact\">\n    <div>{{ contacts[0].Name }}</div>\n    <div><a href=\"https://www.github.com/vbhv007\">{{ contacts[0].Github }}</a></div>\n  </div>\n\n  <div class = \"contact\">\n      <div>{{ contacts[1].Name }}</div>\n      <div><a href=\"https://www.github.com/UdaiAgarwal\">{{ contacts[1].Github }}</a></div>    \n    </div>\n\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Clipboard';
        this.cli = 'Command Line Interface';
        this.contacts = [
            {
                "Name": "Vaibhav Bharadwaj",
                "PhoneNo": "9991199889",
                "Github": "www.github.com/vbhv007"
            },
            {
                "Name": "Udai Agarwal",
                "PhoneNo": "7550170522",
                "Github": "https://github.com/UdaiAgarwal"
            }
        ];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/udai/Documents/Node/clipboard-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map