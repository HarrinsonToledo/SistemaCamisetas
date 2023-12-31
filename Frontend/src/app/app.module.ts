import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { NarvarComponent } from './components/narvar/narvar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomComponent } from './components/custom/custom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagoComponent } from './pago/pago.component';

@NgModule({
  declarations: [
    AppComponent,
    NarvarComponent,
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    CustomComponent,
    PagoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }