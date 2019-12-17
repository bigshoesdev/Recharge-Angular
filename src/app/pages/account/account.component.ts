import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service'; 
import { User } from '../../models/index';
import { UserService } from '../../services/user.service';
import { APIService } from '../../services/api.service';
import { TaskService } from '../../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { appConfig } from '../../app.config';

declare var jQuery: any;
declare var $: any;
declare var swal: any
let log = console.log

@Component({
  moduleId: module.id,
  selector: 'account-page',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {
  currentUser: User
  userData:    any
  apiUrl = appConfig.apiUrl

  test = 'test'
  purchases_made = []
  saved_numbers = []
  balance = 0
  number = ''
  loading = false
  set_password = false
  old_password = ''
  new_password  = ''


  constructor(
    private util: UtilService,
    private userService: UserService,
    private apiService: APIService,
    private taskService: TaskService,
    private router: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')) 
  }


  ngOnInit() {
    // log('this.currentUser: ', this.currentUser)

    // Simulate "window.onload" event for plagins
    this.util.simulateWindowOnload()

    let auto_refresh = setInterval(() => {
      log('try fefresh')
      log('this.currentUser._id: ', this.currentUser._id)
      if (this.currentUser._id !== undefined) {
        this.refresh_user_data()
        clearInterval(auto_refresh)
      }
    }, 1000)

    //
    // Check and complete tasks 
    //
    let task_exist = this.taskService.checkTask('account')
    log('task_exist: ', task_exist)
    if (task_exist) { //complete task
      log('!!! exist !!!')
      //
      if (task_exist.name == 'connect_account') {
        log('The task - connect_account. task_exist: ', task_exist)
        // perform

        // sent 2 users to back
        let aim    = task_exist.data.aim
        let master = task_exist.data.master
        let slave  = this.currentUser
        
        this.apiService.connectAccounts( aim, master, slave)
            .subscribe(
              data => {
                  log(data)
                  alert('success responce from back')
              },
              error => {
                  swal ( "Oops" ,  "Something went wrong in 'connectAccounts()' !" ,  "error" )
              })         

        // remove
        this.taskService.removeTask('account')
        this.router.navigate(['/login'])
      }
    }  

  }


  refresh_user_data () {
    this.apiService.getUserData()
        .subscribe(
          data => {
              log('getUserData(): ',data)
              if (data._id) {
                this.userData = data
                log(this.userData.wallets.USD.balance) //.wallets.USD.balance
                this.balance        = this.userData.wallets.USD.balance
                this.purchases_made = this.userData.purchases_made.reverse()
                this.saved_numbers  = this.userData.saved_numbers.reverse()
              }else{
                // setTimeout(()=>this.refresh_user_data(), 1000)
                location.reload()
              }
          },
          error => {
              swal ( "Oops" ,  "Something went wrong in 'getUserData()' !" ,  "error" )
          })    
  }

  change_tab(tab) {
    log(tab)
    $( "#tab-i-"+tab ).trigger( "click" );
  }

  add_number(number) {
    // log('test ', number.length > 4, isFinite(number))
    if (number)
      if ( (number.length > 4) && isFinite(number)) {
        this.apiService.addNumber(number)
            .subscribe(
              data => {
                  log(data)
                  this.refresh_user_data() // Refresh
                  swal({
                    title: "Good job!",
                    text: "Number successfully added",
                    icon: "success",
                  })          
              },
              error => {
                  swal ( "Oops" ,  "Something went wrong in 'app_status()' !" ,  "error" )
              })  
      }
    else
      swal("Oops", "Please enter a valid number", "error")
  }

  topup_number(number){
    log(number)
    this.taskService.setTask({
      for: 'topup',
      name: 'set_number',
      data: {
        number: number
      }
    })
    // this.taskService.removeTask('topup')
    this.router.navigate(['/topup'])
  }

  del_number(idx){
    log(idx)
    this.apiService.delNumber(idx)
        .subscribe(
          data => {
              log(data)
              this.refresh_user_data() // Refresh
              swal({
                title: "Good job!",
                text: "Number successfully added",
                icon: "success",
              })          
          },
          error => {
              swal ( "Oops" ,  "Something went wrong in 'app_status()' !" ,  "error" )
          })      
  }

  connect(aim) {
    // alert('Master: ' + this.currentUser )
    // set task
    this.taskService.setTask({
      for: 'account',
      name: 'connect_account',
      data: {
        aim: aim,
        master: this.currentUser
      }
    })
  }

  change_password(){

    if (this.old_password == this.new_password) {
      swal ( "Oops" ,  "New password can't be the same!" ,  "error" )
      return
    }

    if (this.old_password.length<4 || this.new_password.length<4) {
      swal ( "Oops" ,  "Password can't be the less 4 characters!" ,  "error" )
      return
    }    

    log( 
      'Change ',
      this.old_password,
      this.new_password 
    )
    
    this.loading = true
    this.apiService.changePassword(this.old_password, this.new_password )
        .subscribe(
          data => {
              log('from server (changePassword) ', data)
              this.refresh_user_data() // Refresh
              this.loading = false
              swal({
                title: "Good job!",
                text: data.msg,
                icon: "success",
              })
              this.router.navigate(['/login'])
          },
          error => {
              swal ( "Oops" ,  "Something went wrong in 'changePassword()' !" ,  "error" )
          })   


  }
}

