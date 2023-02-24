package DAO;

import javax.persistence.EntityManager;

import model.PuntoEmissione;
import utils.JpaUtil;

public class PuntoEmissioneDAO {

	public void save(PuntoEmissione p) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			em.persist(p);
			em.getTransaction().commit();
		} catch (Exception e) {
			em.getTransaction().rollback();
			System.out.println(e.getMessage());
		} finally {
			em.close();
		}
	}

	public PuntoEmissione getById(Integer id) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

		try {
			em.getTransaction().begin();
			return em.find(PuntoEmissione.class, id);
		} finally {
			em.close();
		}

	}

	public void delete(PuntoEmissione p) {
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

	public void update(PuntoEmissione p) {
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
