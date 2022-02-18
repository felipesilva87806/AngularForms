import { map, first } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(first())
      .subscribe(dados => {
        this.resetar();
      },
        (error: any) => alert('erro'));
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: any) {    
    return !this.formulario.controls[campo]?.valid && this.formulario.controls[campo].touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

}
