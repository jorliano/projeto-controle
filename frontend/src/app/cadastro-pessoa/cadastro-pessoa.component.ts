import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../service/pessoa.service';
import { Router } from '@angular/router'
import { AlertService } from '../service/alert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-server',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  telefones = [];

  constructor(private router: Router, private pessoaService: PessoaService, private alert: AlertService) { }

  ngOnInit() { }

  cadastarUser(form: NgForm) {

   if(form.valid){

     let pessoa = {nome: form.value.nome, cpf: form.value.cpf, data_nascimento: form.value.data_nascimento,
                    email: form.value.email, telefones: this.telefones };

     console.log(pessoa);
     this.pessoaService.savePessoa(pessoa).subscribe(
     res => {
             console.log(res);
             this.alert.success("Salvo com sucesso", true);
             this.router.navigate([""]);
             },
     err => {
             console.log("occured error");
             this.alert.error("Falha ao  salvar dados", true);
           }
     )
   }else{
     this.alert.error("E necessario preencher os campos", true);
   }
  }

  addFone(form: NgForm){
    this.telefones.push({ddd: form.value.ddd, numero: form.value.telefone});
    console.log(this.telefones);
  }

  removeFone(telefone){
    console.log(telefone);
    this.telefones.splice(this.telefones.indexOf(telefone), 1);
  }

}
