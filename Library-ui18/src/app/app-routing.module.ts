import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "src/app/app.component";
import { MenuComponent } from "src/app/menu/menu/menu.component";
import { BookPageComponent } from "src/app/book-page/book-page.component";
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { LoanPageComponent } from './loan-page/loan-page.component';

const routes: Routes = [
                        {path: '', component: MenuComponent},
                        {path: 'book-page', component: BookPageComponent},
                        {path: 'customer-page', component: CustomerPageComponent},
                        {path: 'loan-page', component: LoanPageComponent},
                        ];


//useHash: true - forcer le serveur à toujours suffixer l'url de base de l'application par #/
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
