import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-contato',
  imports: [HeaderComponent, NavbarComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

}
