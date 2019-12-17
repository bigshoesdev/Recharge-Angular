import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

var log = console.log

@Injectable()
export class APIService {

  constructor(
    private http: Http
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
  }

  currentUser = JSON.parse(localStorage.getItem('currentUser'))



  create(user) {
    // return this.http.post('/api/test', {text: text })
    return this.http.post('/api/test', user)
      .map((response: Response) => {
        let res = response.json()
        // log('RESPONCE in API', res)
        return res
      });
  }  



  //getAllUsers
  getAllUsers(text: string) {
    return this.http.post('/api/get-all-users', {text: text })
      .map((response: Response) => {
        let res = response.json()
        log('RESPONCE in API', res)
        return res
      });
  }



  test(text: string) {
    return this.http.post('/api/test', {text: text })
      .map((response: Response) => {
        let res = response.json()
        log('RESPONCE in API', res)
        return res
      });
  }



  sendMail(mailAim: string, text: string) {
    return this.http.post('/api/send-mail', { mailAim: mailAim, text: text })
      .map((response: Response) => {
        let res = response.json()
        log('RESPONCE in API', res)
        return res
      });
  }



  sendVerifiedMail(){
    return this.http.post('/api/send-verified-mail', this.currentUser)
      .map((response: Response) => {
        let res = response.json()
        log('RESPONCE in API', res)
        return res
      });
  }



  // /fin/process-stripe
  chargeStripe(amount = 10){
    this.currentUser.amount = amount
    this.currentUser.stripetoken = ''
    return this.http.post('/api/fin/process-stripe', this.currentUser)
      .map((response: Response) => {
        let res = response.json()
        log('/fin/process-stripe', res)
        return res
      }); 
  }


  //
  // payPal(text: string) {
  //   return this.http.post('https://www.paypal.com/cgi-bin/webscr', {text: text })
  //     .map((response: Response) => {
  //       let res = response.json()
  //       log('RESPONCE in API', res)
  //       return res
  //     });
  // }  



  getUserData() {
    log(' API getUserData =->')
    return this.http.post('/api/get-user-data', this.currentUser)
      .map((response: Response) => {
        let res = response.json()
        return res
      });
  }



  topUpInfo(number) {
    log(' API topUpInfo =->')
    return this.http.get('/api/top-ap-info/' + number)
      .map((response: Response) => {
        let res = response.json()
        return res
      });
  }



  topUp(data) {
    log(' API topUp =->')
    return this.http.post('/api/top-ap/', data)
      .map((response: Response) => {
        let res = response.json()
        return res
      });
  }    



  addNumber(number) {
    log(' API addNumber =->')
    return this.http.post('/api/add-number/' + number, this.currentUser)
      .map((response: Response) => {
        let res = response.json()
        return res
      });
  }



  delNumber(idx) {
    log(' API delNumber =->')
    return this.http.post('/api/del-number/' + idx, this.currentUser)
      .map((response: Response) => {
        let res = response.json()
        return res
      });
  }



  connectAccounts(aim, master, slave) {
    log(' API connectAccounts =->')
    return this.http.post('/api/connect-accounts/', { aim: aim, master: master, slave: slave })
      .map((response: Response) => {
        let res = response.json()
        return res
      });
  }



  changePassword(old, _new) {
    log(' API changePassword =->')
    return this.http.post('/api/change-password/', { old: old, _new: _new, user: this.currentUser })
      .map((response: Response) => {
        let res = response.json()
        return res
      });
  }






    // example
    // 
    // getUserData_() {
    //     return this.http.post('/api/get-user-data', { 1:1 })
    //         .map((response: Response) => {
    //             // login successful if there's a jwt token in the response
    //             let user = response.json();
    //             // if (user && user.token) {
    //             //     // store user details and jwt token in local storage to keep user logged in between page refreshes
    //             //     //localStorage.setItem('currentUser', JSON.stringify(user));
    //             // }

    //             return user;
    //         });
    // }
          
    

}







