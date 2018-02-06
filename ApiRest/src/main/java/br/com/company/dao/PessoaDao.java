package br.com.company.dao;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Session;
import br.com.company.model.Pessoa;
import br.com.company.util.HibernateUtil;

public class PessoaDao {

	private Session session;	
	final Logger logger = Logger.getLogger(PessoaDao.class);
	
	public List getPessoas(){			
		try{	
			session = HibernateUtil.getSessionFactory().openSession();
	    	session.beginTransaction();        	       
	        return session.createQuery ("from Pessoa").getResultList();
	        
	    } catch (Exception e) {
	    	logger.error("erro ao listar pessoas no banco "+e.getMessage());	        
	    }
		finally{
			session.close();
		}
		return null;
	}
	
	public Pessoa buscarPorNome(String nome) {			
		try {
			session = HibernateUtil.getSessionFactory().openSession();
	    	session.beginTransaction();    		    	  
	        return (Pessoa) session.createQuery("from Pessoa where nome = :nome" ).
	    	    	setParameter("nome", nome).getSingleResult();	
	        
	    } catch (Exception e) {
	    	logger.error("erro ao pesquisar pessoa por nome no banco "+e.getMessage());	    	
	    }
		finally{
			session.close();
		}
		return null;
	}
	
	public Pessoa buscarPorCpf(String cpf) {			
		try {	    	
			session = HibernateUtil.getSessionFactory().openSession();
	    	session.beginTransaction();    	 	    	     	            	         	    	  	    	  
	        return (Pessoa) session.createQuery("from Pessoa where cpf = :cpf" ).
	  	    	            setParameter("cpf", cpf).getSingleResult();
	        
	    } catch (Exception e) {	         
	         logger.error("erro ao pesquisar pessoa por cpf no banco "+e.getMessage());
	    }
		finally{
			session.close();
		}
		return null;
	}
	
	public Pessoa buscarPorId(Long id) {		
		try {
			session = HibernateUtil.getSessionFactory().openSession();
	    	session.beginTransaction();	    		    	     	            	         	    	  	    	  
	        return (Pessoa) session.createQuery("from Pessoa where id = :id" ).
	        						setParameter("id", id).getSingleResult();	 
	        
	    } catch (Exception e) {
	    	logger.error("erro ao pesquisar pessoa por id no banco "+e.getMessage());	         
	    }
		finally{
			session.close();
		}
		return null;
	}	
	
	public void cadastar(Pessoa pessoa) {		
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			session.beginTransaction();
			session.save(pessoa);
			session.getTransaction().commit();
		}
		catch(ExceptionInInitializerError e)
		{			
			logger.error("erro ao salvar pessoa nome no banco "+e.getMessage());
		}
		finally {				
			session.close();
		}		
	}	

	public void editar(Pessoa pessoa) {		
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			session.beginTransaction();
			session.update(pessoa);
			session.getTransaction().commit();
		}
		catch(ExceptionInInitializerError e)
		{			
			logger.error("erro ao ediatr pessoa nome no banco "+e.getMessage());
		}
		finally {				
			session.close();
		}		
	}

	public void deletar(Pessoa pessoa) {		
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			session.beginTransaction();
			session.delete(pessoa);
			session.getTransaction().commit();
		}
		catch(ExceptionInInitializerError e)
		{			
			logger.error("erro ao deletar pessoa no banco "+e.getMessage());
		}
		finally {				
			session.close();
		}		
	}
}
