webpackJsonp([0],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlanPage = /** @class */ (function () {
    function PlanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlanPage');
    };
    PlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plan',template:/*ion-inline-start:"F:\Mofam\Demo\demo\src\pages\plan\plan.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      योजना (Plan)\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header has-footer">\n\n  <ion-card>\n\n    <ol>\n\n      <li>Contoso Ujala सदस्यता दो तरह के किसी एक उत्पाद को खरीदकर ग्रहण की जा सकती है।</li>\n\n      <li>उपहार योजना सभी तरह के सदस्यों के लिए सामान है, चाहे वो कोई भी उपरोक्त उत्पाद को खरीद कर सदस्य बने हो।</li>\n\n      <li>प्रति नए सदस्य जोड़ने पर 50 बोनस अंक मिलेंगे।</li>\n\n      <li>उपहार योजना बोनस अंकों पर आधारित हैं। जितने बोनस अंक होंगे उसी के आधार पर उपहार दिया जायेगा।</li>\n\n    </ol>\n\n  </ion-card>\n\n  <button ion-button>PLAN A</button>\n\n  <h2>Solar Magic Home Light System</h2>\n\n  <ion-card>\n\n    <button ion-button>सदस्यता शुल्क- 8500/-</button>\n\n    <ol>\n\n      <li>Solar Battery - 45 AH (एक साल गारंटी)</li>\n\n      <li>Solar Panel 65 Watt - 1</li>\n\n      <li>Solar Magic Box with Mobile Charger - 1</li>\n\n      <li>Solar Bulb - 6 Watt (3 Pcs.)</li>\n\n      <li>Connecting Wire and Cables.</li>\n\n      <li>Solar DC Fan - 24 Watt - 1</li>\n\n      <li>Free Installation</li>\n\n      <li>Transportation of Product paid by member</li>\n\n    </ol>\n\n  </ion-card>\n\n  <button ion-button>PLAN B</button>\n\n  <h2>Solar Mini Home Light System</h2>\n\n  <ion-card>\n\n    <button ion-button>सदस्यता शुल्क- 4500/-</button>\n\n    <ol>\n\n      <li>Solar Battery - 20 AH  (एक साल गारंटी)</li>\n\n      <li>Solar Panel 25 Watt – 1</li>\n\n      <li>Solar Magic Box with Mobile Charger – 1</li>\n\n      <li>Solar Bulb - 3 Watt (3 Pcs.)</li>\n\n      <li>Connecting wire and cables.</li>\n\n      <li>Free Installation</li>\n\n      <li>Transportation of product paid by member</li>\n\n    </ol>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Mofam\Demo\demo\src\pages\plan\plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PlanPage);
    return PlanPage;
}());

//# sourceMappingURL=plan.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bonuspoint/bonuspoint.module": [
		206
	],
	"../pages/changepassword/changepassword.module": [
		220
	],
	"../pages/contactus/contactus.module": [
		208
	],
	"../pages/dashboard/dashboard.module": [
		210
	],
	"../pages/forgotpassword/forgotpassword.module": [
		211
	],
	"../pages/login/login.module": [
		221
	],
	"../pages/plan/plan.module": [
		213
	],
	"../pages/register/register.module": [
		214
	],
	"../pages/requiredinfo/requiredinfo.module": [
		223
	],
	"../pages/rules/rules.module": [
		216
	],
	"../pages/uphaar/uphaar.module": [
		218
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonuspointPageModule", function() { return BonuspointPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bonuspoint__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BonuspointPageModule = /** @class */ (function () {
    function BonuspointPageModule() {
    }
    BonuspointPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bonuspoint__["a" /* BonuspointPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bonuspoint__["a" /* BonuspointPage */]),
            ],
        })
    ], BonuspointPageModule);
    return BonuspointPageModule;
}());

//# sourceMappingURL=bonuspoint.module.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BonuspointPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BonuspointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BonuspointPage = /** @class */ (function () {
    function BonuspointPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        };
    }
    BonuspointPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BonuspointPage');
    };
    BonuspointPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bonuspoint',template:/*ion-inline-start:"F:\Mofam\Demo\demo\src\pages\bonuspoint\bonuspoint.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n     बोनस अंक\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header has-footer">\n\n  <h2>बोनस अंकों पर आधारित उपहार योजना <br>(नगद या गिफ्ट - कोई एक)\n\n</h2>\n\n  <ion-card>\n\n    <table>\n\n      <thead>\n\n        <tr>\n\n          <th>क्रम सख्या</th>\n\n          <th>बोनस अंक</th>\n\n          <th>नगद</th>\n\n          <th>गिफ्ट</th>\n\n        </tr>\n\n      </thead>\n\n      <tbody>\n\n        <tr>\n\n          <td>1</td>\n\n          <td>100 अंक</td>\n\n          <td>500/-</td>\n\n          <td>Contoso T-Shirt</td>\n\n        </tr>\n\n         <tr>\n\n          <td>2</td>\n\n          <td>200 अंक</td>\n\n          <td>1,000/-</td>\n\n          <td>Mineral Water Purifier</td>\n\n        </tr>\n\n         <tr>\n\n          <td>3</td>\n\n          <td>400 अंक</td>\n\n          <td>2,100/-</td>\n\n          <td>Dinner Set</td>\n\n        </tr>\n\n         <tr>\n\n          <td>4</td>\n\n          <td>600 अंक</td>\n\n          <td>3,200/-</td>\n\n          <td>Steel Chair - 2</td>\n\n        </tr>        \n\n        <tr>\n\n          <td>5</td>\n\n          <td>800 अंक</td>\n\n          <td>4300/-</td>\n\n          <td>4 Set of Chair & Table</td>\n\n        </tr>\n\n        <tr>\n\n          <td>6</td>\n\n          <td>1,000 अंक</td>\n\n          <td>5,500/-</td>\n\n          <td>Steel Almirah</td>\n\n        </tr><tr>\n\n          <td>7</td>\n\n          <td>1,500 अंक</td>\n\n          <td>8,000/-</td>\n\n          <td>Mobile - Oppo</td>\n\n        </tr>\n\n        <tr>\n\n          <td>8</td>\n\n          <td>2,000 अंक</td>\n\n          <td>11,000/-</td>\n\n          <td>24" LED T.V.</td>\n\n        </tr>\n\n        <tr>\n\n          <td>9</td>\n\n          <td>3,000 अंक</td>\n\n          <td>17,000/-</td>\n\n          <td>Godrej Fridge</td>\n\n        </tr>\n\n        <tr>\n\n          <td>10</td>\n\n          <td>4,000 अंक</td>\n\n          <td>25,000/-</td>\n\n          <td>L.G. R.O. System</td>\n\n        </tr>\n\n        <tr>\n\n          <td>11</td>\n\n          <td>5,000 अंक</td>\n\n          <td>30,000/-</td>\n\n          <td>L.G. Washing Machine</td>\n\n        </tr>\n\n        <tr>\n\n          <td>12</td>\n\n          <td>7,500 अंक</td>\n\n          <td>42,500/-</td>\n\n          <td>Hero Motorcycle</td>\n\n        </tr>\n\n        <tr>\n\n          <td>13</td>\n\n          <td>10,000 अंक</td>\n\n          <td>60,000/-</td>\n\n          <td>Hero Scooty</td>\n\n        </tr>\n\n        <tr>\n\n          <td>14</td>\n\n          <td>15,000 अंक</td>\n\n          <td>85,000/-</td>\n\n          <td>Deluxe Sofa Set</td>\n\n        </tr>\n\n        <tr>\n\n          <td>15</td>\n\n          <td>20,000 अंक</td>\n\n          <td>1,25,000/-</td>\n\n          <td>Only Cash</td>\n\n        </tr>\n\n         <tr>\n\n          <td>16</td>\n\n          <td>25,000 अंक</td>\n\n          <td>1,50,000/-</td>\n\n          <td>Only Cash</td>\n\n        </tr>\n\n         <tr>\n\n          <td>17</td>\n\n          <td>30,000 अंक</td>\n\n          <td>2,00,000/-</td>\n\n          <td>Only Cash</td>\n\n        </tr>\n\n        <tr>\n\n          <td>18</td>\n\n          <td>40,000 अंक</td>\n\n          <td>2,60,000/-</td>\n\n          <td>Maruti Alto</td>\n\n        </tr>\n\n        <tr>\n\n          <td>19</td>\n\n          <td>50,000 अंक</td>\n\n          <td>3,00,000/-</td>\n\n          <td>Maruti Alto (Super)</td>\n\n        </tr>\n\n        <tr>\n\n          <td>20</td>\n\n          <td>1,00,000 अंक</td>\n\n          <td>7,00,000/-</td>\n\n          <td>Mahindra KUV - 100</td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="GoToDashboard()">Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Mofam\Demo\demo\src\pages\bonuspoint\bonuspoint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], BonuspointPage);
    return BonuspointPage;
}());

