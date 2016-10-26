import {Component} from '@angular/core';
declare const FB: any;
@Component({
    selector:'app-login',
    templateUrl:'app/components/login/login.html'
})
export class Login{
        token: any;
        loged: boolean = false;
        user = { name: 'Hello' };

        constructor() { }

        statusChangeCallback(response: any) {
            if (response.status === 'connected') {
                console.log('connected');
            } else {
                this.login();
            }
        }

        login() {
            FB.login((result: any) => {
                this.loged = true;
                this.token = result;
            }, { scope: 'user_friends' });
        }

        me() {
            FB.api('/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range,friends',
                function(result) {
                    if (result && !result.error) {
                        this.user = result;
                        console.log(this.user);
                    } else {
                        console.log(result.error);
                    }
                });
        }

        ngOnInit() {
            FB.getLoginStatus(response => {
                this.statusChangeCallback(response);
            });
        }
}