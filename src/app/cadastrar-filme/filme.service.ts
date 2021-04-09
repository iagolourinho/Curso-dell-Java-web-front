import { Injectable } from "@angular/core";
import { Filme } from "./filme.model";
import { HttpClient } from '@angular/common/http'



@Injectable()
export class FilmeService{

    httpClient: HttpClient;

    constructor(httpclient: HttpClient) {
        this.httpClient = httpclient;

    }

    cadastrarFilmes(filme:Filme) {
        return this.httpClient.post<Filme>(
            'http://localhost:8080/CatalagoFilmes/persistir-filme',filme);
            
    }

    consultaFilmes(id:number) {
        return this.httpClient.get<Filme>(
            `http://localhost:8080/CatalagoFilmes/consulta-filme?id=${id}`);
            
    }
}