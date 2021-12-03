import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './assets/index/index.component';
import { ErrorComponent } from './assets/error/error.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modulos/admin/admin.module').then(m => m.AdminModule)
  }
  ,{
    path: 'aeropuertos',
    loadChildren: () => import('./modulos/aeropuertos/aeropuertos.module').then(m => m.AeropuertosModule)
  },
  {
    path: 'estaciones',
    loadChildren: () => import('./modulos/estaciones/estaciones.module').then(m => m.EstacionesModule)
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/index'
  },
  {
    path: 'error',
    component: ErrorComponent,
  },{
    path: '**',
    redirectTo: '/error'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
