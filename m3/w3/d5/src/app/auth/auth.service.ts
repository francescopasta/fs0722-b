import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppComponent } from '../app.component';

export interface SignupData {
    name: string,
    surname: string,
    email: string,
    password: string
}

export interface LoginData {
    email: string,
    password: string
}

export interface AuthData {
    accessToken: string,
    user: {
        email: string,
        id: number,
        name: string,
        surname: string
    }
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    jwtHelper = new JwtHelperService();
    URL = 'http://localhost:4201';
    private authSubject = new BehaviorSubject<null | AuthData>(null);
    user$ = this.authSubject.asObservable();
    isLoggedIn$ = this.user$.pipe(map(user => !!user));

    autoLogoutTimer: any;

    constructor(private http: HttpClient, private router: Router) {
        this.restoreUser();
    }

    //LOGIN/SIGNUP
    login(data: LoginData) {
        console.log(data);

        return this.http.post<AuthData>(`${this.URL}/login`, data).pipe(tap((data) => {
            localStorage.setItem('user', JSON.stringify(data));
            const expirationDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date;
            this.autoLogout(expirationDate)
            this.authSubject.next(data);
        }), catchError(this.errors)
        );
    }

    signup(data: SignupData) {
        return this.http.post(`${this.URL}/register`, data).pipe(catchError(this.errors));
    }



    restoreUser() {
        const userJson = localStorage.getItem('user');
        if (!userJson) {
            return;
        }
        const user: AuthData = JSON.parse(userJson);
        if (this.jwtHelper.isTokenExpired(user.accessToken)) {
            return;
        }
        this.authSubject.next(user);
        const expirationDate = this.jwtHelper.getTokenExpirationDate(user.accessToken) as Date;
        this.autoLogout(expirationDate);
    }


    logout() {
        this.authSubject.next(null);
        this.router.navigate(['/login']);

        localStorage.removeItem('user');
        if (this.autoLogoutTimer) {
            clearTimeout(this.autoLogoutTimer);
        }
    }

    autoLogout(expirationDate: Date) {
        const expMs = expirationDate.getTime() - new Date().getTime();
        this.autoLogoutTimer = setTimeout(() => {
            this.logout();
        }, expMs);
    }

    private errors(err: any) {
        switch (err.error) {
            case "Email and password are required":
                throw new Error('Email e password sono obbligatorie');
                break;
            case "Email already exists":
                return throwError('Utente già registrato');
                break;
            case "Email format is invalid":
                return throwError('Email scritta male');
                break;
            case "Cannot find user":
                return throwError('L\'utente non esiste');
                break;
            default:
                return throwError('Errore nella chiamata');
                break
        }
    }
}
