import { Component } from '@angular/core';

@Component({
  selector: 'app-escolhas-recomendacoes',
  imports: [],
  templateUrl: './escolhas-recomendacoes.component.html',
  styleUrl: './escolhas-recomendacoes.component.css'
})
export class EscolhasRecomendacoesComponent {
  name = localStorage.getItem("user")
}
