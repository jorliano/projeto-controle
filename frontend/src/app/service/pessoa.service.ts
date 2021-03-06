import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PessoaService {

      url ="http://localhost:8080/ApiRest/pessoa/";

      constructor(public http: HttpClient) { }

      getPessoas = function(){
        return this.http.get(this.url + "listar");
      };

      getPessoa = function(id){
        return this.http.get(this.url + "pesquisar_id/" + id);
      };

      getPessoaPorNome = function(nome){
        return this.http.get(this.url + "pesquisar_nome/" + nome);
      };

      getPessoaPorCpf = function(cpf){
        return this.http.get(this.url + "pesquisar_cpf/" + cpf);
      };

      savePessoa = function(pessoa){
        return this.http.post(this.url + "cadastar", pessoa);
      };

      updatePessoa = function(pessoa){
        return this.http.put(this.url + "editar" ,  pessoa);
      };

      deletePessoa = function(id){
        return this.http.delete(this.url + "deletar/" +  id);
      };

}
