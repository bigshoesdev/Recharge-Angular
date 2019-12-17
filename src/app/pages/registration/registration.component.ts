import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { FixUiService } from '../../services/fix-ui.service';

declare var $: any;
declare var swal: any
let log = console.log

@Component({
  moduleId: module.id,
  selector: 'registration-page',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private fixUi: FixUiService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.fixUi.all()
  }

  register() {
      this.loading = true;
      this.userService.create(this.model)
          .subscribe(
              data => {
                //if (data.body)
                log(data)
                // alert()
                swal({
                  title: "Good job!",
                  text: "Registration successful!",
                  icon: "success",
                })                  
                this.router.navigate(['/login'])
              },
              error => {
                error = JSON.parse(error)
                log(error)
                swal ( "Oops" , error.message ,  "error" )
                this.loading = false;
              });
  }  

}












