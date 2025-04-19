import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jogo-info',
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './jogo-info.component.html',
  styleUrl: './jogo-info.component.css'
})
export class JogoInfoComponent implements OnInit {
  linkJogos = {
    youtube: "",
    twitch: "",
    jogo: "",
    outro: ""
  }

  ngOnInit() {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}
