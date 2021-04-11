package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Proizvod;
import rva.repository.ProizvodRepository;

@RestController
public class ProizvodRestController {

	@Autowired
	private ProizvodRepository proizvodRepository;
	
	@GetMapping("proizvod")
	public Collection<Proizvod> getProizvodi(){
		return proizvodRepository.findAll();
	};
	
	@GetMapping("proizvod/{id}")
	public Proizvod getProizvod(@PathVariable ("id") Integer id) {
		return proizvodRepository.getOne(id);
	}
	
	@GetMapping("proizvodNaziv/{naziv}")
	public Collection<Proizvod> getProizvodByNaziv(@PathVariable("naziv") String naziv) {
		return proizvodRepository.findByNazivContainingIgnoreCase(naziv);
	}
}