//# sourceMappingURL=bonuspoint.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactus__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactusPageModule = /** @class */ (function () {
    function ContactusPageModule() {
    }
    ContactusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contactus__["a" /* ContactusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contactus__["a" /* ContactusPage */]),
            ],
        })
    ], ContactusPageModule);
    return ContactusPageModule;
}());

//# sourceMappingURL=contactus.module.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactusPage = /** @class */ (function () {
    function ContactusPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        };
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
    };
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactus',template:/*ion-inline-start:"F:\Mofam\Demo\demo\src\pages\contactus\contactus.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      सम्पर्क करें\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header has-footer">\n\n  <h2>अधिकृत जानकारी हेतु सम्पर्क करें</h2>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>राकेश विश्वकर्मा</p>\n\n        <ion-icon name="call"></ion-icon>\n\n        +91-9795 933 389<br>\n\n        <ion-icon name="pin"></ion-icon>\n\n        मऊ, आज़मगढ़, बलिया, गाजीपुर </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>रूपेश श्रीवास्तव</p>\n\n        <ion-icon name="call"></ion-icon>\n\n        +91-9795 933 389<br>\n\n        <ion-icon name="pin"></ion-icon>\n\n        अमेठी, सुल्तानपुर, बाराबंकी अयोध्या, अम्बेडकर नगर</ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>प्रदीप सिंह</p>\n\n        <ion-icon name="call"></ion-icon>\n\n        +91-7607 779 035<br>\n\n        <ion-icon name="pin"></ion-icon>\n\n        प्रतापगढ़, प्रयागराज, जौनपुर, फतेहपुर, रायबरेली</ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>शान मोहम्मद</p>\n\n        <ion-icon name="call"></ion-icon>\n\n        +91-7849 860 009<br>\n\n        <ion-icon name="pin"></ion-icon>\n\n        मिर्जापुर, भदोही, रार्बट्सगंज </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>अखिलेश</p>\n\n        <ion-icon name="call"></ion-icon>\n\n        +91-7905 414 746<br>\n\n        <ion-icon name="pin"></ion-icon>\n\n        चंदौली, वाराणसी </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>भवानी प्रताप सिंह</p>\n\n        <ion-icon name="call"></ion-icon>\n\n        +91-9473 637 010<br>\n\n        <ion-icon name="pin"></ion-icon>\n\n        लखनऊ, हरदोई, उन्नाव, सीतापुर, लखीमपुर </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="GoToDashboard()">Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Mofam\Demo\demo\src\pages\contactus\contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotpassword__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotpasswordPageModule = /** @class */ (function () {
    function ForgotpasswordPageModule() {
    }
    ForgotpasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgotpassword__["a" /* ForgotpasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgotpassword__["a" /* ForgotpasswordPage */]),
            ],
        })
    ], ForgotpasswordPageModule);
    return ForgotpasswordPageModule;
}());

//# sourceMappingURL=forgotpassword.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpasswordPage');
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"F:\Mofam\Demo\demo\src\pages\forgotpassword\forgotpassword.html"*/'<ion-content class="has-footer ha-header">\n\n  <div class="login-page">\n\n    <div class="login-bg">\n\n      <div class="logo"><img src="../../assets/images/logo.png"></div>\n\n    </div>\n\n    <div class="login-form">\n\n    <div class="sub_header">Forgot Password</div>\n\n      <div class="input-wrap"><i class="material-icons">person</i>\n\n        <ion-icon name="business"></ion-icon>\n\n        <ion-item>\n\n          <ion-label color="" floating> Member ID</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap"> <i class="material-icons">phone</i>\n\n        <ion-item>\n\n          <ion-label color="" floating>Mobile</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <ion-row>\n\n      	<ion-col col-6><button ion-button>Submit</button></ion-col>\n\n      	<ion-col col-6><button ion-button>Cancel</button></ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Mofam\Demo\demo\src\pages\forgotpassword\forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPageModule", function() { return PlanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plan__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlanPageModule = /** @class */ (function () {
    function PlanPageModule() {
    }
    PlanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__plan__["a" /* PlanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__plan__["a" /* PlanPage */]),
            ],
        })
    ], PlanPageModule);
    return PlanPageModule;
}());

