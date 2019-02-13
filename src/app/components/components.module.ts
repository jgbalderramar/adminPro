import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { GraficoComponent } from './grafico/grafico.component';
import { GrficoDonaComponent } from './grfico-dona/grfico-dona.component';

@NgModule({
  declarations: [IncrementadorComponent, GraficoComponent, GrficoDonaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
