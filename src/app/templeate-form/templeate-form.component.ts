import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templeate-form',
  templateUrl: './templeate-form.component.html',
  styleUrls: ['./templeate-form.component.css']
})
export class TempleateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.usuario);
  }

}
