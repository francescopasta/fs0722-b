import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  allUsers: User[] = [
    {
      id: 1,
      nome: 'Francesco',
      cognome: 'Pastore',
      email: 'Francesco.babbione@gmail.cock',
    },
    {
      id: 2,
      nome: 'Stefano',
      cognome: 'Gavioli',
      email: 'Stefano.DioRe@gmail.big.cock',
    },
    {
      id: 3,
      nome: 'Riccardo',
      cognome: 'Damiani',
      email: 'Forza.Napoli@gmail.no.cock',
    },
    {
      id: 4,
      nome: 'Umberto',
      cognome: 'Diodoro',
      email: 'Golden.cock@gmail.cock',
    },
    {
      id: 5,
      nome: 'Damiano',
      cognome: 'Mongoloide',
      email: 'Mongolia.casaMia@gmail.amo.il.cock',
    },
  ];

  constructor() { }

  getUsers():User[] {
    return this.allUsers
  }

}
