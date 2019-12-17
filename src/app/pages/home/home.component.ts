import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { User } from '../../models/index';
import { UserService } from '../../services/user.service';
import { APIService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { appConfig } from '../../app.config';


declare var jQuery: any
declare var $: any
var log = console.log



@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})



export class HomeComponent implements OnInit {
    @ViewChild('iframe') iframe: ElementRef;
    @HostListener('window:message', ['$event'])
    onMessage(e) {
        if (e.origin != "http://localhost:4200") {
            return false;
        }
        if (e.data.for == "user") {
            alert('here i am');
        }
    }

    currentUser: User;
    users: User[] = [];
    mailAim: String = ''
    msgIframe: String

    constructor(
        private userService: UserService,
        private API: APIService,
        private sanitizer: DomSanitizer,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }


    ngOnInit() {
        this.loadAllUsers();

        //           //
        // LISTENER  //
        //           //
        window.addEventListener("message", (e) => {
                console.log('**** From data ****')
                console.log(data)            
            try {
                var data = JSON.parse(e.data)
                console.log('**** From JSON data ****')
                console.log(data)

                // login successful if there's a jwt token in the response
                let user = data //response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user))
                    this.router.navigate(['/account'])
                }
            }
            catch (e) {
                console.log('**** It not JSON: ****')
                console.log(e.data)
            }
        }, false)

    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    getAllUsers(){
        this.API.getAllUsers("getAllUsers")
            .subscribe(
            data => {
                log('>>>>', data)
            },
            error => {
                alert(error)
            })   
    }

    test() {
        this.API.test("Text of mail ;)")
            .subscribe(
            data => {
                log('>>>>', data)
            },
            error => {
                alert(error)
            })
    }

    sendMail(mailAim) {
        log(mailAim)
        this.API.sendMail(mailAim, "Text of mail ;)")
            .subscribe(
            data => {
                log('>>>>', data)
            },
            error => {
                alert(error)
            })
    }

    sendVerifiedMail() {
        log('sendVerifiedMail()')
        this.API.sendVerifiedMail()
            .subscribe(
            data => {
                log('>>>>', data)
            },
            error => {
                alert(error)
            })
    }

    chargeStripe() {
        log('sendVerifiedMail()')
        this.API.chargeStripe(100)
            .subscribe(
            data => {
                log('>>>>', data)
            },
            error => {
                alert(error)
            })
    }

    openCheckout() {
        var handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_tfFiKccsSgizNvv2xKmiRcne',
            locale: 'auto',
            token: function (token: any) {
                alert(token.id)
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
            }
        });

        handler.open({
            name: 'Demo Site',
            description: '2 widgets',
            amount: 2000 //cents = $20
        });

    }

    iframeSubmit() {
        log('iframeSubmit()', )
        var iframe = document.getElementById('iframe');
        var iWindow = (<HTMLIFrameElement>iframe).contentWindow;

        iWindow.postMessage(this.msgIframe, 'http://127.0.0.1:3600');


    }

}



