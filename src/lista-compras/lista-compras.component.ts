import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemLista';
import { NgClass } from '@angular/common'; 

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, NgClass],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.css'
})

export class ListaComprasComponent {
  item: string = "";
  lista: ItemLista[] = [];

  adicionarItem(){
    let addItem = new ItemLista();
    addItem.nome = this.item;
    addItem.id = this.lista.length + 1;

    this.lista.push(addItem)
    this.item = '';

    console.table(this.lista);
  }

  riscarItem(itemLista: ItemLista){
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista(){
    this.lista = []
  }
}
