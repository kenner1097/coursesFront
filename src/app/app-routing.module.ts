import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CreateRegisterComponent } from './create-register/create-register.component';
import { LogginComponent } from './loggin/loggin.component';

const routes: Routes = [
  /*
  * Rutas para redireccionar al /appComponent cada que se envie un Path vacio
  */
  {path: '' , redirectTo: '/userComponent', pathMatch: 'full'},
  {path: 'appComponent', component: AppComponent},
  {path: 'userComponent', component: UserComponent},
  {path: 'createRegisterComponent', component: CreateRegisterComponent},
  {path: 'logginComponent', component: LogginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }