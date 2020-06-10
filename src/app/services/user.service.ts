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
    const header = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.get(url, { headers: header });
  }
  deleteUser(id) {
    const url = this.config.url + this.config.singleUserOrDeleteUser.replace('{id}', id);
    const header = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.delete(url, { headers: header });
  }
  singleUser(id) {
    const url = this.config.url + this.config.singleUserOrDeleteUser.replace('{id}', id);
    const header = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.get(url, { headers: header });
  }
  updateUser(data, id) {
    const url = this.config.url + this.config.singleUserOrDeleteUser.replace('{id}', id);
    const header = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.put(url, data, { headers: header });
  }
  addUser(data) {
    const url = this.config.url + this.config.createUser;
    const header = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.post(url, data, { headers: header });
  }
}


