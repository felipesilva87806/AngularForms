import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, map } from 'rxjs';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

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

  
  form : FormGroup = new FormGroup({});


  constructor(private http: HttpClient,
              private formBuilder: FormBuilder,
              ) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Rua: [null,[]],
      Bairro: [null,[]],
      Cidade: [null,[]]
    });
  }  

  onSubmit() {
    console.log(this.usuario);
    console.log(this.form);
  }

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  ConsultaCEP(cep: any) {
    cep.value = cep.value.replace(/\D/g, '');
    if (cep != "") {
      var validaCep = /^[0-9]{8}$/;
      if (validaCep.test(cep.value)) {
        this.http.get(`https://viacep.com.br/ws/${cep.value}/json`)
          .subscribe(
            x => {
              this.form.patchValue({
                Rua: x
              })
            },
            erro => {
              if (erro.status == 404) {
                console.log('Erro na consulta do CEP')
              }
            });
      }
    }
  }

  populaDadosDoFormulario(dados: any, form: Form) {

  }



}
