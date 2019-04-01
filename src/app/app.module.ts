import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { CustomersModule } from './customers/customers.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from'@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';


const routes: Routes = [
  {path: 'contracts', loadChildren: '../app/contracts/contracts.module#ContractsModule'},
  {path: '', redirectTo: 'customers', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes),
    CustomersModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
