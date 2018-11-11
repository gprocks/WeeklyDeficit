import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getProfile(): Observable<User> {
    return this.http.get('https://api.fitbit.com/1/user/-/profile.json')
      .pipe(
        map((response: any) => {
          return response.user as User;
        }),
        catchError(err => { console.log('Error Fetching Profile', err); return []; })
      );
  }

  getCaloriesIn(endDateString?: string): Observable<any> {

    if (endDateString == null) {
      endDateString = 'today';
    }
    return this.http.get(`https://api.fitbit.com/1/user/-/foods/log/caloriesIn/date/${endDateString}/7d.json`)
      .pipe(
        map(res => {
          return res['foods-log-caloriesIn'];
        })
      );
  }

  getCaloriesOut(endDateString?: string): Observable<any> {
    if (endDateString == null) {
      endDateString = 'today';
    }
    return this.http.get(`https://api.fitbit.com/1/user/-/activities/calories/date/${endDateString}/7d.json`)
      .pipe(
        map(res => {
          return res['activities-calories'];
        }),
    );
  }
}
