import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HomeModule } from './home.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    logged:boolean = false;
    isLoggedIn: boolean = false;

  constructor(private authSrv:AuthService) { }

  ngOnInit(): void {
    this.authSrv.isLoggedIn$.subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
    });
  }

  onLogout() {
    this.authSrv.logout();
}

}
