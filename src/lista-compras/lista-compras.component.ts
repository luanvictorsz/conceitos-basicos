import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { itemLista } from './itemLista';

@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule ],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.css'
})

export class ListaComprasComponent {
  item: string = "";
  lista: itemLista[] = [];

  adicionarItem(){
    let addItem = new itemLista();
    addItem.nome = this.item;
    addItem.id = this.lista.length + 1;

    this.lista.push(addItem)
    this.item = '';

    console.table(this.lista);
  }
}
