import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './page/companies/companies.component';
import { ComputersComponent } from './page/computers/computers.component';
import { ComputerEditComponent } from './page/computer-edit/computer-edit.component';
import { CompagnyService } from './service/compagny.service';
import { ComputerService } from './service/computer.service';
import { PageableService } from './service/pageable.service';
import { CustomPageComponent } from './page/custom-page/custom-page.component';



@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    ComputersComponent,
    ComputerEditComponent,
    CustomPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CompagnyService,ComputerService,PageableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
