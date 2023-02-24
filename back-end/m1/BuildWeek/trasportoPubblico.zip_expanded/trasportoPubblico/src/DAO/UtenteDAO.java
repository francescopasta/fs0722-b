package DAO;

import javax.persistence.EntityManager;

import model.Utente;
import utils.JpaUtil;

public class UtenteDAO {
	public void save(Utente u) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			em.persist(u);
			em.getTransaction().commit();
		} catch (Exception e) {
			em.getTransaction().rollback();
			System.out.println(e.getMessage());
		} finally {
			em.close();
		}
	}

	public Utente getById(Integer id) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			return em.find(Utente.class, id);
		} finally {
			em.close();
		}

	}

	public void delete(Utente u) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			em.remove(em.contains(u) ? u : em.merge(u));
			em.getTransaction().commit();
		} catch (Exception e) {
			em.getTransaction().rollback();
			System.out.println(e.getMessage());
		} finally {
			em.close();
		}

	}

	public void update(Utente u) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			em.merge(u);
			em.getTransaction().commit();
		} finally {
			em.close();
		}
	}
}
