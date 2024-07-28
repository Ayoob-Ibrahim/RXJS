import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RXJS';

  courses: string[] = ['Amgular', 'Javascript', 'Jquery', 'Java', 'Markup Language']
  mobilemedia: any = window.matchMedia('(max-width:520px)')

  constructor() {
    if (this.mobilemedia.matches) {
      this.courses.splice(-2, 2)
    }
  }

}
