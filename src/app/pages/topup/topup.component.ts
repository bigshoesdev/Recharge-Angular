
import { Component, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { CheckMobileOperatorService } from '../../services/check-mobile-operator.service';
import { CurrencyPipe } from '@angular/common';
import { JsonFormatPipe } from '../../pipes/json-format.pipe';
import { APIService } from '../../services/api.service';
import { UtilService } from '../../services/util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';

declare var $: any
declare var jQuery: any
declare var swal: any
let log = console.log

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class TopupComponent implements OnInit {

  userData:    any
  purchases_made = []
  saved_numbers = []
  balance = 0

  devMode = false
  loading = false
  namber_task = false

  constructor(
    private checkMobileOperatorService: CheckMobileOperatorService,
    private apiService: APIService,
    private utilService: UtilService,
    private router: Router,
    private taskService: TaskService
  ) {
    this.apiService.getUserData()
        .subscribe(
          data => {
              log(data)
              this.userData = data
              log(this.userData.wallets.USD.balance) //.wallets.USD.balance
              this.balance        = this.userData.wallets.USD.balance
              this.purchases_made = this.userData.purchases_made
              this.saved_numbers  = this.userData.saved_numbers
          },
          error => {
              swal ( "Oops" ,  "Something went wrong in 'app_status()' !" ,  "error" )
          })      
  }



  // STATE
  st = {
    step: 1,
    autoChek: 0,
    checkOperator: 0,
    checkedLot: {
      product_id: '',
      topup_currency: '',
      currency: '',
      denomination: '',
      openRange: false,
      openRangeMin: 0,
      openRangeMax: 1,
      price: 1
    },
    operatorName: '',
    operators: <any>[],
    amountPrice: [{ v: 0, summ: 30 }, { v: 1, summ: 5 }, { v: 2, summ: 10 }, { v: 3, summ: 40 }, { v: 4, summ: 50 }],
    processingFee: 0.25,
    amount: <any>0,
    openAmount: <boolean>false,
    telObj: <any>{
      state: false,
      number: 0
    },
    opts: {
      msisdn: false,
      operator: ''
    },
    products: [],
    selectedRam: 1
  }

  @HostListener('document:keyup', ['$event']) keyup(e) {
    this.keyEvent(e)
  }


  ngOnInit() {

    log(`this`, this)
    log(`args`, )

    setTimeout(() => ifInputLes(), 100)
    let ifInputLes = () => {
      $('.phone-number-component').css('width', '100%')
    }
    $(window).resize(() => ifInputLes());

    // $('.btn').click(() => log('btn-click')) // .....

    log(`
      st.opts
    `,
      this.st.opts,
      this.st.opts.msisdn
    )

    //
    // Check and complete tasks 
    //
    let task_exist = this.taskService.checkTask('topup')
    log('task_exist: ', task_exist)
    if (task_exist) { //complete task
      log('!!! exist !!!')
      // 1
      if (task_exist.name == 'log') log(task_exist.data) // example perform
      // 2
      if (task_exist.name == 'set_number') {
        log('The task - set_number. task_exist: ', task_exist)
        // perform
        this.top_up_info(task_exist.data.number)
        // remove
        this.taskService.removeTask('topup')
      }
    } 

  }


  fromInput() {
    log('The fromInput()')
    log(this.st.telObj)
    log(this.st.telObj.number)

    if (this.st.telObj.state == true) {
      this.st.openAmount = true
    } else {
      log('Not valid')
    }
  }


  keyEvent(e) {
    if (e.key == 't') {
      console.clear()
      log('st: ', this.st, 'this:', this)
    }
    this.changeStep(e.key) // << . >>

    log('keyEvent', e)

    var firstPart = $('.btn-cc')
      .text()
      .replace(/ /gi, "")
      .slice(1, -1)

    var secondPart = $('#phoneNumber').val()

    let result = this.checkMobileOperatorService._(firstPart, secondPart)

    log('this.checkMobileOperatorService._() = ', result)
    if (secondPart.length <= 1) this.st.operators = []
    if (result !== 'not found') this.st.operators = result
  }


  changeStep(where) {
    // up
    if (where == 'ArrowUp' && this.st.step < 4) {
      $('.btn-cc').html('&nbsp+380&nbsp')
      $('.btn-flag').addClass('flag ua')
      $('#phoneNumber').val('967465486')
      this.st.telObj.number = '+380967465486'
    }
    // down
    if (where == 'ArrowDown' && this.st.step < 4) {
      $('.btn-cc').html('&nbsp+234&nbsp')
      $('.btn-flag').addClass('flag ua')
      $('#phoneNumber').val('7063317051')
      this.st.telObj.number = '+2347063317051'
    }
    // letf
    if (where == 'ArrowLeft' && this.st.step > 1) this.st.step--
    // right
    if (where == 'ArrowRight' && this.st.step < 4) this.st.step++

    log('Step: ', this.st.step)
  }


  onSelectionChange(idx) {
    this.st.checkOperator = idx
  }


  amSelectionChange(el) {
    this.st.checkedLot = el
    log('st.checkedLot', this.st.checkedLot)
    log('st', this.st)
  }


  toPage(number) {
    // this.st.operatorName = this.st.operators[this.st.checkOperator].operator
    this.st.step = number
  }


  top_up_info(number) {
    this.loading = true
    // task
    if (number !== false) {
      this.st.telObj.number = number
      this.namber_task = true
    }
    // button
    else 
      this.st.telObj.number = $('.btn-cc').text() + $('#phoneNumber').val()

    // ... prepare mumber ...
    this.st.telObj.prepare_number = this.utilService.remove_notNumbers(this.st.telObj.number) // remove not numbers
    log('number:' + this.st.telObj.number)
    log('prepare:' + this.st.telObj.prepare_number)
    let prepare_number = this.st.telObj.prepare_number

    if (prepare_number)
      this.apiService.topUpInfo(this.st.telObj.prepare_number)
        .subscribe(
        data => {
          this.loading = false
          log(' TOP UP INFO ')
          log('data: ', data)

          if (data.error){
            // normal Error response
            if (data.error.msg){
              swal("Oops", data.error.msg, "error")
              this.namber_task = false 
            } else {
              // TimeOut Error responce
              swal("Oops", data.error, "error")
              this.namber_task = false              
            }           
          }

          if (data.result.opts) {
            this.st.opts = data.result.opts
            this.st.products = data.result.products

            // .. auto check ...
            let autoSellected = this.st.products[this.st.autoChek]
            // log('autoSellected', autoSellected)
            this.st.checkedLot = {
              product_id:     autoSellected.product_id,     //  'TRLO-UA_KS-5'
              topup_currency: autoSellected.topup_currency, //  'UAH'
              currency:       autoSellected.currency,       //  'USD'
              denomination:   autoSellected.denomination,   //  '5'
              openRange:      autoSellected.openRange,      //  false
              openRangeMin:   autoSellected.openRangeMin,   //  1
              openRangeMax:   autoSellected.openRangeMax,   //  50000
              price:          autoSellected.price           //  0.21
            }
            this.setRamNum(1) // init value
          }
        },
        error => {
          this.loading = false
          log("Error in 'top_up_info()'", error)
          swal("Oops", "Something went wrong in 'top_up_info()' !", "error")
        })
  }


  top_up() {
    let total = this.st.checkedLot.price + this.st.processingFee

    // Have money?
    if (this.balance < total) {
      log('debug -  this.balance,  total', this.balance, total)

      swal("Oops", "Not enough money!", "error")
      setTimeout(()=> this.router.navigate(['/cheapcalls']), 1000)
      return 0
    }

    log(this.st)
    log('total: ', total)
    // --> api

    //  { opts: 
    //    { msisdn: '380967465486',
    //      country: 'Ukraine',
    //      operator: 'Kyivstar',
    //      iso: 'ua',
    //      canOverride: false,
    //      hasOpenRange: true },
    //   products: 
    //    [ { product_id: 'TRLO-UA_KS-5',
    //        topup_currency: 'UAH',
    //        currency: 'USD',
    //        denomination: '5',
    //        openRange: false,
    //        price: 0.21 },

    this.apiService.topUp({
      "number":        this.st.telObj.prepare_number,
      "product_id":    this.st.checkedLot.product_id,
      "denomination":  this.st.checkedLot.denomination,
      "price":         this.st.checkedLot.price + this.st.processingFee,
      "selectedRange": this.st.selectedRam,
      "send_sms":      false,
      "sms_text":      "",
      "userData":      this.userData
    })
      .subscribe(
      data => {
        this.loading = false
        log(' TOP UP ')
        log(data)
        // if (data.result.opts) {
        //   this.st.opts = data.result.opts
        //   this.st.products = data.result.products
        // }
        if (data.error) 
          swal("Oops", data.error.msg, "error")
        if (data.result.status == 201) {
          swal({
            title: "Good job!",
            text: 'Operation Successful',
            icon: "success",
          })          
          this.router.navigate(['/account'])
        }   
      },
      error => {
        this.loading = false
        log("Error in 'top_up()'", error)
        swal("Oops", "Something went wrong in 'top_up()' !", "error")
      })
  }


  setRam(value, idx){
    // log(value)
    // log('idx: ' ,idx)

    // check checkbox
    this.st.checkedLot = this.st.products[idx]
    this.st.autoChek = idx
    //
    let _100 = this.st.checkedLot.openRangeMax - this.st.checkedLot.openRangeMin
    let _1 = _100/100
    let real = value * _1
    log('real ',real )
    this.st.checkedLot.price = real
    this.st.selectedRam      = real

    // debag place
    // if (real == NaN) {
    //   this.st.checkedLot.price = 0
    //   this.st.selectedRam = 0
    // }

    // console.log(this.st.selectedRam)
  }


  setRamNum(val){
    log(val)
    this.st.checkedLot.price = val
    this.st.selectedRam      = val
  }

}
