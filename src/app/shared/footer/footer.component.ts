import { InfoPagina } from './../../interfaces/info-pagina-interface';
import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  info: InfoPagina = {};

  constructor( private infoPaginaService: InfoPaginaService ) { }

  ngOnInit(): void {
    this.infoPaginaService.geInfo()
    .subscribe( resp => {
      this.info = resp;
    })
  }

}
