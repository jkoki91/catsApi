import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [ 
  {
    path:'',
    component: HomeComponent,
    children: [
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'mi-listado',
        component: ListadoComponent
      },
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'editar/:id',
        component: AgregarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: '**',
        redirectTo: 'main'
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class CatsRoutingModule { }
