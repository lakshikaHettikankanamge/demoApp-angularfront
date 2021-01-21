import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewUsersComponent } from './organization/view-users/view-users.component';
import { CreateOrganizationComponent } from './organization/create-organization/create-organization.component';
import { CreateUserComponent } from './organization/create-user/create-user.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'organizations/:orgId', component: ViewUsersComponent },
  { path: 'createuser/:orgId', component: CreateUserComponent },
  { path: 'organizations', component: CreateOrganizationComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
