import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { switchMap, tap, map } from 'rxjs/operators';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item!: Item;
  id!: string;

  constructor( private route: ActivatedRoute, private productosService: ProductosService ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        tap(({id}) =>  this.id = id),
        switchMap(( {id} ) => this.productosService.getProducto(id)),
      )
      .subscribe( item => {
        this.item = item;
      } )
  }

}
