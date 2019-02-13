import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncrementadorComponent } from './incrementador/incrementador.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
