package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import rva.jpa.Proizvod;
import rva.jpa.Proizvodjac;
import rva.jpa.StavkaRacuna;

public interface ProizvodjacRepository extends JpaRepository <Proizvodjac, Integer>{
	
	Collection<Proizvodjac> findByNazivContainingIgnoreCase(String naziv);
	// Collection<Proizvodjac> findByProizvod(Proizvod proizvod);

}
