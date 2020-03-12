import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from '../app.component';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Output() onAdd: EventEmitter<Message> = new EventEmitter<Message>()
  title = '';
  text = '';
  constructor() { }
  ngOnInit() {}
  addMessage() {
    if (this.text.trim() && this.title.trim()) { 
      const mess: Message = {
        text: this.text,
        title: this.title,
      }
      this.onAdd.emit(mess);
      this.title = this.text = '';
    }
  }
}