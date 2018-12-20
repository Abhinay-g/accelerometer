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

/***/ "./src/app/actions/auth.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/auth.actions.ts ***!
  \*****************************************/
/*! exports provided: SET_AUTHENTICATED, SET_UNAUTHENTICATED, SetAuthenticated, SetUnauthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTHENTICATED", function() { return SET_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_UNAUTHENTICATED", function() { return SET_UNAUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAuthenticated", function() { return SetAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUnauthenticated", function() { return SetUnauthenticated; });
var SET_AUTHENTICATED = '[Post] Authenticated';
var SET_UNAUTHENTICATED = '[Post] Unauthenticated';
var SetAuthenticated = /** @class */ (function () {
    function SetAuthenticated() {
        this.type = SET_AUTHENTICATED;
    }
    return SetAuthenticated;
}());

var SetUnauthenticated = /** @class */ (function () {
    function SetUnauthenticated() {
        this.type = SET_UNAUTHENTICATED;
    }
    return SetUnauthenticated;
}());



/***/ }),

/***/ "./src/app/actions/training.actions.ts":
/*!*********************************************!*\
  !*** ./src/app/actions/training.actions.ts ***!
  \*********************************************/
/*! exports provided: SET_AVAILABLETRAINING, SET_COMPLETEDTRAINING, START_TRAINING, STOP_TRAINING, AvaiableTraining, CompletedTraining, StartTraining, StopTraining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AVAILABLETRAINING", function() { return SET_AVAILABLETRAINING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COMPLETEDTRAINING", function() { return SET_COMPLETEDTRAINING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_TRAINING", function() { return START_TRAINING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_TRAINING", function() { return STOP_TRAINING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvaiableTraining", function() { return AvaiableTraining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedTraining", function() { return CompletedTraining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartTraining", function() { return StartTraining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopTraining", function() { return StopTraining; });
var SET_AVAILABLETRAINING = "[TRAINING] SET AVAILABLETRAINING";
var SET_COMPLETEDTRAINING = "[TRAINING] SET COMPLETEDTRAINING";
var START_TRAINING = "[TRAINING] START TRAINING";
var STOP_TRAINING = "[TRAINING] STOP TRAINING";
var AvaiableTraining = /** @class */ (function () {
    function AvaiableTraining(payload) {
        this.payload = payload;
        this.type = SET_AVAILABLETRAINING;
    }
    return AvaiableTraining;
}());

var CompletedTraining = /** @class */ (function () {
    function CompletedTraining(payload) {
        this.payload = payload;
        this.type = SET_COMPLETEDTRAINING;
    }
    return CompletedTraining;
}());

var StartTraining = /** @class */ (function () {
    function StartTraining(payload) {
        this.payload = payload;
        this.type = START_TRAINING;
    }
    return StartTraining;
}());

