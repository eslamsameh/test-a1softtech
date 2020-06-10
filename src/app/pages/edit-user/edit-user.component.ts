import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {
  user: User = {} as User;
  showToast = false;
  toastClass: string;
  toastMessage: string;
  constructor(public activeRoute: ActivatedRoute, public userProvider: UserService, public router: Router) { }

  ngOnInit(): void {
    this.user.id = this.activeRoute.snapshot.params.id;
    this.userProvider.singleUser(this.user.id).subscribe((Res: any) => {
      this.user = Res.data;
      this.user.name = `${Res.data.first_name} ${Res.data.last_name}`;
    });
  }
  onPressSave(form) {
    if (form.valid) {
      const data = { name: this.user.name, job: this.user.job };
      this.userProvider.updateUser(data, this.user.id).subscribe((Res) => {
        this.handleResponseFromBackEnd('success', 'Updated Successfully', '/page/home');
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
