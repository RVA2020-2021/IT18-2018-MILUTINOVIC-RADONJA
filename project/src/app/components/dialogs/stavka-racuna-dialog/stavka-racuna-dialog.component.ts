import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Proizvod } from 'src/app/models/proizvod';
import { Racun } from 'src/app/models/racun';
import { StavkaRacuna } from 'src/app/models/stavka-racuna';
import { ProizvodService } from 'src/app/services/proizvod.service';
import { RacunService } from 'src/app/services/racun.service';
import { StavkaRacunaService } from 'src/app/services/stavka-racuna.service';
import { RacunDialogComponent } from '../racun-dialog/racun-dialog.component';

@Component({
  selector: 'app-stavka-racuna-dialog',
  templateUrl: './stavka-racuna-dialog.component.html',
  styleUrls: ['./stavka-racuna-dialog.component.css']
})
export class StavkaRacunaDialogComponent implements OnInit {

  public flag!: number;
  proizvodi!: Proizvod[];
  racuni!: Racun[];

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<RacunDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: StavkaRacuna,
              public racunService: RacunService,
              public stavkaRacunaService: StavkaRacunaService,
              public proizvodService: ProizvodService){};

              ngOnInit(): void {
                this.proizvodService.getAllProizvod()
                  .subscribe(proizvodi => {
                    this.proizvodi = proizvodi;
                  })
                  this.racunService.getAllRacun()
                    .subscribe(racuni => {
                      this.racuni = racuni;
                    })
              }

              compareTo(a: { id: any; },b: { id: any; }) {
                return a.id == b.id;
              }

  public addStavkaRacuna(): void {
    this.stavkaRacunaService.addStavkaRacuna(this.data)
    .subscribe(() => {
      this.snackBar.open('Uspešno dodata stavka racuna: ', 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom dodavanja nove stavke racuna.' , 'Zatvori', {
        duration: 2500
      })
    }
  }

  public updateStavkaRacuna(): void {
    this.stavkaRacunaService.updateStavkaRacuna(this.data).subscribe(() => {
      this.snackBar.open('Uspešno modifikovana stavka racuna: ' , 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom modifikacije postejece stavke racuna.' , 'Zatvori', {
        duration: 2500
      })
    }
  }
  public deleteStavkaRacuna(): void {
    this.stavkaRacunaService.deleteStavkaRacuna(this.data.id).subscribe(() => {
      this.snackBar.open('Uspešno obrisana stavka racuna: ' , 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Doslo je do greske prilikom brisanja stavke racuna.' , 'Zatvori', {
        duration: 2500
      })
    }


    } public cancel(): void {
        this.dialogRef.close();
        this.snackBar.open('Odustali ste od izmena!', 'U redu', {
          duration:1000
        });
  }



  }
