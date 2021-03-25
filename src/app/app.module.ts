import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CompanyListComponent } from './company-list/company-list.component';
import {CompanyService} from './company-list/company.service'
import { HttpClientModule } from '@angular/common/http';
import { CompanyAddComponent } from './company-add/company-add.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CompanyListComponent,
    CompanyAddComponent,
    NopagefoundComponent,
    CompanyUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
