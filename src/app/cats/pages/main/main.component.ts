import { Component, OnInit } from '@angular/core';
import { Gato } from '../../interfaces/gatos.interface';
import { CatsService } from '../../services/cats.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cat!: Gato | undefined

  constructor( private catsService: CatsService ){}

  ngOnInit(): void {
    this.obtenerGatito()
  }
  
  obtenerGatito(){
    this.cat = undefined
    this.catsService.getRandomCat()
      .subscribe( ( res ) => {
        this.cat = res[0]
      })
  }
}
