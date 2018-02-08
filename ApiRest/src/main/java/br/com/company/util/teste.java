package br.com.company.util;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import br.com.company.dao.PessoaDao;
import br.com.company.model.Pessoa;
import br.com.company.model.Telefone;

public class teste {

	public static void main(String[] args) {

		for (int i = 0; i < 5; i++) {

			Pessoa p = new Pessoa();
			p.setCpf("11111111111");
			p.setNome("Teste "+i);
			p.setEmail("g@gmail.com");
			p.setDataNascimento(new Date("10/10/199"+i));

			List l = new ArrayList<>();
			Telefone t = new Telefone();
			t.setDdd("15");
			t.setNumero("999999955");
			Telefone t2 = new Telefone();
			t2.setDdd("25");
			t2.setNumero("999999955");
			Telefone t3 = new Telefone();
			t3.setDdd("35");
			t3.setNumero("999999955");
			l.add(t);
			l.add(t2);
			l.add(t3);

			p.setTelefones(l);
			new PessoaDao().cadastar(p);;
		}
	}
}