var StopTraining = /** @class */ (function () {
    function StopTraining(payload) {
        this.payload = payload;
        this.type = STOP_TRAINING;
    }
    return StopTraining;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Available {\r\n  border: solid blue 2px;\r\n  margin: 2px;\r\n  padding: 4px;\r\n}\r\n.Completed {\r\n  border: solid green 2px;\r\n  margin: 2px;\r\n  padding: 4px;\r\n}\r\n.container1 {\r\n  height: 250px;\r\n  display: flex;\r\n  /* margin: auto; */\r\n  /* display: inline-block; */\r\n}\r\n.container1 .box_A,\r\n.container1 .box_B {\r\n  margin: 2px;\r\n}\r\n.btn {\r\n  margin: 2px;\r\n}\r\n.box_A {\r\n  border: solid blue 2px;\r\n  padding: 4px;\r\n  flex: 0 0 50%;\r\n}\r\n.box_B {\r\n  border: solid green 2px;\r\n  padding: 4px;\r\n  flex: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDRCQUE0QjtDQUM3QjtBQUVEOztFQUVFLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7Q0FDZjtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixRQUFRO0NBQ1QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5BdmFpbGFibGUge1xyXG4gIGJvcmRlcjogc29saWQgYmx1ZSAycHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcbi5Db21wbGV0ZWQge1xyXG4gIGJvcmRlcjogc29saWQgZ3JlZW4gMnB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG4uY29udGFpbmVyMSB7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbn1cclxuXHJcbi5jb250YWluZXIxIC5ib3hfQSxcclxuLmNvbnRhaW5lcjEgLmJveF9CIHtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG4uYnRuIHtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG5cclxuLmJveF9BIHtcclxuICBib3JkZXI6IHNvbGlkIGJsdWUgMnB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBmbGV4OiAwIDAgNTAlO1xyXG59XHJcbi5ib3hfQiB7XHJcbiAgYm9yZGVyOiBzb2xpZCBncmVlbiAycHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <select\n    class=\"form-control\"\n    #selectElem\n    (change)=\"onExerciseSelect(selectElem.value)\"\n  >\n    <option [value]=\"\">--Select--</option>\n    <option *ngFor=\"let Exercise of datalist\" [value]=\"Exercise\">\n      {{ Exercise }}</option\n    >\n  </select>\n\n  <form [formGroup]=\"myActivityForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"showForm\">\n    <h1>Exercise Form</h1>\n    <div class=\"form-group\">\n      <label for=\"id\">ID</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"id\"\n        name=\"id\"\n        required\n        formControlName=\"id\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\">NAME</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"name\"\n        name=\"name\"\n        required\n        formControlName=\"name\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"duration\">DURATION</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"duration\"\n        name=\"duration\"\n        required\n        formControlName=\"duration\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"calories\">CALORIES</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"calories\"\n        name=\"calories\"\n        required\n        formControlName=\"calories\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"state\">STATE</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"state\"\n        name=\"state\"\n        disabled\n        formControlName=\"state\"\n      />\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n  </form>\n\n  <div class=\"Available\" *ngIf=\"(AvailableEx$ | async)\">\n    <span>Available Exercise</span>\n    <div>{{ (AvailableEx$ | async).id }}</div>\n    <div>{{ (AvailableEx$ | async).name }}</div>\n    <div>{{ (AvailableEx$ | async).duration }}</div>\n    <div>{{ (AvailableEx$ | async).calories }}</div>\n    <div>{{ (AvailableEx$ | async).state }}</div>\n  </div>\n  <div class=\"Completed\" *ngIf=\"(CompletedEx$ | async)\">\n    <span>Completed Exercise</span>\n    <div>{{ (CompletedEx$ | async).id }}</div>\n    <div>{{ (CompletedEx$ | async).name }}</div>\n    <div>{{ (CompletedEx$ | async).duration }}</div>\n    <div>{{ (CompletedEx$ | async).calories }}</div>\n    <div>{{ (CompletedEx$ | async).state }}</div>\n  </div>\n  <!-- addNewToAvailable -->\n  <!--\n    <button (click)=\"addToAvailable()\" class=\"btn btn-success\">\n      Add to Available\n    </button>\n    <button (click)=\"addNewToAvailable()\" class=\"btn btn-success\">\n      Add More to Available\n    </button>\n    <button (click)=\"addToCompleted()\" class=\"btn btn-success\">\n      Add to completed\n    </button>\n  -->\n\n  <div class=\"container1\">\n    <!--\n      <div class=\"box_A\"><app-blue> </app-blue></div>\n      <div class=\"box_B\"><app-green></app-green></div>\n    -->\n    <div><app-device-motion></app-device-motion></div>\n  </div>\n</div>\n\n<!-- End From -->\n\n<!--\n  <button (click)=\"changeStatusTrue()\">True Status</button>\n  <button (click)=\"changeStatusFalse()\"> False Status</button>\n-->\n\n<!--\n  <div *ngIf=\"post | async as p\">\n\n\n    <h2>{{ p.text }}</h2>\n    <h4>Votes: {{ p.likes }}</h4>\n\n    <button (click)=\"upvote()\">Upvote</button>\n    <button (click)=\"downvote()\">Downvote</button>\n    <button (click)=\"resetPost()\">Reset</button>\n\n    <input [(ngModel)]=\"text\">\n    <button (click)=\"editText()\" >Change Title</button>\n\n  </div>\n-->\n"

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_training_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/training.actions */ "./src/app/actions/training.actions.ts");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/auth.actions */ "./src/app/actions/auth.actions.ts");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AppComponent = /** @class */ (function () {
    /**
     *
     */
    function AppComponent(_store, Activityfb) {
        this._store = _store;
        this.Activityfb = Activityfb;
        this.showForm = false;
        this.title = "NgRXJS";
        this.submitted = false;
        this.availableTr = {
            id: "first",
            name: "push ups",
            duration: 10,
            calories: 3500,
            date: new Date(),
            state: "available"
        };
        this.completedTr = {
            id: "second",
            name: "dumble curl",
            duration: 10,
            calories: 2500,
            date: new Date(),
            state: "completed"
        };
        this.datalist = [];
        this.selectedFormActivity = "";
        // this.loadingStatus$ = this._store.select('message');
        // this.post = this._store.select('post');
        // this.isAuth = this._store.select(fromRoot.getIsAuthenticated);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datalist = [];
        this.showForm = false;
        this._store.dispatch(new _actions_training_actions__WEBPACK_IMPORTED_MODULE_3__["AvaiableTraining"](this.availableTr));
        this._store.dispatch(new _actions_training_actions__WEBPACK_IMPORTED_MODULE_3__["CompletedTraining"](this.completedTr));
        this.AvailableEx$ = this._store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getAvailableTraining"]);
        this.CompletedEx$ = this._store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getCompletedTraining"]);
        this.ActiveEx$ = this._store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getActiveTraining"]);
        this.AvailableEx$.subscribe(function (res) {
            _this.datalist.push(res.name);
        });
        this.CompletedEx$.subscribe(function (res) {
            _this.datalist.push(res.name);
        });
        this.myActivityForm = this.Activityfb.group({
            id: "",
            name: "",
            duration: "",
            calories: "",
            state: ""
        });
    };
    AppComponent.prototype.onSubmit = function () {
        this.datalist.splice(this.datalist.indexOf(this.selectedFormActivity), 1);
        if (this.myActivityForm.value.state == "completed") {
            this._store.dispatch(new _actions_training_actions__WEBPACK_IMPORTED_MODULE_3__["CompletedTraining"](this.myActivityForm.value));
        }
        if (this.myActivityForm.value.state == "available") {
            this._store.dispatch(new _actions_training_actions__WEBPACK_IMPORTED_MODULE_3__["AvaiableTraining"](this.myActivityForm.value));
        }
        this.showForm = false;
    };
    AppComponent.prototype.onExerciseSelect = function (exname) {
        var _this = this;
        console.log(exname);
        this.showForm = true;
        this.selectedFormActivity = exname;
        this.AvailableEx$.subscribe(function (res) {
            if (res.name == exname) {
                _this.myActivityForm.patchValue({
                    id: res.id,
                    name: res.name,
                    duration: res.duration,
                    calories: res.calories,
                    state: res.state
                });
            }
        });
        this.CompletedEx$.subscribe(function (res) {
            if (res.name == exname) {
                _this.myActivityForm.patchValue({
                    id: res.id,
                    name: res.name,
                    duration: res.duration,
                    calories: res.calories,
                    state: res.state
                });
            }
        });
    };
    AppComponent.prototype.addToAvailable = function () {
        this._store.dispatch(new _actions_training_actions__WEBPACK_IMPORTED_MODULE_3__["AvaiableTraining"](this.availableTr));
    };
    // addToCompleted() {
    //   this._store.dispatch(new TrainingActions.CompletedTraining(this.ex));
    // }
    AppComponent.prototype.addNewToAvailable = function () {
        this._store.dispatch(new _actions_training_actions__WEBPACK_IMPORTED_MODULE_3__["AvaiableTraining"](this.completedTr));
    };
    // editText() {
    //   this._store.dispatch(new PostActions.EditText(this.text) );
    // }
    // resetPost() {
    //   this._store.dispatch(new PostActions.Reset());
    // }
    // upvote() {
    //   this._store.dispatch(new PostActions.Upvote());
    // }
    // downvote() {
    //   this._store.dispatch(new PostActions.Downvote());
    // }
    AppComponent.prototype.changeStatusTrue = function () {
        this._store.dispatch(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SetAuthenticated"]());
    };
    AppComponent.prototype.changeStatusFalse = function () {
        this._store.dispatch(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SetUnauthenticated"]());
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _blue_blue_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blue/blue.component */ "./src/app/blue/blue.component.ts");
/* harmony import */ var _green_green_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./green/green.component */ "./src/app/green/green.component.ts");
/* harmony import */ var _device_motion_device_motion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./device-motion/device-motion.component */ "./src/app/device-motion/device-motion.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _blue_blue_component__WEBPACK_IMPORTED_MODULE_7__["BlueComponent"], _green_green_component__WEBPACK_IMPORTED_MODULE_8__["GreenComponent"], _device_motion_device_motion_component__WEBPACK_IMPORTED_MODULE_9__["DeviceMotionComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["reducers"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducer.ts":
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/*! exports provided: reducers, getAuthState, getIsAuthenticated, getTrainingState, getAvailableTraining, getCompletedTraining, getActiveTraining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthState", function() { return getAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAuthenticated", function() { return getIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrainingState", function() { return getTrainingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableTraining", function() { return getAvailableTraining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompletedTraining", function() { return getCompletedTraining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveTraining", function() { return getActiveTraining; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/auth.reducer */ "./src/app/reducers/auth.reducer.ts");
/* harmony import */ var _reducers_training_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/training.reducer */ "./src/app/reducers/training.reducer.ts");



var reducers = {
    auth: _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"],
    training: _reducers_training_reducer__WEBPACK_IMPORTED_MODULE_2__["trainingReducer"]
};
var getAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
var getIsAuthenticated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsAuth"]);
var getTrainingState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('training');
var getAvailableTraining = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getTrainingState, _reducers_training_reducer__WEBPACK_IMPORTED_MODULE_2__["getavailableTraining"]);
var getCompletedTraining = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getTrainingState, _reducers_training_reducer__WEBPACK_IMPORTED_MODULE_2__["getfinishedTraining"]);
var getActiveTraining = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getTrainingState, _reducers_training_reducer__WEBPACK_IMPORTED_MODULE_2__["getactiveTraining"]);


