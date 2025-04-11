import { Component } from '@angular/core';
import { CategoriasComponent } from './categorias/categorias.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { JogosComponent } from './jogos/jogos.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RecomendacoesComponent } from './recomendacoes/recomendacoes.component';

@Component({
  selector: 'app-projetofinal',
  standalone: true,
  imports: [
    JogosComponent,
    HeaderComponent,
    FooterComponent,
    CategoriasComponent,
    CarouselComponent,
    RecomendacoesComponent
  ],
  templateUrl: './projetofinal.component.html',
  styleUrl: './projetofinal.component.css'
})
export class ProjetofinalComponent {

}
