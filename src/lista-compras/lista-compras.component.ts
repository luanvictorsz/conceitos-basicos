import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule ],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.css'
})
export class ListaComprasComponent {
  item: string = "";

  adicionarItem(){
    console.log('item adicionado: ' + this.item);
    this.item = '';
  }
}
