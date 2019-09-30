import { Component, Inject} from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { OnLineUsersService } from './online-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'simple-chat';
              // sto iniettando variabile                      su dichiarazione di variabile assegno oggetto injectable e si inietta in auromatico
  constructor(@Inject('TITLE') public title: string,
                               public userOnline: UserProfileService,
                               public userService: OnLineUsersService
                               ) {}
}
