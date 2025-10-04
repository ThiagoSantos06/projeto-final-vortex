import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GameDTO } from '../../rest/game/GameDTO';
import { GameRest } from '../../rest/game/GameRest';
import { Category } from '../../rest/category/Category';
import { CategoryRest } from '../../rest/category/CategoryRest';
import { GameRequest } from '../../rest/game/GameRequest';

@Component({
  selector: 'app-jogos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './jogos.component.html',
  styleUrl: './jogos.component.css'
})
export class JogosComponent {
  mostrarModal = false;
  jogos: GameDTO[] = []
  categorias: Category[] = [];

  private gameRest: GameRest = inject(GameRest);
  private categoryRest: CategoryRest = inject(CategoryRest);

  novoJogo: GameRequest = {
    nome: '',
    descricao: '',
    imagem: '',
    categoria: '',
    origemJogo: 'Jogo escolar',
    link: {
      youtube: '',
      twitch: '',
      gameLink: '',
      other: '',
    }
  };

  ngOnInit() {
    this.carregarJogos();
    this.carregarCategorias();
  }

  carregarJogos() {
    this.gameRest.getAllGames().subscribe({
      next: (data) => {
        this.jogos = data;
      },
      error: (error) => {
        alert('Erro ao buscar jogos: ' + error.message);
      }
    });
  }

  adicionarJogo() {
    if (!this.novoJogo.nome || !this.novoJogo.descricao || !this.novoJogo.categoria || !this.novoJogo.imagem) {
        alert('Erro: Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    console.log('Objeto a ser enviado:', this.novoJogo);

    this.gameRest.saveGame(this.novoJogo).subscribe({
        next: () => {
            alert('Jogo adicionado com sucesso!');
            this.carregarJogos();
            this.fecharModal();
        },
        error: (error) => {
            console.error('Erro ao adicionar o jogo:', error);
            alert('Este jogo já existe tente outro nome.');
        }
    });
  }

  carregarCategorias() {
    this.categoryRest.getAllCategories().subscribe({
      next: (data) => {
        this.categorias = data;
      },
      error: (error) => {
        alert('Erro ao buscar categorias: ' + error.message);
      }
    });
  }

  abrirModal() {
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
  }

  onFileSelected() {
    const input = document.getElementById('imagem') as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.novoJogo.imagem = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  formatNomeParaUrl(nome: string): string {
    return nome.toLowerCase().replace(/ /g, '-');
  }
}
