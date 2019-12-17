import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/index';
import { GlobalService } from '../../services/global.service';

declare var $: any
declare var jQuery: any
let log = console.log

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() classes: string;
  currentUser: User;

  constructor(
    public globalService: GlobalService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
  }

  ngOnInit() {
    window.scrollTo(0, 0)

    // move element
    // var teleport = setInterval(() => {
    //   var translator_parrent = $('.goog-te-gadget-simple').parent()
      
    //   var myClass = translator_parrent.attr("class")
    //   // log('Teleport', myClass, 'goog-te-gadget', myClass == 'skiptranslate goog-te-gadget')
    //   if (myClass == 'skiptranslate goog-te-gadget') {
    //     // var translator_block = $("#google_translate_element")
    //     this.globalService.dom_translator = $("#google_translate_element")

    //     // $('.top-nav>ul').append($('.goog-te-gadget>.goog-te-gadget-simple'))
    //     $('.top-nav>ul').append(this.globalService.dom_translator)
        

    //     //translator_block = JSON.parse(localStorage.getItem('translator_block'))
    //     // this.globalService.dom_translator.clone().appendTo(".top-nav>ul");

    //     clearInterval(teleport)
    //   } else {
    //     //alert()
    //     this.globalService.dom_translator.clone().appendTo(".top-nav>ul");
    //     clearInterval(teleport)

    //   }
    // }, 500)




  }

  isAdmin() {
    // log(this.currentUser)
    if (this.currentUser !== null) {
      if (this.currentUser.username) return this.currentUser.username == 'admin' 
      else return false
    }
    else return false
  }

}
