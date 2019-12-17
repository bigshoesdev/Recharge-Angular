import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }


  //
  // Create event 'window.load'
  //
  simulateWindowOnload() {
    // Some events: Load, DOMContentLoaded
    //
    var event = document.createEvent('Event');
    // Define that the event name is 'build'.
    event.initEvent('load', true, true);
    // target can be any Element or other EventTarget.
    window.dispatchEvent(event);
  }



  //
  // Generate Rendom String
  //
  randomString(i) {
    var text, possible, how, res$, i$, ridx$;
    text = '';
    possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    res$ = [];
    for (i$ = 1; i$ <= i; ++i$) {
      ridx$ = i$;
      res$.push(ridx$);
    }
    how = res$;
    how.map(function () {
      return text += possible.charAt(Math.floor(Math.random() * possible.length));
    });
    return text;
  }



  //
  // Remove chars from string ( '5xix8' --> '58')
  //
  remove_notNumbers(string){
    if (string) {
      let num = ''
      let arr = string.split('')
      for ( let el of arr) {
        if (
          el == '0' ||
          el == '1' ||
          el == '2' ||
          el == '3' ||
          el == '4' ||
          el == '5' ||
          el == '6' ||
          el == '7' ||
          el == '8' ||
          el == '9'
        ) {
          num += el
        }
      }
      return num
    }
    return undefined
  }



}
