import { Component } from '@angular/core';
export interface Message {
  title: string
  text: string
  id?: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: Message[] = [
    {title: 'price request', text: 'Request for part number:123456 qty:12 ', id: 1},
    {title: 'report request', text: 'Weekly dev plan until tomorrow', id: 2}
  ]
  updateMessages(mess: Message) {
    this.messages.unshift(mess);
    console.log('Message', mess);
  }

}

  /*
  title = 'my-app';
  today = new Date();
  friends = ['Moshe', 'Boris', 'Natali'];
  myFriend(myfriend) {
    alert(myfriend);
  }
  */