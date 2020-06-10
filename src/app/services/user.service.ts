import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../interfaces/login-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public config: UrlService, public http: HttpClient) { }
  users(page) {
    const url = this.config.url + this.config.users.replace('{page}', page);
    return this.http.get(url);
  }
  deleteUser(id) {
    const url = this.config.url + this.config.singleUserOrDeleteUser.replace('{id}', id);
    return this.http.delete(url);
  }
  singleUser(id) {
    const url = this.config.url + this.config.singleUserOrDeleteUser.replace('{id}', id);
    return this.http.get(url);
  }
  updateUser(data, id) {
    const url = this.config.url + this.config.singleUserOrDeleteUser.replace('{id}', id);
    return this.http.put(url, data);
  }
  addUser(data) {
    const url = this.config.url + this.config.createUser;
    return this.http.post(url, data);
  }
}


