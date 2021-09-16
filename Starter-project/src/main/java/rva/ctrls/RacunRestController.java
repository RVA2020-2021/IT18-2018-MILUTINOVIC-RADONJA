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
import rva.jpa.Racun;
import rva.repository.RacunRepository;

@CrossOrigin
@RestController@Api(tags = {"Racun CRUD operacije"})
public class RacunRestController {

	@Autowired
	private RacunRepository racunRepository;
	
	@Autowired 
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("racun")
	public Collection<Racun> getracuni(){
		return racunRepository.findAll();
	};
	
	@GetMapping("racun/{id}")
	public Racun getracun(@PathVariable ("id") Integer id) {
		return racunRepository.getOne(id);
	}
	
	@GetMapping("racunNacinPlacanja/{NacinPlacanja}")
	public Collection<Racun> getracunByNacinplacanja(@PathVariable("NacinPlacanja") String NacinPlacanja) {
		return racunRepository.findByNacinPlacanjaContainingIgnoreCase(NacinPlacanja);
	}
	@PostMapping("racun")
	public ResponseEntity<Racun> insertracun(@RequestBody Racun racun){
		if(!racunRepository.existsById(racun.getId())) {
			racunRepository.save(racun);
			return new ResponseEntity<Racun>(HttpStatus.OK);
		}
		return new ResponseEntity<Racun>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("racun")
	public ResponseEntity<Racun> updateracun(@RequestBody Racun racun) {
		if (!racunRepository.existsById(racun.getId())) {
		return new ResponseEntity<Racun>(HttpStatus.NO_CONTENT);
		}
		racunRepository.save(racun);
		return new ResponseEntity<Racun>(HttpStatus.OK);
		}	
	
	@Transactional
	@DeleteMapping("racun/{id}")
	public ResponseEntity<Racun> deleteracun(@PathVariable("id") Integer id){
		if (!racunRepository.existsById(id))
			return new ResponseEntity<Racun>(HttpStatus.NO_CONTENT);
		
		jdbcTemplate.execute("DELETE FROM stavka_racuna WHERE racun=" + id);
		racunRepository.deleteById(id);
		if (id == -100)
			jdbcTemplate.execute("INSERT INTO \"proizvod\" (\"id\", \"datum\", \"nacin_placanja\")"
					+ "VALUES (-100, to_date('01.01.1999', 'dd.mm.yyyy'), 'Test nacin placanja')");
		return new ResponseEntity<Racun>(HttpStatus.OK);
	}
}
	
