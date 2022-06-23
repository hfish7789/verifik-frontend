import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  constructor(private _http: HttpClient) {

  }

  /**
   * send request
   * @param method - to determinate which function we will be using
   * @param url - url that we will requesting information
   * @param params - params that can go into the body or the query string param
   * @param options - headers or some other sort of params
   */
  // tslint:disable-next-line:typedef
  sendRequest(method: string, url: string, params: any = {}, options: any = {}) {
      method = method.toLocaleLowerCase();

      const authToken: string = localStorage.getItem('accessToken');

      let headers = {};

      if (authToken) {
          headers['Authorization'] = `Bearer ${authToken}`;
      }

      switch (method) {
          case 'get':
              return this._http.get(url, {
                  params,
                  headers,
                  ...options
              });
          case 'post':
              return this._http.post(url, params, {
                  headers,
                  ...options
              });
          case 'put':
              return this._http.put(url, params, {
                  headers,
                  ...options
              });
          case 'delete':
              return this._http.delete(url, {
                  headers,
                  ...options
              });
          default:
              throw "method not provided";
      }
  }
}
