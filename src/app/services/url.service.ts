import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }
  url = 'https://reqres.in/api/';
  login = 'login';
  users = 'users?page={page}';
  singleUserOrDeleteUser = 'users/{id}';
  createUser = 'users';
}
