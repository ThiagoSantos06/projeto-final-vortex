import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jogos',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './jogos.component.html',
  styleUrl: './jogos.component.css'
})
export class JogosComponent {
  mostrarModal = false;

  novoJogo = {
    nome: '',
    descricao: '',
    imagem: '',
    categoria: '',
    origemJogo: 'Jogo comercial'
  };

  abrirModal() {
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
  }
}
