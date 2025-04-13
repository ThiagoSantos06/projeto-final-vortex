import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable ({
    providedIn: "root"
})
export class AuthService {
    isAuthenticate() {
        localStorage
        const user = localStorage.getItem("user")
        debugger
        return Boolean(user)
    }
}