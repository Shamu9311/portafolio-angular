import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { InfoPagina } from '../../interfaces/info-pagina-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info: InfoPagina = {};

  constructor( private infoPaginaService: InfoPaginaService, private router: Router) { }

  ngOnInit(): void {
    this.infoPaginaService.geInfo()
    .subscribe( resp => {
      this.info = resp;
    })
  }

  buscarProducto( termino: string ){

    if( termino.length < 1){
      return
    }

    this.router.navigate(['/search', termino]);

  }

}
