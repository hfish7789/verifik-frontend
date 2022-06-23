import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Observable,
  of ,
  throwError
} from 'rxjs';
import {
  HttpWrapperService
} from 'app/core/services/http-wrapper.service';
import {
  environment
} from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OnlinePostmanService {
  private baseUrl = environment.baseUrl;

  constructor(
    private _httpClient: HttpClient,
    private _httpWrapper: HttpWrapperService
  ) {}

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  genericRequest(data: any, url: any): Observable < any > {
    return this._httpWrapper.sendRequest('get', `${url}`, data)
  }
}