import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProviderService } from '../service/provider.service';
import { AlertService } from '../service/alert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-server',
  templateUrl: './update-server.component.html',
  styleUrls: ['./update-server.component.css']
})
export class UpdateServerComponent implements OnInit {


    user = { telefones: [{id: 0}]};


    constructor(private router: Router, private route: ActivatedRoute, private providerService: ProviderService, private alert: AlertService ) { }

    ngOnInit() {
      this.route.params.subscribe(params =>  {
        let id = params['id'];
        console.log(id);
        if(id != 0){
           this.getUser(id);
        }
      })
    }

    getUser(id){
      this.providerService.getPessoa(id).subscribe(
        res => {
          console.log(res);
          this.user = res;
        },
        err => {
          console.log("occured error");
          this.alert.error("Falha ao carregar dados", true);
          this.router.navigate([""]);
        }
      )
    }

    updateUser(form: NgForm) {

      console.log(form.value);
      if(form.valid){

       let pessoa = {id: form.value.id, nome: form.value.nome, cpf: form.value.cpf, data_nascimento: form.value.data_nascimento,
                      email: form.value.email, telefones: this.user.telefones };

       this.providerService.updatePessoa(pessoa).subscribe(
         res => {
                 console.log(res);
                 this.alert.success("Editado com sucesso", true);
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
      let id =  this.user.telefones.length == 0 ? 1 : this.user.telefones[this.user.telefones.length - 1].id + 1;
      let telefone = {id: id, ddd: form.value.ddd, descricao: form.value.telefone};
      this.user.telefones.push(telefone);
      console.log(this.user.telefones);
    }

    removeFone(telefone){
      console.log(telefone);
      this.user.telefones.splice(this.user.telefones.indexOf(telefone), 1);
    }

}
