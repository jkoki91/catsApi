import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { CatsRoutingModule } from './cats-routing.module';
import { MaterialModule } from '../material/material.module';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { GatoTarjetaComponent } from './components/gato-tarjeta/gato-tarjeta.component';
import { MainComponent } from './pages/main/main.component';




@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    ListadoComponent,
    ConfirmarComponent,
    GatoTarjetaComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    CatsRoutingModule,
    MaterialModule,
  ]
})
export class CatsModule { }
