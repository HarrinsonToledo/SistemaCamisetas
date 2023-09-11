import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routes : Routes = [

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    bootstrap: [AppComponent]
  })
  export class AppRoutingModule { }