import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable ({
    providedIn: "root"
})
export class AuthService {
    constructor(private router: Router) {}

    isAuthenticate() {
        return Boolean(localStorage.getItem("user"))
    }

    signIn() {
        return Observable
    }

    logout() {
        localStorage.removeItem("user");
        this.router.navigate(['/login']);
    }
}