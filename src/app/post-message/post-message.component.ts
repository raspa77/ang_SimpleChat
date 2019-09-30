import { Component, OnInit, EventEmitter, Output } from '@angular/core';
 
@Component({
    selector: 'app-post-message',
    templateUrl: './post-message.component.html',
    styleUrls: ['./post-message.component.css']
})

export class PostMessageComponent implements OnInit {
  message: string;
  @Output()
  messageEdited: EventEmitter<string> = new EventEmitter();
 
  constructor() { }
 
  ngOnInit() {}
  sendMessageEdited() {
    this.messageEdited.emit(this.message);
    this.message = '';
  }
}