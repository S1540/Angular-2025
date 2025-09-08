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
  title = 'counter-App';
  count = 0;
  handleClick(value: string) {
    if (value == 'minus') {
      if (this.count > 0) {
        this.count = this.count - 1;
      }
    } else if (value == 'plus') {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }

  // setDarkMode() {
  //   document.body.classList.toggle('bg-green');
  // }
}
