import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomComponent } from './components/custom/custom.component';
import { PagoComponent } from './pago/pago.component';

const routes : Routes = [
  {path:'', component:InicioComponent},
  {path:'inicio', component:InicioComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'custom', component:CustomComponent},
  {path:'pago', component:PagoComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    bootstrap: [AppComponent]
  })
  export class AppRoutingModule { }