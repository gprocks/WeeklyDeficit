import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { SplitUrlFragment } from '../../util/stringHelper';
import { ExternalAccessDetails } from '../../models/external-access-details';

@Component({
  selector: 'app-external-login',
  templateUrl: './external-login.component.html',
  styleUrls: ['./external-login.component.css']
})
export class ExternalLoginComponent implements OnInit {

  splitUrlFragment = SplitUrlFragment;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (!isNullOrUndefined(fragment)) {
        const queryString = this.splitUrlFragment(fragment);

        const externalAccessDetails: ExternalAccessDetails = {
          ExternalAccessToken: queryString.access_token,
          UserId: queryString.user_id,
          // TODO: Calculate DateTime
          ExpiresIn: queryString.expires_in
        };


        this.authenticationService.saveToken(externalAccessDetails);
        this.router.navigate(['/home']);

      } else {
        this.router.navigate(['/error'], { fragment: 'error=OOPS' });
      }
    });
  }

}