//# sourceMappingURL=plan.module.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"F:\Mofam\Demo\demo\src\pages\register\register.html"*/'<ion-content class="has-footer ha-header">\n\n  <div class="login-page">\n\n    <div class="login-bg">\n\n      <div class="logo"><img src="../../assets/images/logo.png"></div>\n\n    </div>\n\n    <div class="login-form">\n\n    <div class="sub_header">Member Registration</div>  \n\n    <ion-item>\n\n  <ion-label floating>Email</ion-label>\n\n  <ion-input type="email"></ion-input>\n\n</ion-item>\n\n      <div class="input-wrap">\n\n        <ion-item>\n\n          <ion-label color="" floating>Full Name</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap">\n\n        <ion-item>\n\n          <ion-label color="" floating>Mobile</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap">\n\n        <ion-item>\n\n          <ion-label color="" floating>State</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap">\n\n        <ion-item>\n\n          <ion-label color="" floating>Distract</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap">\n\n        <ion-item>\n\n          <ion-label color="" floating>City</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap">\n\n        <ion-item>\n\n          <ion-label color="" floating>Address</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap">\n\n        <ion-item>\n\n          <ion-label color="" floating>Pin</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap">\n\n        <ion-item>\n\n          <ion-label color="" floating>Aadhar No.</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap">\n\n        <ion-item>\n\n          <ion-label color="" floating>Account No.</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap">\n\n        <ion-item>\n\n          <ion-label color="" floating>IFSC Code</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap">\n\n        <ion-item>\n\n          <ion-label color="" floating>Bank Name</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap">\n\n        <ion-item>\n\n          <ion-label color="" floating>Branch</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Submit</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Mofam\Demo\demo\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesPageModule", function() { return RulesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rules__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RulesPageModule = /** @class */ (function () {
    function RulesPageModule() {
    }
    RulesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rules__["a" /* RulesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rules__["a" /* RulesPage */]),
            ],
        })
    ], RulesPageModule);
    return RulesPageModule;
}());

//# sourceMappingURL=rules.module.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RulesPage = /** @class */ (function () {
    function RulesPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        };
    }
    RulesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RulesPage');
    };
    RulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rules',template:/*ion-inline-start:"F:\Mofam\Demo\demo\src\pages\rules\rules.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      नियम और शर्तें\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header has-footer">\n\n  <h2>RULES AND REGULATIONS FOR CONTOSO UJALA SCHEME</h2>\n\n  <ion-card>\n\n    <ol>\n\n      <li>सदस्य का भारत का नागरिक होना अनिवार्य है।</li>\n\n      <li> एक सदस्य एक साथ असीमित सदस्यों को योजना में अपने सदस्यता कोड से सदस्य बना सकता है।</li>\n\n      <li> नगद का हस्तातांतरण सदस्य के दिए गए बैंक एकाउण्ट में ही होगा।</li>\n\n      <li>सदस्यों का ‘‘आधार’’ नम्बर अनिवार्य है।</li>\n\n      <li>एक सदस्य पूरे भारत वर्ष में कहीं भी सदस्य को नामित कर सकता है।</li>\n\n      <li> सदस्यता शुल्क प्राप्त होने के उपरांत कम से कम 7 दिन का समय Solar Magic Home Light System/ Solar Mini Home Light System के Delivery लिए चाहिए।</li>\n\n      <li> Product Delivery Charges (Transportके अनुसारद्ध जो भी देय होगा, उसे सदस्य को वहन करना होगा।</li>\n\n      <li> Warranty Claim के लिए 7 दिन का समय निर्धारित है। </li>\n\n      <li> किसी भी परिस्थिति में विवाद होने पर कंपनी का निर्णय अंतिम व सर्वमान्य होगा। </li>\n\n      <li> विवादों का न्यायिक क्षेत्र लखनऊ होगा।</li>\n\n    </ol>\n\n  </ion-card>\n\n  <ion-card>\n\n    <p><img src="../../assets/images/img1.png"></p>\n\n    <p>आपके द्वारा नामित सदस्य या सदस्यों के सदस्य भी किसी को नामित करते हैं तो सभी सदस्यों को 50 बोनस अंक मिलेंगे।</p>\n\n  </ion-card>\n\n  <ion-card>\n\n    <p><img src="../../assets/images/img2.png"></p>\n\n    <p>आपके द्वारा जितने सदस्य नामित किए जाएंगे उतने बोनस अंक प्रति सदस्य 50 के हिसाब से आपको मिलेंगे।</p>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="GoToDashboard()">Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Mofam\Demo\demo\src\pages\rules\rules.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RulesPage);
    return RulesPage;
}());

//# sourceMappingURL=rules.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UphaarPageModule", function() { return UphaarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uphaar__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UphaarPageModule = /** @class */ (function () {
    function UphaarPageModule() {
    }
    UphaarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__uphaar__["a" /* UphaarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__uphaar__["a" /* UphaarPage */]),
            ],
        })
    ], UphaarPageModule);
    return UphaarPageModule;
}());

//# sourceMappingURL=uphaar.module.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UphaarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UphaarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UphaarPage = /** @class */ (function () {
    function UphaarPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        };
    }
    UphaarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UphaarPage');
    };
    UphaarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-uphaar',template:/*ion-inline-start:"F:\Mofam\Demo\demo\src\pages\uphaar\uphaar.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      उपहार\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header has-footer">\n\n  <h2><span>CONTOSO उजाला</span> <br>\n\n    का सदस्य बनकर सोलर <br>\n\n    Magic Home Light System <br>\n\n    खरीदिए और इस योजना को अपने दोस्तों, सगे संबंधियों में रेफर करिए और पाइए ढेरो उपहार</h2>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro1.jpg"></div>\n\n        <p>सोलर होम लाइट सिस्टम</p>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro2.jpg"></div>\n\n        <p>मोबाइल</p>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro3.jpg"></div>\n\n        <p>सोलर चार्जर</p>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro4.jpg"></div>\n\n        <p>टी0 वी0</p>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro5.jpg"></div>\n\n        <p>स्कूटी</p>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro6.jpg"></div>\n\n        <p>वाटर प्यूरीफायर</p>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro7.jpg"></div>\n\n        <p>मोटर साइकिल</p>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro8.jpg"></div>\n\n        <p>कार</p>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="GoToDashboard()">Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Mofam\Demo\demo\src\pages\uphaar\uphaar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], UphaarPage);
    return UphaarPage;
}());

