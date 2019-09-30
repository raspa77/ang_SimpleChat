import { Injectable } from '@angular/core';
import { User } from './user';
import { UserProfileService } from './user-profile.service';
import { HttpClient } from '@angular/common/http';

// con questa versione non c'è bisogno di metterlo nell'app-module.ts
// @Injectable({
//   providedIn: 'root'
// })


class PostedMessage {
  constructor( public sender: string, public receiver: string, public payload: string) {}
}

@Injectable()

export class OnLineUsersService {

  list: Set<User> = new Set();

  constructor(private profile: UserProfileService, private client: HttpClient) { }

  public messagesFor(otherUser: string, process) {
    this.client.get("http://ardea.srl:3389/api/messages/" + otherUser + "/" + this.username)
        .subscribe(
          process,
          error => console.error(error)
        )
  }
  
  get username(): string {
    return this.profile.name;
  }

  public listUsers( process: (res : any) => void ) {
    this.client.get("http://ardea.srl:3389/api/users/" + this.username)
        .subscribe(
          process,
          error => console.error(JSON.stringify(error))
        )
    }

  public registerUser(enteringUser: User) {
    console.info(enteringUser);
    // vecchio metodo offline
    // this.list.add(enteringUser);
    this.profile.user = enteringUser;

    this.client.post("http://ardea.srl:3389/api/login", enteringUser)
               .subscribe(
                  res => console.info(JSON.stringify(res)),
                  err => console.error(JSON.stringify(err)),
                  () => console.log("finito")
               );
  }

  public logout() {
    this.client.get(`http://ardea.srl:3389/api/logout/${this.profile.user.username}`, {observe : 'response'})
               .subscribe(
                  res => console.info(JSON.stringify(res)),
                  err => console.error(JSON.stringify(err)),
                  () => console.log("finito")
   );
   this.profile.logout();
  }

  postMessage(receiver: string, message: string) {
    let body = new PostedMessage(this.username, receiver, message);
    this.client.post("http://ardea.srl:3389/api/" + '/messages', body)
      .subscribe(
        res => console.log("message has been sent"),
        error => console.log(JSON.stringify(error))
      );
  }
  
}