import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../service/provider.service';
import { Router } from '@angular/router'
import { AlertService } from '../service/alert.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {

  telefones = [];

  constructor(private router: Router, private providerService: ProviderService, private alert: AlertService) { }

  ngOnInit() { }

  cadastarUser(form: NgForm) {

   if(form.valid){

     let pessoa = {nome: form.value.nome, cpf: form.value.cpf, data_nascimento: form.value.data_nascimento,
                 email: form.value.email, telefones: this.telefones };

     this.providerService.savePessoa(pessoa).subscribe(
     res => {
             console.log(res);
             this.alert.success("Salvo com sucesso", true);
             this.router.navigate([""]);
             },
     err => {
             console.log("occured error");
             this.alert.error("Falha salvar dados", true);
           }
     )
   }else{
     this.alert.error("E necessario preencher os campos", true);
   }
  }

  addFone(form: NgForm){
    let id =  this.telefones.length == 0 ? 1 : this.telefones[this.telefones.length - 1].id + 1;
    this.telefones.push({id: id, ddd: form.value.ddd, descricao: form.value.telefone});
    console.log(this.telefones);
  }

  removeFone(telefone){
    console.log(telefone);
    this.telefones.splice(this.telefones.indexOf(telefone), 1);
  }

}
