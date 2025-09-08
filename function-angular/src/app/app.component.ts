import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'function-angular';
  handleClick() {
    alert('Button Clicked');
    this.otherFunction();
  }
  otherFunction = () => {
    confirm('Hello from otherFunction');
  };

  Sum: number = 0;
  totalSum() {
    let a = Number(prompt('Enter first number'));
    let b = Number(prompt('Enter second number'));
    this.Sum = a + b;
  }
}
