import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GameRest } from '../../rest/game/GameRest';
import { GameDTO } from '../../rest/game/GameDTO';
import { AuthService } from '../../rest/auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name = localStorage.getItem("user");
  searchTerm = '';
  searchResults: GameDTO[] = [];
  mostrarResultados = false;

  constructor(private gameRest: GameRest, private authService: AuthService) {}

  buscarJogos() {
    const termo = this.searchTerm.trim().toLowerCase();

    if (termo.length === 0) {
      this.searchResults = [];
      this.mostrarResultados = false;
      return;
    }

    this.gameRest.getAllGames().subscribe((jogos) => {
      // 🔹 Filtra apenas jogos que começam com o termo
      this.searchResults = jogos.filter(j => j.nome.toLowerCase().startsWith(termo));
      this.mostrarResultados = true; // sempre mostra, mesmo que 0 resultados
    });
  }

  abrirResultados() {
    if (this.searchResults.length > 0 || this.searchTerm.trim() !== '') {
      this.mostrarResultados = true;
    }
  }

  fecharDropdown() {
    this.mostrarResultados = false;
    document.body.classList.remove('no-scroll');
  }

  limparPesquisa() {
    this.searchTerm = '';
    this.searchResults = [];
    this.mostrarResultados = false;
  }

  @HostListener('document:click')
  clickFora() {
    this.mostrarResultados = false;
  }

  formatNomeParaUrl(nome: string) {
    return nome.toLowerCase().replace(/\s+/g, '-');
  }

  logout() {
    this.authService.logout();
  }
}
