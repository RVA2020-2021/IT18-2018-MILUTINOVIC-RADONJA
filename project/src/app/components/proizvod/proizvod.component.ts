import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Proizvod } from 'src/app/models/proizvod';
import { ProizvodService } from 'src/app/services/proizvod.service';
import { ProizvodDialogComponent } from '../dialogs/proizvod-dialog/proizvod-dialog.component';

@Component({
  selector: 'app-proizvod',
  templateUrl: './proizvod.component.html',
  styleUrls: ['./proizvod.component.css']
})
export class ProizvodComponent implements OnInit, OnDestroy{

  displayedColumns = ['id', 'naziv', 'proizvodjac', 'actions']
  dataSource!: MatTableDataSource<Proizvod>;
  selektovanProizvod? : Proizvod;
  subscription!: Subscription;
  constructor(private proizvodService: ProizvodService,
              public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.loadData();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData() {
     this.subscription = this.proizvodService.getAllProizvod()
      .subscribe(data => {
       // console.log(data);
       this.dataSource = new MatTableDataSource(data);
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
  }
  @Input() selektovaniProizvod!: Proizvod;

  public openDialog(flag: number, id?: number, naziv?: string, proizvodjac?: string) {
    const dialogRef = this.dialog.open(ProizvodDialogComponent, {data: {id, naziv, proizvodjac}});
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
    this.selektovanProizvod = row;
    console.log(this.selektovanProizvod);
    }
}

