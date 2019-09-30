import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnLineUsersService } from '../online-users.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  receiver: string;
  messages: string[] = new Array();

  constructor(private route: ActivatedRoute, private service: OnLineUsersService) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe( params => this.receiver = params.get("id"));
    this.service.messagesFor( this.receiver, postedMessages => {
      if (!postedMessages.forEach) return;
      postedMessages.forEach( message => {
        this.messages.push(`${message.sender}: ${message.payload} (${new Date(message.timestamp).toISOString()})`)
      });
    })
  }

  sendMessage(message: string): boolean {
    this.service.postMessage(this.receiver, message);
    return false;
  }

}
