/*
Documentation for stripe

Frontent:
http://blog.mgechev.com/2016/07/05/using-stripe-payment-with-angular-2/
https://stackoverflow.com/questions/42500984/stripe-must-provide-source-or-customer

oficial docs%
https://stripe.com/docs/checkout/express

https://stripe.com/

*/

import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { appConfig } from '../../app.config';
import { User } from '../../models/index';

declare var swal: any
let log = console.log

@Component({
  selector: 'app-cheapcalls',
  templateUrl: './cheapcalls.component.html',
  styleUrls: ['./cheapcalls.component.sass']
})

export class CheapcallsComponent implements OnInit {
  currentUser: User
  encodeUsername: String
  
  constructor(
    private API: APIService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    this.encodeUsername  = encodeURI(this.currentUser.username)
  }

  domenName = appConfig.domenName

  devMode = false
  st = {
    selectedCountry1: <string> "",
    selectedCountry2: <string> "",
    selectedCredit:   <string> ""
  }
  selectUndefinedOptionValue = ''
  loading = false

  ngOnInit() {
    log('this.currentUser: ', this.currentUser)
  }


  openCheckout(amount) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_tfFiKccsSgizNvv2xKmiRcne',
      locale: 'auto',
      token: function (token: any) {
          alert(token.id)
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Stripe',
      description: 'payment',
      amount: amount * 100 //2000 //cents = $20
    });

  }


  // payPal() {
  //   log(1)
              
  //       this.API.payPal('x')
  //           .subscribe(
  //           data => {
  //               log('>>>>', data)
  //           },
  //           error => {
  //               alert(error)
  //           })            
  // }




}
