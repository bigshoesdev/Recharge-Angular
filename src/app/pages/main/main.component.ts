import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';

declare var jQuery:any;
declare var $ :any;
declare var swal: any;
let log =  console.log

@Component({
  selector: 'main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  public swal: any

  constructor(
    private util: UtilService
  ) {
  }

  ngOnInit() {
    // Simulate window.onload for plagins
    this.util.simulateWindowOnload()

    // $( '.slick-slider' ).ready(function() {
    //   $( ".pageWrapper" ).removeClass( "animsition" )
    // })

    
    let guard = setInterval(()=>{
      $( '.rev_slider_wrapper' ).ready(function() {
        // log(' >> EVENT 2 <<')
        let sl_wr_height = $( '.rev_slider_wrapper' ).height()
        if ( sl_wr_height > 0) {
          $( '.preloader' ).remove()
          clearInterval(guard)
        }
      })
    }, 500)

  }

  examplePopup(){
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    })
  }

}
