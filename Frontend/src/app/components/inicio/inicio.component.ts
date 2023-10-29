import { Component } from '@angular/core';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  roles!: Array<any>
  constructor(private user: UserService) {

  }

  ngOnInit() {
    this.user.getUser().subscribe({
      next: Response => {
        console.log(Response)
        this.roles = Response
      },
      error: Error => {
        console.log(Error.error)
      }
    })
  }
}
