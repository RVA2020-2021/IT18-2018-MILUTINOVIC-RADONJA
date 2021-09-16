import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Racun } from 'src/app/models/racun';
import { RacunService } from 'src/app/services/racun.service';
import { RacunDialogComponent } from '../dialogs/racun-dialog/racun-dialog.component';

@Component({
  selector: 'app-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.css']
})
export class RacunComponent implements OnInit, OnDestroy{

  displayedColumns = ['id', 'datum', 'nacinPlacanja','actions']
  dataSource!: MatTableDataSource<Racun>;
  subscription!: Subscription;
  selektovanRacun! : Racun;
  constructor(private racunService: RacunService,
              public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.loadData();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData() {
     this.subscription = this.racunService.getAllRacun()
      .subscribe(data => {
    //    console.log(data);
       this.dataSource = new MatTableDataSource(data);
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
  }

  public openDialog(flag: number,id?: number, datum?: Date, nacinPlacanja?: string) {
    const dialogRef = this.dialog.open(RacunDialogComponent, {data: {id, datum, nacinPlacanja}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed()
      .subscribe(result => {
        if(result===1) {
          this.loadData();
        }
      })
  }
  selectRow(row: any) {
    //   console.log(row);
       this.selektovanRacun = row;
       console.log(this.selektovanRacun);
       }
}
