import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  page = 0;
  pageSize = 6;
  items = 0;
  users = [];
  constructor(public usersProvider: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.usersProvider.users(this.page).subscribe((Res: any) => {
      this.users = Res.data;
      this.items = Res.total;
    });
  }
  onChangePage(event) {
    this.page = event;
    this.getUsers();
  }
  onPressRemoveUser(id, index) {
    this.usersProvider.deleteUser(id).subscribe((Res) => {
      this.users.splice(index, 1);
    });
  }

}
