import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule, MatNavList } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatAccordion, MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { HomeComponent } from './components/core/home/home.component';
import { RacunComponent } from './components/racun/racun.component';
import { ProizvodComponent } from './components/proizvod/proizvod.component';
import { ProizvodjacComponent } from './components/proizvodjac/proizvodjac.component';
import { StavkaRacunaComponent } from './components/stavka-racuna/stavka-racuna.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProizvodDialogComponent } from './components/dialogs/proizvod-dialog/proizvod-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { ProizvodjacDialogComponent } from './components/dialogs/proizvodjac-dialog/proizvodjac-dialog.component';
import { RacunDialogComponent } from './components/dialogs/racun-dialog/racun-dialog.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { StavkaRacunaDialogComponent } from './components/dialogs/stavka-racuna-dialog/stavka-racuna-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    HomeComponent,
    RacunComponent,
    ProizvodComponent,
    ProizvodjacComponent,
    StavkaRacunaComponent,
    ProizvodDialogComponent,
    ProizvodjacDialogComponent,
    RacunDialogComponent,
    StavkaRacunaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
