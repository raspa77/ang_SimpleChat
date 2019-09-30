import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { OnLineUsersService } from '../online-users.service';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css'],
  // potevo metterlo pure solo qui
  // providers: [OnLineUsersService]
})
export class EnterComponent implements OnInit {
  model: User;

  constructor(private OnlineUsers: OnLineUsersService ) {
    this.model = new User('Raspa', 'Aa1!', new Date('1977-07-26'), 'Luca', 'Raspatelli')
  }

  ngOnInit() {
  }

  enterTheChat(): boolean {
    this.OnlineUsers.registerUser(this.model);
    return false
  }

}
