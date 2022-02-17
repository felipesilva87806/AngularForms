import { map, first } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {


  formulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, []],
      email: [null, []]
    });
  }

  onSubmit() {
    this.http.post('https://httpbin.org/post',JSON.stringify(this.formulario.value))
    .pipe(first())
    .subscribe(dados => {
      console.log(dados);
      this.resetar();
    },
    (error: any) => alert('erro'));
  }

  resetar(){
    this.formulario.reset();
  }

}
