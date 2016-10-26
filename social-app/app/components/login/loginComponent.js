"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Login = (function () {
    function Login() {
        this.loged = false;
        this.user = { name: 'Hello' };
    }
    Login.prototype.statusChangeCallback = function (response) {
        if (response.status === 'connected') {
            console.log('connected');
        }
        else {
            this.login();
        }
    };
    Login.prototype.login = function () {
        var _this = this;
        FB.login(function (result) {
            _this.loged = true;
            _this.token = result;
        }, { scope: 'user_friends' });
    };
    Login.prototype.me = function () {
        FB.api('/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range,friends', function (result) {
            if (result && !result.error) {
                this.user = result;
                console.log(this.user);
            }
            else {
                console.log(result.error);
            }
        });
    };
    Login.prototype.ngOnInit = function () {
        var _this = this;
        FB.getLoginStatus(function (response) {
            _this.statusChangeCallback(response);
        });
    };
    Login = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: 'app/components/login/login.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=loginComponent.js.map