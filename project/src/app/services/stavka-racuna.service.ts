import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RACUN_STAVKA_URL, RACUN_URL, STAVKA_RACUNA_URL } from '../app.constants';
import { Racun } from '../models/racun';
import { StavkaRacuna } from '../models/stavka-racuna';

@Injectable({
  providedIn: 'root'
})
export class StavkaRacunaService {

  constructor(private httpClient: HttpClient) { }

  public getAllStavkeRacuna(): Observable<any> {
    return this.httpClient.get(`${STAVKA_RACUNA_URL}`);
  }
  public getStavkeByRacun(id: number): Observable<any> {
    return this.httpClient.get(`${RACUN_STAVKA_URL}/${id}`);
  }
//  public getProizvodjaciByNaziv(naziv: string): Observable<any> {
//    return this.httpClient.get(`${PROIZVODJAC_NAZIV_URL}/${naziv}`);
//  }

  public addStavkaRacuna(stavkaRacuna: StavkaRacuna): Observable<any> {
    stavkaRacuna.id=0;
    return this.httpClient.post(`${STAVKA_RACUNA_URL}`, stavkaRacuna);
  }
  public updateStavkaRacuna(stavkaRacuna: StavkaRacuna): Observable<any> {
    return this.httpClient.put(`${STAVKA_RACUNA_URL}`, StavkaRacuna);
  }
  public deleteStavkaRacuna(id: number): Observable<any> {
    return this.httpClient.delete(`${STAVKA_RACUNA_URL}/${id}`);
  }

}