/***/ }),

/***/ "./src/app/blue/blue.component.css":
/*!*****************************************!*\
  !*** ./src/app/blue/blue.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\r\n  background-color: #6699ff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmx1ZS9ibHVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9ibHVlL2JsdWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2Njk5ZmY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/blue/blue.component.html":
/*!******************************************!*\
  !*** ./src/app/blue/blue.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><span>Blue Component</span></div>\n\n<div *ngIf=\"(data | async)\">\n  <div>{{ (data | async).id }}</div>\n  <div>{{ (data | async).name }}</div>\n  <div>{{ (data | async).duration }}</div>\n  <div>{{ (data | async).calories }}</div>\n  <div>{{ (data | async).state }}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/blue/blue.component.ts":
/*!****************************************!*\
  !*** ./src/app/blue/blue.component.ts ***!
  \****************************************/
/*! exports provided: BlueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueComponent", function() { return BlueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.reducer */ "./src/app/app.reducer.ts");




var BlueComponent = /** @class */ (function () {
    function BlueComponent(_store) {
        this._store = _store;
    }
    BlueComponent.prototype.ngOnInit = function () {
        this.data = this._store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_3__["getAvailableTraining"]);
    };
    BlueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-blue",
            template: __webpack_require__(/*! ./blue.component.html */ "./src/app/blue/blue.component.html"),
            styles: [__webpack_require__(/*! ./blue.component.css */ "./src/app/blue/blue.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], BlueComponent);
    return BlueComponent;
}());



/***/ }),

