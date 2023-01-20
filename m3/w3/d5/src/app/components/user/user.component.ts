import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    ricezione:any;
    user:any={
    nome:'',
    cognome:'',
    email:''
    }
  constructor() { }

  ngOnInit(): void {
    this.getDatiUtente()
  }
  getDatiUtente(){
    this.ricezione=JSON.parse(localStorage.getItem('user')!);
    this.user.nome=this.ricezione.user.name;
    this.user.cognome=this.ricezione.user.surname;
    this.user.email=this.ricezione.user.email;
    console.log(this.ricezione);
    console.log(this.user)
  }

}
