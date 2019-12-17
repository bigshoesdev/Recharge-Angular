import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { UtilService } from '../services/util.service';

var log = console.log

@Injectable()
export class AdminService {

  constructor(
    private http: Http,
    private util: UtilService    
  ) { }

  
  app_status() {
    log('The app stetus')
      return this.http.get('/api/app_status').map((response: Response) => response.json())
  }  

  //getAllUsers
  getAllUsers(text: string) {
    return this.http.post('/api/get-all-users', {text: text }).map((response: Response) => response.json())
  }
      
  delUser(currentUser, id) {
    return this.http.post('/api/del-user/' + id, currentUser).map((response: Response) => response.json())
  }  

  // EXAMPLES
  


  // PassportTokenLogin(token: string) {
  //     log('http.post(/api/auth/pasport_token, { token: token })')
  //     return this.http.post('/api/auth/passport_token', { token: token })
  //         .map((response: Response) => {
  //             // login successful if there's a jwt token in the response
  //             let user = response.json();
  //             log( 'Service get: ',  response)
  //             if (user && user.token) {
  //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
  //                 localStorage.setItem('currentUser', JSON.stringify(user));
  //             }
  //             return user;
  //         });
  // }

  
  // logout() {
  //     localStorage.removeItem('currentUser');
  // }

}









