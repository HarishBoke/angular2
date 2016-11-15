import {Component} from "@angular/core";
import {UserService} from "../../services/user.service";

@Component({
    selector: "user-profile",
    template: "user profile"
})
export class UserProfile{
    constructor(private _userService: UserService ){

    }
}