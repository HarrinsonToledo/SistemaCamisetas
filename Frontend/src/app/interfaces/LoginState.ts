import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

export interface datosLogin {
    User: string,
    Password: string
}

@Injectable({
    providedIn: 'root'
})
export class LoginState {
    private stateLogin: boolean;


    private constructor(private cookieService: CookieService) {
        this.stateLogin = false
    }

    public setLoginState() {
        this.stateLogin = true
    }

    public logOut() {
        this.stateLogin = false
    }

    public deleteCookie() {
        this.cookieService.delete('user');
        this.cookieService.delete('email');
        this.logOut();
    }

    public getState(): boolean {
        return this.stateLogin;
    }

    public createCookie(user: string, email: string) {
        this.cookieService.set('user', user)
        this.cookieService.set('email', email)
    }
}