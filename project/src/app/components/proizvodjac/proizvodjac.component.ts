import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Proizvod } from 'src/app/models/proizvod';
import { Proizvodjac } from 'src/app/models/proizvodjac';
import { ProizvodjacService } from 'src/app/services/proizvodjac.service';
import { ProizvodjacDialogComponent } from '../dialogs/proizvodjac-dialog/proizvodjac-dialog.component';

@Component({
  selector: 'app-proizvodjac',
  templateUrl: './proizvodjac.component.html',
  styleUrls: ['./proizvodjac.component.css']
})
export class ProizvodjacComponent implements OnInit, OnDestroy, OnChanges{

  displayedColumns = ['id', 'naziv', 'adresa', 'kontakt','actions']
  dataSource!: MatTableDataSource<Proizvodjac>;
  @Input() selektovanProizvod!: Proizvod;
  subscription!: Subscription;
  constructor(private proizvodjacService: ProizvodjacService,
              public dialog: MatDialog ) { }
  ngOnChanges(): void {
    if (this.selektovanProizvod.id) {
      this.loadData;
    }
  }

  ngOnInit(): void {

    this.loadData();
  }
  ngOnDestroy(): void {
 //   this.subscription.unsubscribe();
  }
  selektovaniProizvodjac!: Proizvodjac;
  public loadData() {
     this.subscription = this.proizvodjacService.getAllProizvodjac()
      .subscribe(data => {
       // console.log(data);
       this.dataSource = new MatTableDataSource(data);
      }),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
  }
  selektovanProizvodjac!: Proizvodjac;
  public openDialog(flag: number,id?: number,  kontakt?: string,adresa?: string, naziv?: string) {
    const dialogRef = this.dialog.open(ProizvodjacDialogComponent, {data: {id, naziv, adresa, kontakt}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed()
      .subscribe(result => {
        if(result===1) {
          this.loadData();
        }
      })
  }
}
