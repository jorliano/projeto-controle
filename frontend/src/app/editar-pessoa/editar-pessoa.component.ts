import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoaService } from '../service/pessoa.service';
import { AlertService } from '../service/alert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-server',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {


    pessoa = { telefones: [{id: 0}]};


    constructor(private router: Router, private route: ActivatedRoute, private pessoaService: PessoaService, private alert: AlertService ) { }

    ngOnInit() {
      this.route.params.subscribe(params =>  {
        let id = params['id'];
        console.log(id);
        if(id != 0){
           this.getPessoa(id);
        }
      })
    }

    getPessoa(id){
      this.pessoaService.getPessoa(id).subscribe(
        res => {
          console.log(res);
          this.pessoa = res;
        },
        err => {
          console.log("occured error");
          this.alert.error("Falha ao  ao carregar dados", true);
          this.router.navigate([""]);
        }
      )
    }

    updatepessoa(form: NgForm) {


      if(form.valid){

       let pessoa = {id: form.value.id, nome: form.value.nome, cpf: form.value.cpf, data_nascimento: form.value.data_nascimento,
                      email: form.value.email, telefones: this.pessoa.telefones };

       console.log(pessoa);
       this.pessoaService.updatePessoa(pessoa).subscribe(
         res => {
                 console.log(res);
                 this.alert.success("Editado com sucesso", true);
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
      let telefone = {ddd: form.value.ddd, numero: form.value.telefone};
      this.pessoa.telefones.push(telefone);
      console.log(this.pessoa.telefones);
    }

    removeFone(telefone){
      console.log(telefone);
      this.pessoa.telefones.splice(this.pessoa.telefones.indexOf(telefone), 1);
    }

}
