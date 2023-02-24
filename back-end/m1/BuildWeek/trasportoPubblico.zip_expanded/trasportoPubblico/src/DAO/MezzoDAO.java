package DAO;

import javax.persistence.EntityManager;

import model.Mezzo;
import utils.JpaUtil;

public class MezzoDAO {
	public void save(Mezzo m) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			em.persist(m);
			em.getTransaction().commit();
		} catch (Exception e) {
			//em.getTransaction().rollback();
			System.out.println(e.getMessage());
		} finally {
			em.close();
		}
	}

	public Mezzo getById(Integer id) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			return em.find(Mezzo.class, id);
		} finally {
			em.close();
		}

	}

	public void delete(Mezzo m) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			em.remove(em.contains(m) ? m : em.merge(m));
			em.getTransaction().commit();
		} catch (Exception e) {
			em.getTransaction().rollback();
			System.out.println(e.getMessage());
		} finally {
			em.close();
		}

	}

	public void update(Mezzo m) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			em.merge(m);
			em.getTransaction().commit();
		} finally {
			em.close();
		}
	}
}
