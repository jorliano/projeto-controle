import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../service/pessoa.service';
import { AlertService } from '../service/alert.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-server',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas = [];

  constructor( private pessoaService: PessoaService, private alert: AlertService) { }

  ngOnInit() {
      this.getPessoas();
   }

  getPessoas(){
    this.pessoaService.getPessoas().subscribe(
      res => {
        console.log(res);
        this.pessoas = res;
      },
      err => {
          this.alert.error("Erro ao carregar dados ", true);
      })
  }


  deletarPessoa(id){
    if(confirm("Você tem certeza")){
      this.pessoaService.deletePessoa(id).subscribe(
        res => {
          this.alert.success("Delete com sucesso "+res);
          this.getPessoas();
        },
        err => {
          this.alert.error("Erro ao deletar ", true);
        }
      )
    }
  }

  pesquisar(form: NgForm){
    console.log(form.value);
   if(form.value.nome != ""){
     console.log("pesquisar por nome");
       this.pessoaService.getPessoaPorNome(form.value.nome).subscribe(
       res => { this.pessoas = res; console.log(res);},
       err => { this.alert.error("Pesquisa não encontrada", true);}
     )
     }else{
        console.log("pesquisar por cpf");
       this.pessoaService.getPessoaPorCpf(form.value.cpf).subscribe(
         res => { this.pessoas = res; },
         err => { this.alert.error("Pesquisa não encontrada", true);}
       )
     }
  }

}
