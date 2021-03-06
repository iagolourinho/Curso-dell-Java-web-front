import { Component } from "@angular/core";

@Component({
    selector: 'filme',
    template: `
                <h2> Catálogo de Filmes </h2>
                <label> Filme: {{nomeFilme}}</label>
                <br/>
                <label> Publicação: {{anoPublicacao}}</label>
              `
}
)

export class FilmeComponent {
    nomeFilme: string;
    anoPublicacao: number;

    constructor() {
        this.nomeFilme = 'Matrix';
        this.anoPublicacao = 2021;

    }

}