import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';

import { Gato } from '../../interfaces/gatos.interface';
import { CatsService } from '../../services/cats.service';

@Component({
  selector: 'app-gato-tarjeta',
  templateUrl: './gato-tarjeta.component.html',
  styleUrls: ['./gato-tarjeta.component.css'],
  styles: [`
    mat-card{
      margin-top: 10px;
      height: 400px;
      justify-content: space-between;
    }
    img{
      max-height: 180px;
    }
    `]
})
export class GatoTarjetaComponent {

  @Input() cat!: Gato | undefined;

  editable: boolean = false;

  constructor ( private router: Router,
                private catsService: CatsService,
                private snackbar: MatSnackBar ) {}

  ngOnInit() : void {
    if(this.router.url === '/cats/mi-listado'){
      this.editable = true;
    } else {
      this.editable = false;
    }
  }
  
  anadirGatito() {
    console.log('Gato añadido');
    this.catsService.agregarGatito(this.cat!)
        .subscribe( cat => {
          this.mostrarSnackbar('Gatito añadido')
        });
  }

  mostrarSnackbar( mensaje: string){
    this.snackbar.open( mensaje, 'Cerrar', {
      duration: 1900
    })
  }
}