//# sourceMappingURL=uphaar.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangepasswordPageModule = /** @class */ (function () {
    function ChangepasswordPageModule() {
    }
    ChangepasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */]),
            ],
        })
    ], ChangepasswordPageModule);
    return ChangepasswordPageModule;
}());

//# sourceMappingURL=changepassword.module.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgotpassword_forgotpassword__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plan_plan__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GoToPlan = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__plan_plan__["a" /* PlanPage */]);
        };
        this.GoToDashboard = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        };
        this.GoToRegistration = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
        };
        this.GoToChangePassword = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\Mofam\Demo\demo\src\pages\login\login.html"*/'<ion-content class="has-footer ha-header">\n\n  <div class="login-page">\n\n    <div class="login-bg">\n\n      <div class="logo"><img src="../../assets/images/logo.png"></div>\n\n    </div>\n\n    <div class="login-form">\n\n      <div class="input-wrap"> <i class="material-icons">person</i>\n\n        <ion-item>\n\n          <ion-label color="" floating>Member ID</ion-label>\n\n          <ion-input></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap"> <i class="material-icons">lock_open</i>\n\n        <ion-item>\n\n          <ion-label color="" floating> Password</ion-label>\n\n          <ion-input type="password"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="onoffswitch-wrap">\n\n        <ion-row>\n\n          <ion-col>\n\n            <div class="onoffswitch">\n\n              <input type="checkbox" ng-model="form.allowVendor" name="remember" class="onoffswitch-checkbox" id="remember" >\n\n              <label class="onoffswitch-label" for="remember"> <span class="onoffswitch-inner"></span> <span class="onoffswitch-switch"></span></label>\n\n            </div>\n\n            <ion-label>Remember Me</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <button ion-button (click)="GoToDashboard()">Login</button>\n\n      <button ion-button (click)="GoToRegistration()">Member Registration</button>\n\n      <p (click)="GoToChangePassword()">Forgot Password?</p>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="GoToPlan()">View Join Package</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Mofam\Demo\demo\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredinfoPageModule", function() { return RequiredinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requiredinfo__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequiredinfoPageModule = /** @class */ (function () {
    function RequiredinfoPageModule() {
    }
    RequiredinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__requiredinfo__["a" /* RequiredinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__requiredinfo__["a" /* RequiredinfoPage */]),
            ],
        })
    ], RequiredinfoPageModule);
    return RequiredinfoPageModule;
}());

