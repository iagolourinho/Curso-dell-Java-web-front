import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmeComponent } from './filmes/filme.component';
import { AutorComponent } from './autor/autor.component';
import { CadastrarFilmeComponent } from './cadastrar-filme/cadastrar-filme.component';
import { FilmeService } from './cadastrar-filme/filme.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PrimeiroComponentComponent } from './primeiro-component/primeiro-component.component';
import { SegundoComponentComponent } from './segundo-component/segundo-component.component';
import { ConsultaFilmeComponent } from './consulta-filme/consulta-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    AutorComponent,
    CadastrarFilmeComponent,
    PrimeiroComponentComponent,
    SegundoComponentComponent,
    ConsultaFilmeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
