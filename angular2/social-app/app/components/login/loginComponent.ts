import {Component} from '@angular/core';
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
            } 
        }

}