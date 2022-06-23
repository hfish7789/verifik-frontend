import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment';


@Injectable()
export class AuthService
{
    private _authenticated: boolean = false;

    private baseUrl = environment.baseUrl;

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService
    )
    {
        
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string)
    {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string
    {
        return localStorage.getItem('accessToken') ?? '';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param phone
     */
    forgotPassword(phone: any): Observable<any>
    {
        return this._httpClient.post(this.baseUrl + 'v2/auth/client/request-otp', phone);
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(data: any): Observable<any>
    {
        return this._httpClient.post(this.baseUrl + 'v2/auth/client/recovery-otp', data)
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: { email: string; password: string }): Observable<any>
    {
        // Throw error, if the user is already logged in
        if ( this._authenticated )
        {
            return throwError('User is already logged in.');
        }

        return this._httpClient.post(this.baseUrl + 'v2/auth/login', credentials).pipe(
            switchMap((response: any) => {
                localStorage.setItem('accessToken', response.accessToken);

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return a new observable with the response
                return of(response);
            })
        );
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<any>
    {
        const accessToken = localStorage.getItem('accessToken');
        
        return this._httpClient.post(this.baseUrl + 'v2/auth/session', {
            accessToken,
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }).pipe(
            catchError(() =>
                of(false)
            ),
            switchMap((response: any) => {
                // Store the access token in the local storage
                if (!response || response.accessToken.length < 10) {
                    return of(false);
                }

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                localStorage.setItem('user', JSON.stringify(response.user));

                // Return true
                return of(Boolean(accessToken.length > 10));
            })
        );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any>
    {
        // Remove the access token from the local storage
        localStorage.removeItem('accessToken');

        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(client: { name: string; email: string; password: string; phone: string }): Observable<any>
    {
        return this._httpClient.post(this.baseUrl + 'v2/auth/signup', client, {}).pipe(
            catchError(() =>
                of(false)
            ),
            switchMap((response: any) => {
                // Store the access token in the local storage
                this.accessToken = response.accessToken;

                localStorage.setItem('accessToken', response.accessToken);

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return true
                return of(Boolean(this.accessToken));
            })
        );
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { email: string; password: string }): Observable<any>
    {
        return this._httpClient.post(this.baseUrl + 'v2/auth/unlock-session', credentials);
    }

    /**
     * update client
     *
     * @param data
     */
    // updateClient(data: any): Observable<any>
    // {
    //     return this._httpClient.put('v2/clients', {
    //         data,
    //     }, {
    //         headers: {
    //             Authorization: `Bearer ${this.accessToken}`,
    //         }
    //     } );
    // }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean>
    {
        // Check if the user is logged in
        const accessToken = localStorage.getItem('accessToken')
    
        if (!accessToken || Boolean(accessToken.length < 10)) {
            return of(false);
        }

        // If the access token exists and it didn't expire, sign in using it
        return this.signInUsingToken();
    }
}
