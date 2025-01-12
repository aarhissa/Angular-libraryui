import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { LoanPageComponent } from './loan-page/loan-page.component';
import { BackToMenuComponent } from './menu/back-to-menu/back-to-menu.component';
import { MailModalComponent } from './modal/mail-modal/mail-modal.component';
import { MessageModalComponent } from './modal/message-modal/message-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BookPageComponent,
    CustomerPageComponent,
    LoanPageComponent,
    BackToMenuComponent,
    MailModalComponent,
    MessageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   /* for using form elements like NgForm */
    HttpClientModule, /* for using http request elements end verbs like GET, POST, ... */
    MatDatepickerModule, MatInputModule,MatNativeDateModule, BrowserAnimationsModule, ReactiveFormsModule, /* for using input date picker -> need to install @angular/material package*/
    NgxSpinnerModule /* for using spinner */
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
