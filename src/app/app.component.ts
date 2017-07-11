import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  volume: number;

  constructor() {
    this.volume = 50;
  }


  onSubmit(x) {
    console.log(x);
    this.volume = x;
  }
}
