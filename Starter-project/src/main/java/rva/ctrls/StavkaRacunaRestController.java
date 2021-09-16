package rva.ctrls;

import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import rva.jpa.Proizvodjac;
import rva.jpa.Racun;
import rva.jpa.StavkaRacuna;
import rva.repository.ProizvodjacRepository;
import rva.repository.StavkaRacunaRepository;

@CrossOrigin
@RestController
@Api(tags = {"StavkaRacuna CRUD operacije"})
public class StavkaRacunaRestController {

	@Autowired
	private StavkaRacunaRepository stavkaRacunaRepository;
	
	@Autowired 
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("stavkaRacuna")
	public Collection<StavkaRacuna> getAllStavkeRacuna(){
		return stavkaRacunaRepository.findAll();
	};
	
	@GetMapping("stavkaRacuna/{id}")
	public StavkaRacuna getStavkaRacuna(@PathVariable ("id") Integer id) {
		return stavkaRacunaRepository.getOne(id);
	}
	
	@GetMapping("stavkaRacunaRacun/{racun}")
	public Collection<StavkaRacuna> getStavkaRacunaByRacun(@PathVariable("racun") Racun racun) {
		return stavkaRacunaRepository.findByRacun(racun.getId().toString());
	}
	@PostMapping("stavkaRacuna")
	public ResponseEntity<StavkaRacuna> insertStavkaRacuna(@RequestBody StavkaRacuna stavkaRacuna){
		if(!stavkaRacunaRepository.existsById(stavkaRacuna.getId())) {
			stavkaRacunaRepository.save(stavkaRacuna);
			return new ResponseEntity<StavkaRacuna>(HttpStatus.OK);
		}
		return new ResponseEntity<StavkaRacuna>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("stavkaRacuna")
	public ResponseEntity<StavkaRacuna> updateStavkaRacuna(@RequestBody StavkaRacuna stavkaRacuna) {
		if (!stavkaRacunaRepository.existsById(stavkaRacuna.getId())) {
		return new ResponseEntity<StavkaRacuna>(HttpStatus.NO_CONTENT);
		}
		stavkaRacunaRepository.save(stavkaRacuna);
		return new ResponseEntity<StavkaRacuna>(HttpStatus.OK);
		}	

	@Transactional
	@DeleteMapping("stavkaRacuna/{id}")
	public ResponseEntity<StavkaRacuna> deleteProizvod(@PathVariable("id") Integer id){
		if (!stavkaRacunaRepository.existsById(id))
			return new ResponseEntity<StavkaRacuna>(HttpStatus.NO_CONTENT);
		// jdbcTemplate.execute("DELETE FROM proizvod WHERE proizvodjac=" + id);
		stavkaRacunaRepository.deleteById(id);
		// if (id == -100)
			// jdbcTemplate.execute("INSERT INTO \"proizvodjac\" (\"id\", \"naziv\", \"adresa\", \"kontakt\")"
				//	+ "VALUES (-100, 'Test naziv', 'Test Adresa', 'Test kontakt')");
		return new ResponseEntity<StavkaRacuna>(HttpStatus.OK);
	}
}