/***/ "./src/app/device-motion/device-motion.component.css":
/*!***********************************************************!*\
  !*** ./src/app/device-motion/device-motion.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  text-align: center;\r\n}\r\n\r\n#block {\r\n  width: 150px;\r\n  height: 150px;\r\n  border: 4px solid blue;\r\n  border-top-color: red;\r\n  margin: 50px auto;\r\n  font-size: 40px;\r\n}\r\n\r\n#acc {\r\n  font-weight: bold;\r\n}\r\n\r\n#acc.yes {\r\n  color: green;\r\n}\r\n\r\n#acc.no {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlLW1vdGlvbi9kZXZpY2UtbW90aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFDRDtFQUNFLFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS1tb3Rpb24vZGV2aWNlLW1vdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jYmxvY2sge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsdWU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmVkO1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuI2FjYyB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNhY2MueWVzIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuI2FjYy5ubyB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/device-motion/device-motion.component.html":
/*!************************************************************!*\
  !*** ./src/app/device-motion/device-motion.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>HTML5 Accelerometer</h1>\n\n<section>\n  Accelerometer detected? <span id=\"acc\"></span><br />\n  alpha X: <input type=\"text\" readonly id=\"x\" value=\"\" /><br />\n  alpha Y: <input type=\"text\" readonly id=\"y\" value=\"\" /><br />\n  alpha Z: <input type=\"text\" readonly id=\"z\" value=\"\" /><br />\n</section>\n\n<div id=\"block\">↑</div>\n"

/***/ }),