//# sourceMappingURL=requiredinfo.module.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequiredinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_linqts__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequiredinfoPage = /** @class */ (function () {
    function RequiredinfoPage(http, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datewisedata = [];
        this.info = {
            title: 'Chat Info',
            usemsg: '',
            group: [],
            groupcreatedday: '',
            userlist: [],
            mostmessager: {},
            leastmesseager: {},
            usermsgcount: [],
            totalmsg: '',
            totaluser: '',
            mostmessagerOfday: {},
            totalletter: '',
            totalwords: '',
            mediacount: 0,
            usermedia: '',
            mostmediabyuser: '',
            mostmsgdate: '',
            leastmsgdate: '',
            datewisemsgcount: [],
            datewiseusermessage: [],
            mostwordused: []
        };
        this.getmessagecount = function (db) {
            var groups = new __WEBPACK_IMPORTED_MODULE_1_linqts__["a" /* List */](db);
            var groupsdate = new __WEBPACK_IMPORTED_MODULE_1_linqts__["a" /* List */](_this.datewisedata);
            //  this.datewisedata
            var userlist = groups.Select(function (x) { return x.user; }).Distinct().ToArray();
            _this.info.userlist = userlist;
            var count = groups.Select(function (x) { return x.user; }).Distinct().Count();
            var users = groups.Select(function (x) { return x.user; }).Distinct().ToArray();
            var msgcount = groups.Select(function (x) { return x.message; }).Count();
            _this.info.totaluser = "Total user in group " + count;
            _this.info.totalmsg = "Total  messages are " + msgcount + " ";
            // console.log(`total count of message in group ${msgcount}`);
            var msgflow = groups.GroupBy(function (y) { return y.user; }, function (x) { return x.message; });
            var msgflowbydate = groupsdate.GroupBy(function (y) { return y.date; }, function (x) { return x.message; });
            var msgflowbydateuser = groupsdate.GroupBy(function (y) { return y.date; }, function (x) { return x; });
            // debugger;
            //console.log('userwisemsg'+msgflowbydateuser.toString());
            /** print chart Data  */
            _this.generategroupchartdata(msgflow);
            _this.generategroupchartdatabydate(msgflowbydate);
            _this.generateuserdatabydate(msgflowbydateuser);
            //
            /** print chart data end  */
        };
        this.removeWord = function (a, searchWord) {
            var str = a;
            var n = str.search(searchWord);
            while (str.search(searchWord) > -1) {
                n = str.search(searchWord);
                str = str.substring(0, n) + str.substring(n + searchWord.length, str.length);
            }
            return str;
        };
        this.countWords = function (s) {
            s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
            s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
            s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
            return s.split(' ').filter(function (str) { return str != ""; }).length;
        };
        this.getLocalData();
    }
    RequiredinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequiredinfoPage');
    };
    RequiredinfoPage.prototype.getLocalData = function () {
        var _this = this;
        this.http.get('../../assets/chat/chat.txt').map(function (res) { return res.text(); }).subscribe(function (data) {
            var datas = [];
            var getrowfromstring = data.split('\n');
            getrowfromstring.forEach(function (element) {
                var getdatefromrow = element.split('-');
                var dateflow = getdatefromrow[0].split(',');
                if (getdatefromrow[1] !== undefined) {
                    var splituser_msg = getdatefromrow[1].split(':');
                    var db_1 = { date: getdatefromrow[0], user: splituser_msg[0], message: splituser_msg[1] };
                    var dbdate = { date: dateflow[0], time: dateflow[1], user: splituser_msg[0], message: splituser_msg[1] };
                    _this.datewisedata.push(dbdate);
                    datas.push(db_1);
                }
            });
            var db = datas.filter(function (x) { return x.message !== undefined; });
            _this.datewisedata = _this.datewisedata.filter(function (x) { return x.message !== undefined; });
            //   console.table(this.datewisedata);
            // console.table(db);
            _this.info.group = db;
            var leastdate = new __WEBPACK_IMPORTED_MODULE_1_linqts__["a" /* List */](db).OrderBy(function (x) { return x.date; }).First();
            // console.table(leastdate);
            var date1 = new Date(leastdate.date);
            var date2 = new Date();
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
            _this.info.groupcreatedday = diffDays.toString();
            _this.getmessagecount(db);
        });
    };
    RequiredinfoPage.prototype.generategroupchartdata = function (db) {
        debugger;
        var Groupcircle = [];
        var Groupcirclemedia = [];
        var stringlength = '';
        var meadia = 0;
        for (var key in db) {
            if (db.hasOwnProperty(key)) {
                var s = '';
                for (var ss in db[key]) {
                    s += db[key][ss];
                    meadia = s.split(new RegExp("<Media omitted>", "gi")).length - 1;
                    stringlength += db[key][ss];
                }
                var info = { user: key, totalmsg: db[key].length, msgstring: s };
                var meadiainfo = { user: key, totalmsg: db[key].length, msgstring: meadia };
                Groupcircle.push(info);
                Groupcirclemedia.push(meadiainfo);
            }
        }
        //  word count success debugger;
        var dbs = this.removeWord(stringlength, '<Media omitted>'); //stringlength.replace(/<Media omitted>/g,' ');
        var a = this.nthMostCommon(dbs, 6);
        var emojicount = this.fancyCount(stringlength);
        console.log('total emoji' + emojicount);
        this.info.totalletter = stringlength.length;
        this.info.totalwords = this.countWords(stringlength);
        this.info.mediacount = stringlength.split(new RegExp("<Media omitted>", "gi")).length - 1;
        //  console.log('total words'+ this.info.totalwords);   
        this.info.usermsgcount = Groupcircle;
        this.info.usermedia = Groupcirclemedia;
        var mostmediabyuser = new __WEBPACK_IMPORTED_MODULE_1_linqts__["a" /* List */](Groupcirclemedia).OrderByDescending(function (x) { return x.msgstring; }).First();
        this.info.mostmediabyuser = mostmediabyuser.user;
        //  console.table('mostmediabyuser'+mostmediabyuser.user);
        var mostmessager = new __WEBPACK_IMPORTED_MODULE_1_linqts__["a" /* List */](Groupcircle).OrderByDescending(function (x) { return x.totalmsg; }).First();
        var leastmessager = new __WEBPACK_IMPORTED_MODULE_1_linqts__["a" /* List */](Groupcircle).OrderByDescending(function (x) { return x.totalmsg; }).Last();
        this.info.mostmessager = mostmessager;
        this.info.leastmesseager = leastmessager;
        // this.generategroupchartdatabydate(usermedia);
    };
    RequiredinfoPage.prototype.generategroupchartdatabydate = function (db) {
        var Groupcircle = [];
        for (var key in db) {
            if (db.hasOwnProperty(key)) {
                var info = { date: key, totalmsg: db[key].length };
                Groupcircle.push(info);
            }
        }
        new __WEBPACK_IMPORTED_MODULE_1_linqts__["a" /* List */](Groupcircle).OrderBy(function (x) { return new Date(x.date.toString('dd-MMM-yyyy')); });
        this.info.datewisemsgcount = Groupcircle;
        // console.table(this.info.datewisemsgcount);
        var mostmessagerdate = new __WEBPACK_IMPORTED_MODULE_1_linqts__["a" /* List */](Groupcircle).OrderBy(function (x) { return new Date(x.date.toString('dd-MMM-yyyy')); }).OrderByDescending(function (x) { return x.totalmsg; }).First();
        var leastmessagerdate = new __WEBPACK_IMPORTED_MODULE_1_linqts__["a" /* List */](Groupcircle).OrderBy(function (x) { return new Date(x.date.toString('dd-MMM-yyyy')); }).OrderByDescending(function (x) { return x.totalmsg; }).Last();
        this.info.mostmsgdate = mostmessagerdate;
        this.info.leastmsgdate = leastmessagerdate;
    };
    RequiredinfoPage.prototype.generateuserdatabydate = function (db) {
        var Groupcircle = [];
        for (var key in db) {
            if (db.hasOwnProperty(key)) {
                var userinfodate = new __WEBPACK_IMPORTED_MODULE_1_linqts__["a" /* List */](db[key]).GroupBy(function (y) { return y.user; }, function (x) { return x.message; });
                for (var keys in userinfodate) {
                    if (userinfodate.hasOwnProperty(keys)) {
                        var info = { date: key, user: keys, totalmesage: userinfodate[keys].length };
                        Groupcircle.push(info);
                    }
                }
            }
            this.info.datewiseusermessage = Groupcircle;
            //  console.table(Groupcircle);
        }
    };
    RequiredinfoPage.prototype.fancyCount = function (str) {
        return /[^\u0000-\u00ff]/.test(str);
        // return Array.from(str.split(/[\ufe00-\ufe0f]/).join("")).length;
    };
    /** find most  common world used Begin */
    RequiredinfoPage.prototype.nthMostCommon = function (string, ammount) {
        var wordsArray = string.split(/\s/);
        var wordOccurrences = {};
        for (var i = 0; i < wordsArray.length; i++) {
            wordOccurrences['_' + wordsArray[i]] = (wordOccurrences['_' + wordsArray[i]] || 0) + 1;
        }
        var result = Object.keys(wordOccurrences).reduce(function (acc, currentKey) {
            /* you may want to include a binary search here */
            for (var i = 0; i < ammount; i++) {
                if (!acc[i]) {
                    acc[i] = { word: currentKey.slice(1, currentKey.length), occurences: wordOccurrences[currentKey] };
                    break;
                }
                else if (acc[i].occurences < wordOccurrences[currentKey]) {
                    acc.splice(i, 0, { word: currentKey.slice(1, currentKey.length), occurences: wordOccurrences[currentKey] });
                    if (acc.length > ammount)
                        acc.pop();
                    break;
                }
            }
            return acc;
        }, []);
        return result;
    };
    /** find most common world used END */
    //Accordine Open
    RequiredinfoPage.prototype.ngOnInit = function () {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                }
                else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    };
    RequiredinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-requiredinfo',template:/*ion-inline-start:"F:\Mofam\Demo\demo\src\pages\requiredinfo\requiredinfo.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{info.title}}</ion-title>\n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n<ion-content class="has-header has-footer">\n\n  <!-- <h2><span> -->\n\n    <ion-icon name="information-circle-outline"></ion-icon>\n\n    <!-- This work order type requires additional information</span></h2> -->\n\n  <div class="accordion_wrap">\n\n    <!-- /* Group Data*/ -->\n\n    <div>\n\n      <button class="accordion">Available Group Data</button>\n\n      <div class="panel radio_text">\n\n          <ion-grid>\n\n              <ion-row>\n\n                <ion-col><div>S.No.</div></ion-col>\n\n                <ion-col><div> Date</div></ion-col>\n\n                <ion-col><div>User</div></ion-col>\n\n                <ion-col><div>Message</div></ion-col>\n\n              </ion-row>\n\n               <ion-row *ngFor="let item of info.group;let i=index;">\n\n                  <ion-col><div>{{i+1}}</div></ion-col>\n\n                  <ion-col><div>{{item.date}}</div></ion-col>\n\n                  <ion-col><div>{{item.user}}</div></ion-col>\n\n                  <ion-col><div>{{item.message}}</div></ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n\n\n      </div>\n\n    </div>\n\n    <!-- /* Group Data End*/ -->\n\n    \n\n    <!-- /* Total Message By User*/ -->\n\n    <div>\n\n        <button class="accordion">Total Message Count  By User</button>\n\n        <div class="panel radio_text">\n\n            <ion-grid>\n\n                <ion-row>\n\n              <ion-col><div>S.No.</div></ion-col>\n\n              <ion-col><div>User</div></ion-col>\n\n              <ion-col><div> Message Count</div></ion-col>\n\n                </ion-row>\n\n                <ion-row *ngFor="let item of info.usermsgcount;let i=index;">\n\n                    <ion-col>\n\n                      <div>\n\n                        {{i+1}}\n\n                      </div>\n\n                    </ion-col>\n\n\n\n                    <ion-col>\n\n                      <div>\n\n                        {{item.user}}\n\n                      </div>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <div>\n\n                          {{item.totalmsg}}\n\n                        </div>\n\n                      </ion-col>\n\n                  </ion-row>\n\n              </ion-grid>\n\n  \n\n        </div>\n\n      </div>\n\n      <!-- /* Group Data End*/ -->\n\n    \n\n    <!-- /* Group Data*/ -->\n\n    <div>\n\n        <button class="accordion">Members in a group</button>\n\n        <div class="panel radio_text">\n\n            <ion-grid>\n\n                <ion-row>\n\n                  <ion-col>\n\n                    <div>\n\n                      S.No.\n\n                    </div>\n\n                  </ion-col>\n\n                  \n\n                  <ion-col>\n\n                    <div>\n\n                      User\n\n                    </div>\n\n                  </ion-col>\n\n                  \n\n                </ion-row>\n\n                <ion-row *ngFor="let item of info.userlist;let i=index;">\n\n                    <ion-col>\n\n                      <div>\n\n                        {{i+1}}\n\n                      </div>\n\n                    </ion-col>\n\n\n\n                    <ion-col>\n\n                      <div>\n\n                        {{item}}\n\n                      </div>\n\n                    </ion-col>\n\n                    \n\n                  </ion-row>\n\n              </ion-grid>\n\n  \n\n        </div>\n\n      </div>\n\n      <!-- /* Group Data End*/ -->\n\n    \n\n      <!-- / * Most Messager In Group  Begin*/ -->\n\n      <div>\n\n          <button class="accordion"> Who Send Most Message In Group</button>\n\n          <div class="panel">\n\n            <p>\n\n              <ion-item>\n\n                <ion-label color="primary" floating>User :- {{info.mostmessager.user}} ({{info.mostmessager.totalmsg}})</ion-label>\n\n                <ion-input readonly="true"></ion-input>\n\n              </ion-item>\n\n            \n\n            </p>\n\n          </div>\n\n        </div>\n\n      <!-- /* Most Messager In Group End*/ -->\n\n    \n\n<!-- / * Most Active User In Group  Begin*/ -->\n\n<div>\n\n    <button class="accordion">Most Active User In Group</button>\n\n    <div class="panel">\n\n      <p>\n\n        <ion-item>\n\n          <ion-label color="primary" floating>User :- {{info.mostmessager.user}} </ion-label>\n\n          <ion-input readonly="true"></ion-input>\n\n        </ion-item>\n\n      \n\n      </p>\n\n    </div>\n\n  </div>\n\n<!-- /* Most Messager In Group End*/ -->\n\n\n\n    <!-- / * Least Messager In Group  Begin*/ -->\n\n    <div>\n\n        <button class="accordion">Least Messager In Group</button>\n\n        <div class="panel">\n\n          <p>\n\n            <ion-item>\n\n              <ion-label color="black" floating>User :- {{info.leastmesseager.user}} ({{info.leastmesseager.totalmsg}})</ion-label>\n\n              <ion-input readonly="true"></ion-input>\n\n            </ion-item>\n\n          \n\n          </p>\n\n        </div>\n\n      </div>\n\n    <!-- /* Least Messager In Group End*/ -->\n\n    <!-- / * Total User*/ -->\n\n    <div>\n\n        <button class="accordion">Total User In Group</button>\n\n        <div class="panel">\n\n          <p>\n\n            <ion-item>\n\n              <ion-label color="primary" floating>{{info.totaluser}}</ion-label>\n\n              <ion-input readonly="true"></ion-input>\n\n            </ion-item>\n\n          \n\n          </p>\n\n        </div>\n\n      </div>\n\n\n\n      <div>\n\n          <button class="accordion">Number of Day From Group Creation .</button>\n\n          <div class="panel">\n\n            <p>\n\n              \n\n              <ion-item>\n\n                  <ion-label color="primary" floating>{{info.groupcreatedday}}</ion-label>\n\n                  <ion-input readonly="true"></ion-input>\n\n                </ion-item>\n\n            </p>\n\n          </div>\n\n        </div>\n\n    <!-- /* Total User*/ -->\n\n    <div>\n\n      <button class="accordion">Total Messages  in a Group</button>\n\n      <div class="panel">\n\n        <p>\n\n          \n\n          <ion-item>\n\n              <ion-label color="primary" floating>{{info.totalmsg}}</ion-label>\n\n              <ion-input readonly="true"></ion-input>\n\n            </ion-item>\n\n        </p>\n\n      </div>\n\n    </div>\n\n     <!-- / * member who send most messages of the day.  Begin*/ -->\n\n     <div>\n\n      <button class="accordion">  Total Letters In Group Message </button>\n\n      <div class="panel">\n\n        <p>\n\n          <ion-item>\n\n            <ion-label color="black" floating>Letters :- {{info.totalletter}}</ion-label>\n\n            <ion-input readonly="true"></ion-input>\n\n          </ion-item>\n\n        \n\n        </p>\n\n      </div>\n\n    </div>\n\n <!-- / * Least active days of the group.  Begin*/ -->\n\n    <div>\n\n      <button class="accordion"> Total words written in a group till now since creation</button>\n\n      <div class="panel">\n\n        <p>\n\n          <ion-item>\n\n            <ion-label color="black" floating>Total Words :- {{info.totalwords}}</ion-label>\n\n            <ion-input readonly="true"></ion-input>\n\n          </ion-item>\n\n        \n\n        </p>\n\n      </div>\n\n    </div>\n\n\n\n <!-- / * Most active days of the group.  Begin*/ -->\n\n    <div>\n\n      <button class="accordion"> Total count of media messages in a group</button>\n\n      <div class="panel">\n\n        <p>\n\n          <ion-item>\n\n            <ion-label color="black" floating>Total Media :- {{info.mediacount}}</ion-label>\n\n            <ion-input readonly="true"></ion-input>\n\n          </ion-item>\n\n        \n\n        </p>\n\n      </div>\n\n    </div>\n\n     <!-- / * Count Of Media Sent By individual member.  Begin*/ -->\n\n    <div>\n\n      <button class="accordion"> Total count of media posted by each member </button>\n\n      <div class="panel">\n\n        <ion-grid>\n\n          <ion-row>\n\n        <ion-col><div>S.No.</div></ion-col>\n\n        <ion-col><div>User</div></ion-col>\n\n        <ion-col><div> Message Count</div></ion-col>\n\n        <ion-col><div> Media Count</div></ion-col>\n\n          </ion-row>\n\n          <ion-row *ngFor="let item of info.usermedia;let i=index;">\n\n              <ion-col>\n\n                <div>\n\n                  {{i+1}}\n\n                </div>\n\n              </ion-col>\n\n\n\n              <ion-col>\n\n                <div>\n\n                  {{item.user}}\n\n                </div>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <div>\n\n                    {{item.totalmsg}}\n\n                  </div>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <div>\n\n                    {{item.msgstring}}\n\n                  </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </div>\n\n     \n\n    <div>\n\n      <button class="accordion">  Which member has posted most media in the group</button>\n\n      <div class="panel">\n\n        <p>\n\n          <ion-item>\n\n            <ion-label color="black" floating>Most Media By User :- {{info.mostmediabyuser}}</ion-label>\n\n            <ion-input readonly="true"></ion-input>\n\n          </ion-item>\n\n        \n\n        </p>\n\n      </div>\n\n    </div>\n\n \n\n    <div>\n\n      <button class="accordion"> Day since group creation when most count of messages is posted (Date)</button>\n\n      <div class="panel">\n\n        <p>\n\n          <ion-item>\n\n            <ion-label color="black" floating>Date:- {{info.mostmsgdate.date}}</ion-label>\n\n            <ion-input readonly="true"></ion-input>\n\n          </ion-item>\n\n        \n\n        </p>\n\n      </div>\n\n    </div>\n\n    <div>\n\n      <button class="accordion">Date when most messages are posted by individual member(Date)</button>\n\n      <div class="panel">\n\n        <p>\n\n          <ion-item>\n\n            <ion-label color="black" floating>Date:- {{info.mostmsgdate.date}}</ion-label>\n\n            <ion-input readonly="true"></ion-input>\n\n          </ion-item>\n\n        \n\n        </p>\n\n      </div>\n\n    </div>\n\n \n\n    <div>\n\n      <button class="accordion">Date when least messages were sent in the group.(Date)</button>\n\n      <div class="panel">\n\n        <p>\n\n          <ion-item>\n\n            <ion-label color="black" floating>Date:- {{info.leastmsgdate.date}}</ion-label>\n\n            <ion-input readonly="true"></ion-input>\n\n          </ion-item>\n\n        \n\n        </p>\n\n      </div>\n\n    </div>\n\n    <!-- //Count of messages sent by individual member each day -->\n\n    <div>\n\n      <button class="accordion">Total count of messages each day since group creation</button>\n\n      <div class="panel">\n\n        <ion-grid>\n\n          <ion-row>\n\n        <ion-col><div>S.No.</div></ion-col>\n\n        <ion-col><div>Date</div></ion-col>\n\n        <ion-col><div> Message Count</div></ion-col>\n\n      \n\n          </ion-row>\n\n          <ion-row *ngFor="let item of info.datewisemsgcount;let i=index;">\n\n              <ion-col>\n\n                <div>\n\n                  {{i+1}}\n\n                </div>\n\n              </ion-col>\n\n\n\n              <ion-col>\n\n                <div>\n\n                  {{item.date}}\n\n                </div>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <div>\n\n                    {{item.totalmsg}}\n\n                  </div>\n\n                </ion-col>\n\n                \n\n            </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </div>\n\n    <div>\n\n      <button class="accordion">Count of messages sent by individual member each day</button>\n\n      <div class="panel">\n\n        <ion-grid>\n\n          <ion-row>\n\n        <ion-col><div>S.No.</div></ion-col>\n\n        <ion-col><div>Date</div></ion-col>\n\n        <ion-col><div> user</div></ion-col>\n\n        <ion-col><div> Message Count</div></ion-col>\n\n          </ion-row>\n\n          <ion-row *ngFor="let item of info.datewiseusermessage;let i=index;">\n\n              <ion-col>\n\n                <div>\n\n                  {{i+1}}\n\n                </div>\n\n              </ion-col>\n\n\n\n              <ion-col>\n\n                <div>\n\n                  {{item.date}}\n\n                </div>\n\n              </ion-col>\n\n              <ion-col>\n\n                <div>\n\n                  {{item.user}}\n\n                </div>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <div>\n\n                    {{item.totalmesage}}\n\n                  </div>\n\n                </ion-col>\n\n                \n\n            </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n    </div>\n\n\n\n    <div>\n\n      <button class="accordion">Most active day of the group</button>\n\n      <div class="panel">\n\n        <p>\n\n          <ion-item>\n\n            <ion-label color="black" floating>Date:- {{info.mostmsgdate.date}}</ion-label>\n\n            <ion-input readonly="true"></ion-input>\n\n          </ion-item>\n\n        \n\n        </p>\n\n      </div>\n\n    </div>\n\n \n\n    <div>\n\n      <button class="accordion">Least active day of the group</button>\n\n      <div class="panel">\n\n        <p>\n\n          <ion-item>\n\n            <ion-label color="black" floating>Date:- {{info.leastmsgdate.date}}</ion-label>\n\n            <ion-input readonly="true"></ion-input>\n\n          </ion-item>\n\n        \n\n        </p>\n\n      </div>\n\n    </div>\n\n\n\n\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"F:\Mofam\Demo\demo\src\pages\requiredinfo\requiredinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]])
    ], RequiredinfoPage);
    return RequiredinfoPage;
}());

