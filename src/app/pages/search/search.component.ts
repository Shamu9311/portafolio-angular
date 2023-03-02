import { ProductosService } from './../../services/productos.service';
import { Productos } from './../../interfaces/productos.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  productoFiltrado: Productos[] = [];
  cargando: boolean = true;
  productos: Productos[] = []
  termino!: string;

  constructor(private route: ActivatedRoute, private productoService: ProductosService) {
    this.cargarProducs()
  }

  ngOnInit(): void {
    if (this.productos.length === 0) {
      this.cargarProducs().then(() => {
        this.buscarProducto();
      });
    } else {
      this.buscarProducto();
    }
  }

  cargarProducs() {
    return new Promise((resolve, reject) => {
      this.productoService.cargarProductos()
        .subscribe(resp => {
          this.productos = resp;
          resolve('');
        })
    })
  }

  buscarProducto() {

    this.route.params
      .subscribe(({ termino }) => {
        termino = termino.toLocaleLowerCase()
        this.productoFiltrado = [];
        this.productos.forEach(prod => {
          const tituloLower = prod.titulo.toLocaleLowerCase()
          if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
            this.productoFiltrado.push(prod)
            this.cargando = false
          }
        })
      })
  }

}
