import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewEmployeeComponent } from './employee/add-new-employee/add-new-employee.component';

const routes: Routes = [
  { path: 'addemployee', component: AddNewEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
