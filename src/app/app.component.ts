import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';
  isUsernameEmpty = true;

  onInput() {
    if (this.username === '')
      this.isUsernameEmpty = true;
    else
      this.isUsernameEmpty = false;
  }

  resetUsername() {
    this.username = '';
    this.isUsernameEmpty = true;
  }

}
