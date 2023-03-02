import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos.interface';
import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baserUrl: string = 'https://portafolio-html-c7d19-default-rtdb.firebaseio.com'

  constructor( private http: HttpClient ) { }

  cargarProductos(){
    return this.http.get<Productos[]>(`${this.baserUrl}/productos_idx.json`)
  }

  getProducto( id: string ){
    return this.http.get<Item>(`${this.baserUrl}/productos/${id}.json`)
  }


}
