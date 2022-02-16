import { TempleateFormComponent } from './templeate-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompoControlErroComponent } from '../compo-control-erro/compo-control-erro.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TempleateFormComponent,
    CompoControlErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ]
})
export class TemplateFormModule { }
