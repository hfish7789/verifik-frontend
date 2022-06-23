import {
    Injectable
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    Observable,
    ReplaySubject
} from 'rxjs';
import {
    map,
    tap
} from 'rxjs/operators';
import {
    User
} from 'app/core/user/user.types';
import { HttpWrapperService } from '../services/http-wrapper.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _user: ReplaySubject < User > = new ReplaySubject < User > (1);
    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient, private _httpWrapper: HttpWrapperService) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set user(value: User) {
        // Store the value
        this._user.next(value);
    }

    get user$(): Observable < any > {
        return this._user;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current logged in user data
     */
    get(): Observable < User > {
        return this._httpClient.get < User > ('api/common/user').pipe(
            tap((user) => {
                this._user.next(this.user || user);
            })
        );
    }

    /**
     * update client
     *
     * @param data
     */
    updateClient(id: string, data: any): Observable < any > {
        return this._httpWrapper.sendRequest('put', `v2/clients/${id}`, data);
    }

    updateClientPassword(id: string, data: any): Observable<any> {
        return this._httpWrapper.sendRequest('put', `v2/clients/${id}/password`, data);
    }
}