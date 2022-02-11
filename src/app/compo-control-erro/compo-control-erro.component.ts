import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo-control-erro',
  templateUrl: './compo-control-erro.component.html',
  styleUrls: ['./compo-control-erro.component.css']
})
export class CompoControlErroComponent implements OnInit {


  @Input() mostrarErro: boolean = false;
  @Input() msgErro: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