/***/ "./src/app/device-motion/device-motion.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/device-motion/device-motion.component.ts ***!
  \**********************************************************/
/*! exports provided: DeviceMotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMotionComponent", function() { return DeviceMotionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeviceMotionComponent = /** @class */ (function () {
    function DeviceMotionComponent() {
    }
    DeviceMotionComponent.prototype.ngOnInit = function () {
        var DeviceMotionEvent = window.DeviceMotionEvent;
        console.log(DeviceMotionEvent);
        if (DeviceMotionEvent === undefined) {
            // window.webkitSpeechRecognition;
            document.querySelector('#acc').textContent = 'NO';
            document.querySelector('#acc').className = 'no';
        }
        else {
            document.querySelector('#acc').textContent = 'YES';
            document.querySelector('#acc').className = 'yes';
            // window.addEventListener('devicemotion', this.accelerometerUpdate, true);
        }
    };
    DeviceMotionComponent.prototype.accelerometerUpdate = function (event) {
        var aX = event.accelerationIncludingGravity.x * 10;
        var aY = event.accelerationIncludingGravity.y * 10;
        var aZ = event.accelerationIncludingGravity.z * 10;
        document.querySelector('#x').innerHTML = '' + aX;
        document.querySelector('#y').innerHTML = '' + aY;
        document.querySelector('#z').innerHTML = '' + aZ;
        if (aY < 0) {
            aX = -aX - 180;
        }
        //  document.querySelector('#block').style.transform = 'rotate(' + aX + 'deg)';
        document.getElementById('#block').style.transform = 'rotate(' + aX + 'deg)';
    };
    DeviceMotionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-motion',
            template: __webpack_require__(/*! ./device-motion.component.html */ "./src/app/device-motion/device-motion.component.html"),
            styles: [__webpack_require__(/*! ./device-motion.component.css */ "./src/app/device-motion/device-motion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeviceMotionComponent);
    return DeviceMotionComponent;
}());



/***/ }),

