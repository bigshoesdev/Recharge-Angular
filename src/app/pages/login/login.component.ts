import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from '../../services/util.service';
import { AuthenticationService } from '../../services/authentication.service';
import { appConfig } from '../../app.config';

declare var jQuery: any;
declare var $: any;
declare var swal: any

let log = console.log

@Component({
    moduleId: module.id,
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    apiUrl = appConfig.apiUrl

    constructor(
        private util: UtilService,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        // Simulate "window.onload" event for plagins
        this.util.simulateWindowOnload()

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/account';
    }


    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                swal ( "Oops" ,  error ,  "error" )
                this.loading = false;
            });
    }

}








