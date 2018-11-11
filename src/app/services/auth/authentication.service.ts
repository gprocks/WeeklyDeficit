import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router, private http: HttpClient) {
  }
  public getCurrentToken(): any {
    const storedToken = localStorage.getItem('currentUser');
    if (storedToken != null) {
      try {
        const token = JSON.parse(storedToken);
        if (token && token.ExternalAccessToken) {
          return token;
        }
      } catch (e) {
        this.router.navigate(['/error'], { fragment: 'error=OOPS' });
      }
    }
    return null;
  }

  public logout() {
    // clear token remove user from local storage to log user out
    this.clearStoredToken();
    this.router.navigate(['/login']);
  }

  public saveToken(token: any): string {
    localStorage.setItem('currentUser', JSON.stringify(token));
    return token.access_token;
  }

  public clearStoredToken() {
    localStorage.removeItem('currentUser');
  }
}
