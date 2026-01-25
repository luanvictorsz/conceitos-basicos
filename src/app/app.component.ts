import { Component } from '@angular/core';
// import { HelloWorldComponent } from "../hello-world/helloworld.component";
// import { ComponenteGeradoComponent } from "../componente-gerado/componente-gerado.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [  RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'conceitos-basicos';
}