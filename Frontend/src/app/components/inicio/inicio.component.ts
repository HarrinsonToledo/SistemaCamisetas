import { Component } from '@angular/core';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  rango: number[];

  roles!: Array<any>
  constructor(private user: UserService) {
    this.rango = Array.from({ length: 12}, (_,i) => i + 1)
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
