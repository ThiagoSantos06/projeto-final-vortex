import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GameRest } from '../../rest/game/GameRest';
import { GameDTO } from '../../rest/game/GameDTO';
import { HeaderComponent } from "../header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-jogo-info',
  imports: [FormsModule, CommonModule, HeaderComponent, NavbarComponent],
  templateUrl: './jogo-info.component.html',
  styleUrls: ['./jogo-info.component.css']
})
export class JogoInfoComponent implements OnInit {
  jogo?: GameDTO;

  constructor(private route: ActivatedRoute, private gameRest: GameRest) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const nome = this.route.snapshot.paramMap.get('nome');
    if (id) {
      this.gameRest.getGameById(id).subscribe({
        next: (data) => {
          this.jogo = data;
        },
        error: (err) => {
          console.error('Erro ao buscar o jogo:', err);
        }
      });
    }

    window.scrollTo(0, 0);
  }

  abrirLink(url?: string) {
      if (url) {
        window.open(url, '_blank');
    }
  }

  temLink(): boolean {
    return !!(
      this.jogo?.link?.youtube ||
      this.jogo?.link?.twitch ||
      this.jogo?.link?.gameLink ||
      this.jogo?.link?.other
    );
  }
}