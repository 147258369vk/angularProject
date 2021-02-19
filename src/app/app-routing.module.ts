import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path:'reg',
    component:RegisterComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'form',
    component:UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
