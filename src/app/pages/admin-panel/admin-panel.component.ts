import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service'; 
import { User } from '../../models/index';
import { UserService } from '../../services/user.service';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { JsonFormatPipe } from '../../pipes/json-format.pipe';

declare var swal: any;
declare var google: any

var log = console.log

@Component({
  selector: 'admin-panel-page',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.sass']
})
export class AdminPanelComponent implements OnInit {

  currentUser: User

  app_status: any = []
  all_users: any = []

  constructor(
    private util:         UtilService,
    private userService:  UserService,
    private adminService: AdminService,
    private router:       Router,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
   
  }

  obj_to_arr(obj:any){
    let arr = []
    for ( let el in obj){
      arr.push({
        name: el,
        value: obj[el]
      })      
    }
    log(arr)
    return arr
  }

  ngOnInit() {
    // Simulate "window.onload" event for plagins
    this.util.simulateWindowOnload()

    if (this.currentUser.username !== 'admin') this.router.navigate(['/login'])

    this.get_app_status()
    this.get_all_users()
          
  }

  get_app_status() {
    this.adminService.app_status()
      .subscribe(
      data => {
          log(data)
          this.app_status = this.obj_to_arr(data.result)
      },
      error => {
          log(error)
          swal ( "Oops" ,  "Something went wrong in 'app_status()' !" ,  "error" )
      }) 
  }

  get_all_users() {
    this.adminService.getAllUsers('what')
        .subscribe(
          data => {
              log('getAllUsers() ', data)
              this.all_users = data
          },
          error => {
              swal ( "Oops" ,  "Something went wrong in 'getAllUsers()' !" ,  "error" )
          })  
  }

  

  del_user(idx){
    log(idx)
    
    this.adminService.delUser(this.currentUser, idx)
        .subscribe(
          data => {
              log('delUser() ', data)
              this.get_all_users()
                  swal({
                    title: "Good job!",
                    text: "User deleted",
                    icon: "success",
                  })  
          },
          error => {
              swal ( "Oops" ,  "Something went wrong in 'getAllUsers()' !" ,  "error" )
          })      
  }

}

 