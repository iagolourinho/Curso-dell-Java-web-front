import { Component, OnInit } from '@angular/core';
import { Filme } from '../cadastrar-filme/filme.model';
import { FilmeService } from '../cadastrar-filme/filme.service';

@Component({
  selector: 'app-consulta-filme',
  templateUrl: './consulta-filme.component.html',
  styleUrls: ['./consulta-filme.component.css']
})
export class ConsultaFilmeComponent implements OnInit {

  constructor(private filmeService:FilmeService) {    
  }

  ngOnInit(): void {
  }

  onSubmit(form){

    const id = form.value.id;
    this.filmeService.consultaFilmes(id).subscribe(f => {
      console.log(f);
      form.value.nome = f.nome;
      form.value.genero = f.genero;
      form.value.ano = f.ano;
      form.value.autorNome = f.autor.nome;
      form.value.dataNascimento = f.autor.dataNascimento;
    })
  }

}
