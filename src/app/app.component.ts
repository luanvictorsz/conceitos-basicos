import { Component } from '@angular/core';
import { HelloWorldComponent } from "../hello-world/helloworld.component";
import { ComponenteGeradoComponent } from "../componente-gerado/componente-gerado.component";

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, ComponenteGeradoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
