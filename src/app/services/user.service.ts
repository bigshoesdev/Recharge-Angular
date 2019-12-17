import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/users').map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/users/' + _id).map((response: Response) => response.json());
    }
  
    create(user: User) {
        // return this.http.post('/users/register', user);
        return this.http.post('/api/reg', user);
    }

    _create(user: User) {
        return this.http.post('/users/register', user)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                // if (user && user.token) {
                //     // store user details and jwt token in local storage to keep user logged in between page refreshes
                //     localStorage.setItem('currentUser', JSON.stringify(user));
                // }

                return user;
            });
    }
        
    
    update(user: User) {
        return this.http.put('/users/' + user._id, user);
    }

    delete(_id: string) {
        return this.http.delete('/users/' + _id);
    }
}