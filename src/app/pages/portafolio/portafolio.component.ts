import { Component, OnInit } from '@angular/core';
import { Productos } from '../../interfaces/productos.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  cargando: boolean = true;
  productos: Productos[] = []

  constructor( private productoService: ProductosService) { }

  ngOnInit(): void {
    this.productoService.cargarProductos()
      .subscribe( resp => {
        this.productos = resp;
        setTimeout(() => {
          this.cargando = false;
        }, 200)
      })
  }

}
