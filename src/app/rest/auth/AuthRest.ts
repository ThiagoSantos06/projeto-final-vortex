import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { SignInForm } from "./SignInForm";
import { SignInResponse } from "./SignInResponse";

@Injectable ({
    providedIn: 'root'
})
export class AuthRest {
    private readonly url: string = "api/auth"
    private http: HttpClient = inject(HttpClient)

    signIn(form: SignInForm) {
        return this.http.post<SignInResponse>(this.url, form)
    }
}