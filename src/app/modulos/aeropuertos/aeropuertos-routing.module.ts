import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../aeropuertos/create/create.component';
import { EditComponent } from '../aeropuertos/edit/edit.component';
import { GetComponent } from '../aeropuertos/get/get.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
  },{
    path: 'edit/:id',
    component: EditComponent,
  },{
    path: 'get',
    component: GetComponent,
  },{
    path: '',
    redirectTo: 'get'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AeropuertosRoutingModule { }
