import { Component, inject } from '@angular/core';
import { GameDTO } from '../../rest/game/GameDTO';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GameRest } from '../../rest/game/GameRest';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-categoria-filtro',
  imports: [CommonModule, HeaderComponent, NavbarComponent, RouterLink],
  templateUrl: './categoria-filtro.component.html',
  styleUrl: './categoria-filtro.component.css'
})
export class CategoriaFiltroComponent {
  jogos: GameDTO[] = [];
  categoriaNome!: string | null;
  carregando: boolean = true;

  private route = inject(ActivatedRoute);
  private gameRest = inject(GameRest);

  ngOnInit(): void {
    this.categoriaNome = this.route.snapshot.paramMap.get('nome');
    if (this.categoriaNome) {
      this.carregarJogosPorCategoria(this.categoriaNome);
    }
  }

  carregarJogosPorCategoria(nome: string) {
    this.carregando = true;
    
    this.gameRest.getGamesByCategory(nome).subscribe({
      next: (data) => {
        this.jogos = data;
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro:', err);
        this.carregando = false;
      }
    });
  }

  getNomeFormatado(): string {
    if (!this.categoriaNome) return '';
    return this.categoriaNome.replace(/-/g, ' ')
                            .replace(/\b\w/g, l => l.toUpperCase());
  }

  formatNomeParaUrl(nome: string): string {
    return nome.toLowerCase().replace(/ /g, '-');
  }
}
