import { Component, OnInit, Input } from '@angular/core';
import { User } from '../interface/user.interface';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
