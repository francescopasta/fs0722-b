import { Component, OnInit, Output } from '@angular/core';
import { User } from '../interface/user.interface';
import { UsersListService } from '../service/users-list.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users: User[] = this.usrSrv.getUsers()

  @Output() utenti:User[] = this.users

  constructor(private usrSrv:UsersListService) { }

  ngOnInit(): void {
  }

}
