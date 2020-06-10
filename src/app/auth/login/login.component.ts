import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/interfaces/login-user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  user: LoginUser = {} as LoginUser;
  showToast = false;
  toastClass: string;
  toastMessage: string;
  constructor(public loginProvider: LoginService, public router: Router) { }

  ngOnInit(): void {
  }

  onPressLogin(form) {
    if (form.valid) {
      this.loginProvider.login(this.user).subscribe((Res: any) => {
        localStorage.setItem('token', Res.token);
        this.handleResponseFromBackEnd('success', 'Login Successfully', '/page/home');
      }, err => this.handleResponseFromBackEnd('danger', err.error.error || 'Email Or Password Not Correct'));
    }
  }
  handleResponseFromBackEnd(classResponse: string, message: string, nextUrl?) {
    this.toastClass = classResponse;
    this.showToast = true;
    this.toastMessage = message.toUpperCase();
    setTimeout(() => {
      this.showToast = false;
      nextUrl && this.router.navigateByUrl(nextUrl);
    }, 2000);
  }


}

