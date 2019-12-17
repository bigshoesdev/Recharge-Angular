import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-passport-auth-token',
  templateUrl: './passport-auth-token.component.html',
  styleUrls: ['./passport-auth-token.component.sass']
})
export class PassportAuthTokenComponent implements OnInit {
   id: string;
   private sub: any;   // <---- add subcriber
   returnUrl: string;

constructor(
  private router: Router, private route: ActivatedRoute,
  private authenticationService: AuthenticationService
) {
}

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/account';

    this.sub = this.route.params.subscribe(params => {
        this.id = params['id']

        this.authenticationService.PassportTokenLogin(this.id).subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    //this.alertService.error(error);
                    alert(error)
                });

    })
  }


}




    // login() {
    //     this.loading = true;
    //     this.authenticationService.login(this.model.email, this.model.password)
    //         .subscribe(
    //         data => {
    //             this.router.navigate([this.returnUrl]);
    //         },
    //         error => {
    //             //this.alertService.error(error);
    //             alert(error)
    //             this.loading = false;
    //         });
    // }


