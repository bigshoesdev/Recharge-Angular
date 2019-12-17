import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/index';

// Pages
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { PrivacyStatementComponent } from './pages/privacy-statement/privacy-statement.component';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FAQComponent } from './pages/faq/faq.component';
import { AccountComponent } from './pages/account/account.component';
import { TopupComponent } from './pages/topup/topup.component';
import { CheapcallsComponent } from './pages/cheapcalls/cheapcalls.component';

import { FirstInstructionComponent } from './pages/first-instruction/first-instruction.component';
import { PassportAuthTokenComponent } from './pages/passport-auth-token/passport-auth-token.component';

import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '',             component: MainComponent },
  { path: 'not-found',    component: NotFoundComponent },
  { path: 'login',        component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'register',     component: RegisterComponent },
  { path: 'home',         component: HomeComponent },
  { path: 'about-us',     component: AboutUsComponent },
  { path: 'faq',          component: FAQComponent },
  { path: 'account',      component: AccountComponent,    canActivate: [AuthGuard] },
  { path: 'topup',        component: TopupComponent,      canActivate: [AuthGuard] },
  { path: 'cheapcalls',   component: CheapcallsComponent, canActivate: [AuthGuard] },
  { path: 'terms-conditions',  component: TermsConditionsComponent },
  { path: 'privacy-statement', component: PrivacyStatementComponent },
  { path: 'first-instruction', component: FirstInstructionComponent },
  { path: 'passport-auth-token/:id', component: PassportAuthTokenComponent },
  { path: 'admin-panel',             component: AdminPanelComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'not-found' }

  /* 
  EXAMPLES

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
