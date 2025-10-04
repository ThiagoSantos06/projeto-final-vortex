import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GameRest } from '../../rest/game/GameRest';
import { GameDTO } from '../../rest/game/GameDTO';

@Component({
  selector: 'app-jogo-info',
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule],
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
  }
}