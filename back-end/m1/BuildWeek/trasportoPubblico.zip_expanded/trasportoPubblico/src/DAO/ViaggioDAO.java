package DAO;

import javax.persistence.EntityManager;

import model.Viaggio;
import utils.JpaUtil;

public class ViaggioDAO {
	public void save(Viaggio v) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			em.persist(v);
			em.getTransaction().commit();
		} catch (Exception e) {
			// em.getTransaction().rollback();
			System.out.println(e.getMessage());
		} finally {
			em.close();
		}
	}

	public Viaggio getById(Integer id) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			return em.find(Viaggio.class, id);
		} finally {
			em.close();
		}

	}

	public void delete(Viaggio v) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			em.remove(em.contains(v) ? v : em.merge(v));
			em.getTransaction().commit();
		} catch (Exception e) {
			em.getTransaction().rollback();
			System.out.println(e.getMessage());
		} finally {
			em.close();
		}

	}

	public void update(Viaggio v) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			em.merge(v);
			em.getTransaction().commit();
		} finally {
			em.close();
		}
	}
}