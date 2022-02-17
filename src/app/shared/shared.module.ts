import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoControlErroComponent } from './compo-control-erro/compo-control-erro.component';



@NgModule({
  declarations: [
    CompoControlErroComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    CompoControlErroComponent
  ]
})
export class SharedModule { }
