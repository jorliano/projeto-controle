package br.com.company.rest;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import br.com.company.dao.PessoaDao;
import br.com.company.model.Pessoa;


@RestController
@RequestMapping(value = "/pessoa")
public class PessoaRest {
	
    final Logger logger = Logger.getLogger(PessoaRest.class);   
	
	PessoaDao dao = new PessoaDao();
	Gson g = new Gson();
	
	
	@RequestMapping(value = "listar", method = RequestMethod.GET, headers="Accept=application/json;charset=utf-8;Access-Control-Allow-Headers")
	public List<Pessoa> listarPessoa() {
		logger.info("Metodo listar pessoas chamado ");
		return dao.getPessoas();
	}		
	
	@RequestMapping(value = "/cadastar", method = RequestMethod.POST, headers="Accept=application/json;charset=utf-8;Access-Control-Allow-Headers")
	public String cadastar(@RequestParam(value = "cadastar") String dados) {
		
		logger.info("metodo cadastar pessoa chamado" + dados);		
		Pessoa pessoa = g.fromJson(dados, Pessoa.class);				

		if (pessoa != null) {							

			dao.cadastar(pessoa);			
			return "Sucesso";
		} 
		return "falhou";
	}
	
	@RequestMapping(value = "/editar", method = RequestMethod.PUT, headers="Accept=application/json;charset=utf-8")
	public String editar(@RequestParam(value = "editar") String dados) {
		
		logger.info("mettodo editar pessoa chamado" + dados);		
		Pessoa pessoa = g.fromJson(dados, Pessoa.class);				

		if (pessoa != null) {							

			dao.editar(pessoa);			
			return "Sucesso";
		} 
		return "falhou";
	}
	
	@RequestMapping(value = "/deletar/{id}", method = RequestMethod.DELETE, headers="Accept=application/json;charset=utf-8")
	public String deletar(@PathVariable(value = "id") long id) 
	{
		logger.info("Metodo deletar pessoa chamado id: "+id);	
		if(id != 0){
			Pessoa pessoa = dao.buscarPorId(id);
			dao.deletar(pessoa);
			return "Sucesso";
		}
		return "falhou";
	}
	
	
	@RequestMapping(value = "/pesquisar_nome/{nome}", method = RequestMethod.GET, headers="Accept=application/json;charset=utf-8")
	public Pessoa pesquisarPorNome(@PathVariable(value = "nome") String nome) 
	{	
		logger.info("Metodo pesquisar por nome chamado nome: "+nome);
		return dao.buscarPorNome(nome);
	}
	
	@RequestMapping(value = "/pesquisar_cpf/{cpf}", method = RequestMethod.GET, headers="Accept=application/json;charset=utf-8")
	public Pessoa pesquisarPorCpf(@PathVariable(value = "cpf") String cpf) 
	{
		logger.info("Metodo pesquisar por cpf chamado cpf: "+cpf);			
		return dao.buscarPorNome(cpf);
	}
	
	@RequestMapping(value = "/pesquisar_id/{id}", method = RequestMethod.GET, headers="Accept=application/json;charset=utf-8")
	public Pessoa pesquisarPorId(@PathVariable(value = "id") long id) 
	{
		logger.info("Metodo pesquisar por id chamado id: "+id);			
		return dao.buscarPorId(id);
	}
}
