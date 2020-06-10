import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../interfaces/login-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public config: UrlService, public http: HttpClient) { }
  login(data: LoginUser) {
    const url = this.config.url + this.config.login;
    const header = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post(url, data, {headers: header});
  }
}
