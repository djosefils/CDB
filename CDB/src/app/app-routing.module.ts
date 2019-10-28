import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './page/companies/companies.component';
import { ComputersComponent } from './page/computers/computers.component';
import { ComputerEditComponent } from './page/computer-edit/computer-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  { path: 'companies', component: CompaniesComponent },
  { path: 'computers', component: ComputersComponent },
  { path: 'edit-computer/:name', component: ComputerEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