//# sourceMappingURL=requiredinfo.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(369);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_bonuspoint_bonuspoint_module__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_changepassword_changepassword_module__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_forgotpassword_forgotpassword_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contactus_contactus_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_uphaar_uphaar_module__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_plan_plan_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_rules_rules_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_register_register_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_service_service__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_requiredinfo_requiredinfo_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_16__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_requiredinfo_requiredinfo_module__["RequiredinfoPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_rules_rules_module__["RulesPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_plan_plan_module__["PlanPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_uphaar_uphaar_module__["UphaarPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_contactus_contactus_module__["ContactusPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_changepassword_changepassword_module__["ChangepasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_forgotpassword_forgotpassword_module__["ForgotpasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_bonuspoint_bonuspoint_module__["BonuspointPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bonuspoint/bonuspoint.module#BonuspointPageModule', name: 'BonuspointPage', segment: 'bonuspoint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plan/plan.module#PlanPageModule', name: 'PlanPage', segment: 'plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rules/rules.module#RulesPageModule', name: 'RulesPage', segment: 'rules', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uphaar/uphaar.module#UphaarPageModule', name: 'UphaarPage', segment: 'uphaar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/requiredinfo/requiredinfo.module#RequiredinfoPageModule', name: 'RequiredinfoPage', segment: 'requiredinfo', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_service_service__["a" /* ServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        };
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"F:\Mofam\Demo\demo\src\pages\changepassword\changepassword.html"*/'<ion-content class="has-footer ha-header">\n\n  <div class="login-page">\n\n    <div class="login-bg">\n\n      <div class="logo"><img src="../../assets/images/logo.png"></div>\n\n    </div>\n\n    <div class="login-form">\n\n    <div class="sub_header">Change Password</div>\n\n     <p>Passwords must be at least eight characters in length and must contain at least one uppercase character, one lowercase character, and one number or special character.</p>\n\n      <div class="input-wrap"> <i class="material-icons">lock_open</i>\n\n        <ion-item>\n\n          <ion-label color="" floating> Old Password</ion-label>\n\n          <ion-input type="password"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap"> <i class="material-icons">lock_open</i>\n\n        <ion-item>\n\n          <ion-label color="" floating> New Password</ion-label>\n\n          <ion-input type="password"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap"> <i class="material-icons">lock_open</i>\n\n        <ion-item>\n\n          <ion-label color="" floating> Confirm Password</ion-label>\n\n          <ion-input type="password"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <ion-row>\n\n      	<ion-col col-6><button ion-button>Submit</button></ion-col>\n\n      	<ion-col col-6><button ion-button>Cancel</button></ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="GoToDashboard()">Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"F:\Mofam\Demo\demo\src\pages\changepassword\changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"F:\Mofam\Demo\demo\src\pages\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      Dashboard\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header has-footer">\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>बोनस अंक</p>\n\n        <h1>400</h1>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>उपहार</p>\n\n        <h1>₹ 2,100</h1>\n\n        <h2>OR</h2>\n\n        <h1>Dinner Set</h1>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Mofam\Demo\demo\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_plan_plan__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_bonuspoint_bonuspoint__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_uphaar_uphaar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_rules_rules__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contactus_contactus__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_requiredinfo_requiredinfo__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_requiredinfo_requiredinfo__["a" /* RequiredinfoPage */];
        this.GoToPlan = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_plan_plan__["a" /* PlanPage */]);
        };
        this.GoToDashboard = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */]);
        };
        this.GoToUphaar = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_uphaar_uphaar__["a" /* UphaarPage */]);
        };
        this.GoToContact = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_contactus_contactus__["a" /* ContactusPage */]);
        };
        this.GoTologin = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        };
        this.GoToRules = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_rules_rules__["a" /* RulesPage */]);
        };
        this.GoToBonus = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_bonuspoint_bonuspoint__["a" /* BonuspointPage */]);
        };
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Mofam\Demo\demo\src\app\app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n\n  <ion-content class=\'menu-listing\'>\n\n    <ion-item class="profile-item" menuClose>\n\n      <div class="profile-picture"> <img src="../../assets/images/no_img.jpg" /> </div>\n\n      <h2 class="user-name">Contoso Ujala</h2>\n\n      <div class="user-address">Lucknow</div>\n\n    </ion-item>\n\n    <ion-list menuClose>\n\n      <button ion-item (click)="GoToDashboard()">\n\n      <ion-icon name="speedometer"></ion-icon>\n\n      डैशबोर्ड (Dashboard)</button>\n\n      <button ion-item (click)="GoToPlan()">\n\n      <ion-icon name="bulb"></ion-icon>\n\n      योजना (Plan)</button>\n\n      <button ion-item (click)="GoToBonus()">\n\n      <ion-icon name="trophy"></ion-icon>\n\n      बोनस अंक (Bonus Point)</button>\n\n      <button ion-item (click)="GoToUphaar()">\n\n      <ion-icon name="megaphone"></ion-icon>\n\n      उपहार (Gift)</button>\n\n      <button ion-item (click)="GoToRules()">\n\n      <ion-icon name="clipboard"></ion-icon>\n\n      नियम और शर्तें (Rules and Regulations)</button>\n\n      <button ion-item (click)="GoToContact()">\n\n      <ion-icon name="call"></ion-icon>\n\n      सम्पर्क करें (Contact Us)</button>\n\n    </ion-list>\n\n    <ion-footer class=\'logout-menuitem\' menuClose>\n\n      <ion-toolbar>\n\n        <button ion-item nav-clear menu-close (click)="GoTologin()">\n\n        <ion-icon name="exit" class="bg-red"></ion-icon>\n\n        Log Out </button>\n\n      </ion-toolbar>\n\n    </ion-footer>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\Mofam\Demo\demo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\Mofam\Demo\demo\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title> Ionic Blank </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding> The world is your oyster.\n\n  <p> If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide. </p>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Mofam\Demo\demo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(http) {
        var _this = this;
        this.http = http;
        this.getlogin = function (username, pass) {
            var murl = _this.url + ("UserLogin/Login/" + username + "/" + pass);
            return _this.http.get(murl);
        };
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ })

},[364]);
//# sourceMappingURL=main.js.map