import { Component } from "@angular/core";

@Component({
    selector: 'autor',
    template: `
                <h2> Catalago de Filme Autor</h2>
                <label> Nome: {{nomeAutor}} </label>
                <br/>
                <label> Data Nascimento: {{dataNascimeto}} </label>
              `

})

export class AutorComponent {
    nomeAutor: string;
    dataNascimeto: string;

    constructor() {
        this.nomeAutor = 'Iago Lourinho';
        this.dataNascimeto = '10/09/1993';
    }
}