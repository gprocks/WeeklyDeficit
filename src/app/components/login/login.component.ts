import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  showSpinner = false;
  ngOnInit() {}

  goToLogin(): void {
    // tslint:disable-next-line:max-line-length
    // window.location.href = 'https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22D752&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fexternal-login%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800';
    window.location.href =
      // tslint:disable-next-line:max-line-length
      'https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22D752&redirect_uri=https%3A%2F%2Fweeklydeficit.azurewebsites.net%2Fexternal-login%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800';
  }
}
