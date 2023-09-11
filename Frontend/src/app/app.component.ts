import { Component } from '@angular/core';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonaService]
})
export class AppComponent {
  title = 'Frontend';

  /*constructor(private persona: PersonaService) {

  }

  ngOnInit() {
    this.persona.getPersonas().subscribe( data => {
      console.log(data)
    })
  }*/
}
