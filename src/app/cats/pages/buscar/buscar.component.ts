import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Gato, GatoBreed } from '../../interfaces/gatos.interface';
import { CatsService } from '../../services/cats.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  cats: GatoBreed[] = []
  breeds: GatoBreed[] = []
  termino: string = '';
  gatoSeleccionado: Gato | undefined;


  constructor( private catsService: CatsService ) {}

  ngOnInit(): void {
    this.catsService.getBreeds()
      .subscribe( ( res ) => {
        this.breeds = res
      })
  }

  buscando(){
    this.cats = this.breeds.filter( breed => breed.name.toLocaleLowerCase().includes(this.termino.trim().toLocaleLowerCase()))
  }

  opcionSeleccionada( event : MatAutocompleteSelectedEvent ) {
    this.gatoSeleccionado = undefined;
    this.termino = '';
    if(!event.option.value){
      this.gatoSeleccionado = undefined;
      return;
    }

    const gato : GatoBreed = event.option.value;
    this.termino = gato.name;

    this.catsService.getCatByBreed( gato.id )
      .subscribe( cat => this.gatoSeleccionado = cat[0])
  }

}
