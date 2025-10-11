import { Component } from '@angular/core';
import { CategoriasComponent } from './categorias/categorias.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { JogosComponent } from './jogos/jogos.component';
import { VortexGamesComponent } from "./vortex-games/vortex-games.component";

@Component({
  selector: 'app-projetofinal',
  standalone: true,
  imports: [
    HeaderComponent,
    VortexGamesComponent,
    CategoriasComponent,
    JogosComponent,
    FooterComponent
],
  templateUrl: './projetofinal.component.html',
  styleUrl: './projetofinal.component.css'
})
export class ProjetofinalComponent {

}
