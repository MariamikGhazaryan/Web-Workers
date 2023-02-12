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
  errorMessage: string = '';

  worker: Worker | null = null;

  onCalculateSum() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./app.worker', import.meta.url));
      this.worker.onmessage = ({data}) => {
        this.sum = data;
      };
      this.worker.onerror = (error) => {
        this.errorMessage = error.message;
      }
      this.worker.postMessage({
        from: 0,
        to: 1000000000
      }); // we can pass only one parameter
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }

  }

  onCancel() {
    this.worker?.terminate();
    this.sum = 0;
    this.worker = null;
  }

  onBackGroundChange() {
    this.color = "#";
    for (let i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
  }
}

