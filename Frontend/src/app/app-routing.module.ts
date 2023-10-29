import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { InicioComponent } from './components/inicio/inicio.component';

const routes : Routes = [
  {path:'', component:InicioComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    bootstrap: [AppComponent]
  })
  export class AppRoutingModule { }