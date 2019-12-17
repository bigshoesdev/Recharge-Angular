import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

//libs

// Router component
import { AppRoutingModule } from './app-routing.module';

// Pages
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FAQComponent } from './pages/faq/faq.component';
import { AccountComponent } from './pages/account/account.component';
import { TopupComponent } from './pages/topup/topup.component';
import { CheapcallsComponent } from './pages/cheapcalls/cheapcalls.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { PrivacyStatementComponent } from './pages/privacy-statement/privacy-statement.component';
import { FirstInstructionComponent } from './pages/first-instruction/first-instruction.component';
import { PassportAuthTokenComponent } from './pages/passport-auth-token/passport-auth-token.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { TopSliderComponent } from './components/top-slider/top-slider.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PhoneInputComponent } from './components/phone-input/phone-input.component';
import { PreloaderComponent } from './components/preloader/preloader.component';

// Services
import { UtilService } from './services/util.service'; 
import { FixUiService } from './services/fix-ui.service';
import { CheckMobileOperatorService } from './services/check-mobile-operator.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { TaskService } from './services/task.service';
import { APIService } from './services/api.service';
import { AdminService } from './services/admin.service';
import { GlobalService } from './services/global.service';

// Pipes
import { JsonFormatPipe } from './pipes/json-format.pipe';
// Guards
import { AuthGuard } from './guards/index';
// Helpers
import { customHttpProvider } from './helpers/index';






@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    HeaderComponent,
    TopSliderComponent,
    FooterComponentComponent,
    TopBarComponent,
    LoginComponent,
    RegistrationComponent,
    AboutUsComponent,
    FAQComponent,
    AccountComponent,
    TopupComponent,
    CheapcallsComponent,
    PhoneInputComponent,
    JsonFormatPipe,
    RegisterComponent,
    HomeComponent,
    TermsConditionsComponent,
    PrivacyStatementComponent,
    FirstInstructionComponent,
    PassportAuthTokenComponent,
    AdminPanelComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UtilService,
    FixUiService,
    CheckMobileOperatorService,
    AuthenticationService,
    UserService,
    TaskService,
    APIService,
    AuthGuard,
    customHttpProvider,
    AdminService,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
