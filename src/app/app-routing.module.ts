import { NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'homepage', component: HomepageComponent, canActivate:[AuthGuard]},
  {path: '', redirectTo: '/login', pathMatch:'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
