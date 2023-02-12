import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  letters = '0123456789ABCDEF';
  color = 'red';
  sum = 0

  onCalculateSum() {
    this.sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      this.sum += i;
    }
  }

  onBackGroundChange() {
    this.color = "#";
    for (let i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
  }
}
