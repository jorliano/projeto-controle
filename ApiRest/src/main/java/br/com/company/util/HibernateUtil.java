package br.com.company.util;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.*;



public class HibernateUtil {
	private static final SessionFactory sessionFactory = buildSessionFactory();
	

	private static SessionFactory buildSessionFactory() {
		try {
			// Create the SessionFactory from standard (hibernate.cfg.xml)
			// config file.
			Configuration cfg = new Configuration();
			cfg.configure("hibernate.cfg.xml");
			System.out.println("conexão feita com sucesso");
			return cfg.buildSessionFactory();
		} catch (Exception ex) {
			// Log the exception.
			System.out.println("erro ao tentar criar a sessao " + ex);
			throw new ExceptionInInitializerError(ex);
		}
	}
	public static SessionFactory getSessionFactory() {
		return sessionFactory;
	}
}