import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  homePath = '/'
  activePath = '/active'
  inactivePath = '/inactive'
  usersPath = '/users'
  usersDetails = '/user-details'
}
