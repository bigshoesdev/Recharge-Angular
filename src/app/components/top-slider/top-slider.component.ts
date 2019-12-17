import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $ :any;

@Component({
  selector: 'top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: ['./top-slider.component.sass']
})
export class TopSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // For phone input
    setTimeout(() => ifInputLes(), 100)
    let ifInputLes = () => {
      if (window.innerWidth > 700) $('.phone-number-component').css('width', '500px')
      if (window.innerWidth < 700) $('.phone-number-component').css('width', '400px')
      if (window.innerWidth < 500) $('.phone-number-component').css('width', '300px')
    }
    $( window ).resize(() => ifInputLes() );    
    
  }

}
