import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { SignUpForm } from "./SignUpForm";

@Injectable ({
    providedIn: 'root'
})
export class UserRest {
    private readonly url: string = "api/user"
    private http: HttpClient = inject(HttpClient)

    signUp(form: SignUpForm) {
        return this.http.post(this.url, form)
    }
}