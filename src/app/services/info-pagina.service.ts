import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo } from '../interfaces/equipo.interface';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  cargada: boolean = false

  constructor( private http: HttpClient ) {  }

  geInfo(){
    return this.http.get<InfoPagina>('assets/data/data-pagina.json');
  }

  cargarEquipo(){
    return this.http.get<Equipo[]>('https://portafolio-html-c7d19-default-rtdb.firebaseio.com/equipo.json');
  }



}
