import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { Gato, Publish } from '../../interfaces/gatos.interface';
import { CatsService } from '../../services/cats.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [` 
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent {

  publishers = [
    {
      id: "Usuario",
      desc: "Usuario"
    },
    {
      id: "Internet",
      desc: "Internet"
    }
  ];

  cat: Gato = {
    breeds: [{
      id: '',
      name: '',
      temperament: '',
      description: '',
      origin: Publish.Usuario,
      alt_names: '',
      wikipedia_url: ''
    }],
    height: 1000,
    url:'',
    width: 1000,
  }

  constructor( private catsService: CatsService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackbar: MatSnackBar,
               public dialog: MatDialog ) {}

  ngOnInit(): void {

    if( !this.router.url.includes('editar') ){
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.catsService.getCatPorID( id ) )
      )
      .subscribe( ( cat ) => this.cat = cat );
  }

  guardar(){
    // comprobar que al menos tiene nombre
    if (this.cat.breeds[0].name.trim().length === 0) {
      return;
    } 

    if (this.cat.id) {
      // actulizar
      this.catsService.actualizarGatito(this.cat)
        .subscribe( cat => this.mostrarSnackbar('Registro actualizado') );
    } else {
      // crear
      this.catsService.agregarGatito(this.cat)
        .subscribe( cat => {
          this.router.navigate(['/cats/editar', cat.id])
          this.mostrarSnackbar('Registro creado')
        });
    }
  }

  borrarGatito(){

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.cat
    });

    dialog.afterClosed()
      .subscribe( resp => {
        if (resp) {
          this.catsService.borrarGatito( this.cat.id! )
            .subscribe( resp => {
              this.router.navigate(['/cats']);
            })
        }
      })

  }

  mostrarSnackbar( mensaje: string){

    this.snackbar.open( mensaje, 'Cerrar', {
      duration: 1900
    })

  }
}
