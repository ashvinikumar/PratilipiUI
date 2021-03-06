import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showHide: Boolean;

  constructor() {
    this.showHide = false;
  }

  changeShowStatus() {
    this.showHide = !this.showHide;
  }
}
