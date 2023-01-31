import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { Gato } from '../../interfaces/gatos.interface';
import { CatsService } from '../../services/cats.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  styles:[`
    mat-card{
      margin-top: 20px;
    }
  `]
})
export class ListadoComponent implements OnInit {

  cats!: Gato[] | undefined;
  url : string = '';

  constructor ( private router: Router,
                private catsService: CatsService ) {}

  ngOnInit() : void {
    this.url = this.router.url;

    this.obtenerGatitos();
  }

  obtenerGatitos(){
    this.cats = undefined;
    this.catsService.getCatList(this.router.url)
    .subscribe((res) => {
      this.cats = res
    });
  }
}
