package DAO;

import javax.persistence.EntityManager;

import model.Periodo;
import utils.JpaUtil;

public class PeriodoDAO {
	public void save(Periodo p) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			em.persist(p);
			em.getTransaction().commit();
		} catch (Exception e) {
			//em.getTransaction().rollback();
			System.out.println(e.getMessage());
		} finally {
			em.close();
		}
	}

	public Periodo getById(Integer id) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			return em.find(Periodo.class, id);
		} finally {
			em.close();
		}

	}

	public void delete(Periodo p) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			em.remove(em.contains(p) ? p : em.merge(p));
			em.getTransaction().commit();
		} catch (Exception e) {
			em.getTransaction().rollback();
			System.out.println(e.getMessage());
		} finally {
			em.close();
		}

	}

	public void update(Periodo p) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			em.merge(p);
			em.getTransaction().commit();
		} finally {
			em.close();
		}
	}
}