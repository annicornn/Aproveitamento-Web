import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocaisComponent } from './locais/locais.component';
import { ViagemComponent } from './viagem/viagem.component';
import { ConhecaTorontoComponent } from './conheca-toronto/conheca-toronto.component';
import { ContatoComponent } from './contato/contato.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgmCoreModule } from '@agm/core';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { GastronomiaComponent } from './gastronomia/gastronomia.component';
import { HospedagemComponent } from './hospedagem/hospedagem.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TipoPipe } from './tipo.pipe';
import { RatePipe } from './rate.pipe';
import { PrecoPipe } from './preco.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LocaisComponent,
    ViagemComponent,
    ConhecaTorontoComponent,
    ContatoComponent,
    DashboardComponent,
    SearchPipe,
    GastronomiaComponent,
    HospedagemComponent,
    TipoPipe,
    RatePipe,
    PrecoPipe
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
    }),
    FormsModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
