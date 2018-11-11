import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user';
import { zip } from 'rxjs';
import * as moment from 'moment';
import { FitbitDailyCalorie, DailyDeficit } from '../../models/daily-deficit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  userProfile: User;
  weeklyCalories: DailyDeficit[];
  totalIn = 0;
  totalOut = 0;
  averageIn: number;
  averageOut: number;
  endDate: moment.Moment;

  ngOnInit() {
    this.apiService.getProfile().subscribe(res => this.userProfile = res);
    this.endDate = this.getEndOfWeek(moment());
    this.getWeeklyCalories();
  }

  getEndOfWeek(startDate: moment.Moment): moment.Moment {
    // 0 Sunday
    // 1 Monday
    const weighInDay = 2; // Tuesday
    const endOfWeek = weighInDay - 1;
    return startDate.day(startDate.day() > endOfWeek ? endOfWeek : endOfWeek - 7);
  }

  getWeeklyCalories() {
    const endDateString = this.endDate.format('YYYY-MM-DD');
    const caloriesInObservables = this.apiService.getCaloriesIn(endDateString);
    const caloriesOutObservables = this.apiService.getCaloriesOut(endDateString);

    zip(
      caloriesInObservables,
      caloriesOutObservables,
      (calsIn: FitbitDailyCalorie[], calsOut: FitbitDailyCalorie[]) => ({ calsIn, calsOut }))
      .subscribe(res => {
        this.totalOut = res.calsOut.reduce((sum, dailyCalorie) => sum + Number(dailyCalorie.value), 0);
        this.averageOut = this.totalOut / 7;

        let totalDaysLogged = 0;
        res.calsIn.forEach(item => {
          const numericValue = Number(item.value);
          this.totalIn += numericValue;
          totalDaysLogged += numericValue > 0 ? 1 : 0;
        });
        this.averageIn = this.totalIn / totalDaysLogged;

        this.weeklyCalories = res.calsOut.map(e => {
          const calIn = res.calsIn.find(day => day.dateTime === e.dateTime).value;
          return { DateTime: e.dateTime, CaloriesIn: calIn, CaloriesOut: e.value };
        });
        console.log('Weekly Summary', this.weeklyCalories);
      });
  }



}
