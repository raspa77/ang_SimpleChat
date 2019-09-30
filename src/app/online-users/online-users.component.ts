import { Component, OnInit } from '@angular/core';
import { OnLineUsersService } from '../online-users.service';
import { User } from '../user';

@Component({
  selector: 'app-online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.css']
})
export class OnlineUsersComponent implements OnInit {

  users: User[];

  constructor(private onlineUsers: OnLineUsersService) { }

  ngOnInit() {
    this.onlineUsers.listUsers( foudUsers => {
      this.users = foudUsers
    });
  }

}