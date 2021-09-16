import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Proizvod } from 'src/app/models/proizvod';
import { Racun } from 'src/app/models/racun';
import { StavkaRacuna } from 'src/app/models/stavka-racuna';
import { StavkaRacunaService } from 'src/app/services/stavka-racuna.service';
import { RacunDialogComponent } from '../dialogs/racun-dialog/racun-dialog.component';
import { StavkaRacunaDialogComponent } from '../dialogs/stavka-racuna-dialog/stavka-racuna-dialog.component';

@Component({
  selector: 'app-stavka-racuna',
  templateUrl: './stavka-racuna.component.html',
  styleUrls: ['./stavka-racuna.component.css']
})
export class StavkaRacunaComponent implements OnInit, OnChanges, OnDestroy {

  displayedColumns = ['id', 'cena', 'jedinicaMere', 'kolicina', 'redniBroj', 'proizvod', 'racun', 'actions']
  dataSource!: MatTableDataSource<StavkaRacuna>;
  subscription!: Subscription;
  @Input() selektovanRacun!: Racun;
  constructor(private stavkaRacunaService: StavkaRacunaService,
              public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.loadData();
  }
  ngOnChanges(): void { {
      if (this.selektovanRacun.id) {
      this.loadData();

    console.log(this.selektovanRacun.id);
      }
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  public loadData() {
     this.subscription = this.stavkaRacunaService.getStavkeByRacun(this.selektovanRacun.id)
      .subscribe(data => {
       this.dataSource = new MatTableDataSource(data);
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
  }

  public openDialog(flag: number,id?: number, cena?: number, jedinicaMere?: string, kolicina?: number, redniBroj?:number, racun?: number, proizvod?: number) {
    const dialogRef = this.dialog.open(StavkaRacunaDialogComponent, {data: {id, cena, jedinicaMere, kolicina, redniBroj, racun, proizvod}});
    dialogRef.componentInstance.flag = flag;
    if (flag===1) {
      dialogRef.componentInstance.data.racun = this.selektovanRacun.id;
    }
    dialogRef.afterClosed()
      .subscribe(result => {
        if(result===1) {
          this.loadData();
        }
      })
  }
}
