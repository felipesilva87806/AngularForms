import { TempleateFormComponent } from './templeate-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompoControlErroComponent } from '../compo-control-erro/compo-control-erro.component';



@NgModule({
  declarations: [
    TempleateFormComponent,
    CompoControlErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TemplateFormModule { }
