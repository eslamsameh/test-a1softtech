import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {
  user: User = {} as User;
  showToast = false;
  toastClass: string;
  toastMessage: string;
  constructor(public activeRoute: ActivatedRoute, public userProvider: UserService, public router: Router) { }

  ngOnInit(): void {
  }
  onPressSave(form) {
    if (form.valid) {
      const data = { name: this.user.name, job: this.user.job };
      this.userProvider.addUser(data).subscribe((Res) => {
        this.handleResponseFromBackEnd('success', 'Created Successfully', '/page/home');
      }, err => this.handleResponseFromBackEnd('danger', err.error.error || 'Something Went Error'));
    }
  }

  handleResponseFromBackEnd(classResponse: string, message: string, nextUrl?) {
    this.toastClass = classResponse;
    this.showToast = true;
    this.toastMessage = message.toUpperCase();
    setTimeout(() => {
      this.showToast = false;
      nextUrl && this.router.navigateByUrl(nextUrl);
    }, 3000);
  }


}
