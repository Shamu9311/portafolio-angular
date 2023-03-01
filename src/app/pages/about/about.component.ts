import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Equipo } from '../../interfaces/equipo.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo: Equipo[] = []

  constructor( private infoPag: InfoPaginaService) { }

  ngOnInit(): void {
    this.infoPag.cargarEquipo()
      .subscribe( resp => {
        this.equipo = resp;
      })
  }

}
