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

  users = [];
  user = {};

  constructor( private pessoaService: PessoaService, private alert: AlertService) { }

  getUsers(){
    this.pessoaService.getPessoas().subscribe(
      res => {
        console.log(res);
        this.users = res;
        console.log(this.users);
      },
      err => {
          console.log("Error occured");
      })
  }

  ngOnInit() {
    this.getUsers();
  }

  delteUser(user){
    this.pessoaService.deletePessoa(user.id).subscribe(
      res => {
        this.getUsers();
      },
      err => {
        console.log("Error occured");
      }
    )
  }


  pesquisar(form: NgForm){
    console.log(form.value);
   if(form.value.nome != ""){
     console.log("pesquisar por nome");
       this.pessoaService.getPessoaPorNome(form.value.nome).subscribe(
       res => { this.user = res; console.log(res);},
       err => {  console.log("Error occured");}
     )
     }else{
        console.log("pesquisar por cpf");
       this.pessoaService.getPessoaPorCpf(form.value.cpf).subscribe(
         res => {this.user = res; },
         err => { console.log("Error occured");}
       )
     }
  }

}
