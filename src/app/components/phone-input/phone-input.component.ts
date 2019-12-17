import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { NgForm } from '@angular/forms';
declare var $: any
declare var jQuery: any
declare var document: any
declare var swal: any
var log = console.log


@Component({
  selector: 'phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.sass']
})
export class PhoneInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {
      setTimeout(()=>{
        $('.input-phone').intlInputPhone();

        document.getElementById("btn-country").addEventListener("click", function(){
          setTimeout(()=>{
            if ( !$( ".input-group-btn" ).hasClass( "open" ) ) $('.input-group-btn').addClass( "open" );
            $
          }, 100)
          
        });        
      },10)      
      
    })

  }



  handleNumber(){
    let firstPart = $('.btn-cc').text()
    let secondPart = $('#phoneNumber').val()
    //
    let stateOfNumber = $('.intlInputPhone').val()
    log(stateOfNumber)


    // intlInputPhone
    
    if ($('.state').text() == 'true') {
      this.counter = {
        state: true,
        number: firstPart + secondPart
      }      
    }else this.counter.state = false
  }

  // BEGIN - For input binding
  counterValue: any
  @Input()
  get counter() {
    return this.counterValue;
  }
  @Output() counterChange = new EventEmitter();
  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }
  // END - For input binding



  
}
