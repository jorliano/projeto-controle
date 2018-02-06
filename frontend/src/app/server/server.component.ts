import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../service/provider.service';
import { AlertService } from '../service/alert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  users = [];
  user = {};

  constructor( private providerService: ProviderService, private alert: AlertService) { }

  getUsers(){
    this.providerService.getPessoas().subscribe(
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
    this.providerService.deletePessoa(user.id).subscribe(
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
       this.providerService.getPessoaPorNome(form.value.nome).subscribe(
       res => { this.user = res; console.log(res);},
       err => {  console.log("Error occured");}
     )
     }else{
        console.log("pesquisar por cpf");
       this.providerService.getPessoaPorCpf(form.value.cpf).subscribe(
         res => {this.user = res; },
         err => { console.log("Error occured");}
       )
     }
  }

}
