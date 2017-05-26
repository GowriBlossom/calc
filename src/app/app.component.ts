import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  output1: string = '0';
output2: string = '0';

  updateDisplay(i: string) {

    this.output1 = this.output1 == '0' ? this.output1 = '' :

      this.output1 += i;

  }
  calculate() {

    this.output2 = eval(this.output1);

  }

  clear() {
    this.output1 = '0';
    this.output2 = '0';
  }
}
