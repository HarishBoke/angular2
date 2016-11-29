import {Component} from "@angular/core";
import {UserService} from "../../services/user.service";

@Component({
    selector: "user-profile",
    template: "</h1>user profile</h1>"
})
export class UserProfile{
    constructor(private _userService: UserService ){

    }
}