/***/ "./src/app/green/green.component.css":
/*!*******************************************!*\
  !*** ./src/app/green/green.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\r\n  background-color: #66ff99;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JlZW4vZ3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL2dyZWVuL2dyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZmZjk5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/green/green.component.html":
/*!********************************************!*\
  !*** ./src/app/green/green.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><span>Green Component</span></div>\n<div *ngIf=\"(data | async)\">\n  <div>{{ (data | async).id }}</div>\n  <div>{{ (data | async).name }}</div>\n  <div>{{ (data | async).duration }}</div>\n  <div>{{ (data | async).calories }}</div>\n  <div>{{ (data | async).state }}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/green/green.component.ts":
/*!******************************************!*\
  !*** ./src/app/green/green.component.ts ***!
  \******************************************/
/*! exports provided: GreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenComponent", function() { return GreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.reducer */ "./src/app/app.reducer.ts");




var GreenComponent = /** @class */ (function () {
    function GreenComponent(_store) {
        this._store = _store;
    }
    GreenComponent.prototype.ngOnInit = function () {
        this.data = this._store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_3__["getCompletedTraining"]);
    };
    GreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-green",
            template: __webpack_require__(/*! ./green.component.html */ "./src/app/green/green.component.html"),
            styles: [__webpack_require__(/*! ./green.component.css */ "./src/app/green/green.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], GreenComponent);
    return GreenComponent;
}());



/***/ }),

/***/ "./src/app/reducers/auth.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/auth.reducer.ts ***!
  \******************************************/
/*! exports provided: authReducer, getIsAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAuth", function() { return getIsAuth; });
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/actions/auth.actions.ts");

var initialState = {
    isAuthenticated: false
};
// const newState = (state, newData) => {
//     return Object.assign({}, state, newData);
// };
/// Reducer function
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    console.log(action.type, state);
    switch (action.type) {
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SET_AUTHENTICATED"]:
            return {
                isAuthenticated: true
            };
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SET_UNAUTHENTICATED"]:
            return {
                isAuthenticated: false
            };
        default:
            return state;
    }
}
var getIsAuth = function (state) { return (state.isAuthenticated); };


/***/ }),

/***/ "./src/app/reducers/training.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/reducers/training.reducer.ts ***!
  \**********************************************/
/*! exports provided: trainingReducer, getavailableTraining, getfinishedTraining, getactiveTraining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trainingReducer", function() { return trainingReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getavailableTraining", function() { return getavailableTraining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getfinishedTraining", function() { return getfinishedTraining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getactiveTraining", function() { return getactiveTraining; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_training_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/training.actions */ "./src/app/actions/training.actions.ts");


var initialState = {
    availableTraining: null,
    finishedTraining: null,
    activeTraining: null
};
function trainingReducer(state, action) {
    // console.log(state, action);
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_training_actions__WEBPACK_IMPORTED_MODULE_1__["SET_AVAILABLETRAINING"]:
            console.log("spread . .. ", state);
            console.log("payload . . .", action.payload);
            console.log("**", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { availableTraining: action.payload }));
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { availableTraining: action.payload });
        case _actions_training_actions__WEBPACK_IMPORTED_MODULE_1__["SET_COMPLETEDTRAINING"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { finishedTraining: action.payload });
        case _actions_training_actions__WEBPACK_IMPORTED_MODULE_1__["START_TRAINING"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { activeTraining: action.payload });
        case _actions_training_actions__WEBPACK_IMPORTED_MODULE_1__["STOP_TRAINING"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { activeTraining: null });
        default:
            return state;
    }
}
var getavailableTraining = function (state) {
    return state.availableTraining;
};
var getfinishedTraining = function (state) {
    return state.finishedTraining;
};
var getactiveTraining = function (state) { return state.activeTraining; };


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

module.exports = __webpack_require__(/*! C:\Users\abhina663445\Desktop\NgRXJS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map