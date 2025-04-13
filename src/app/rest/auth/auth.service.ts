import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable ({
    providedIn: "root"
})
export class AuthService {
    isAuthenticate() {
        return Boolean(localStorage.getItem("user"))
    }

    signIn() {
        return Observable
    }
}