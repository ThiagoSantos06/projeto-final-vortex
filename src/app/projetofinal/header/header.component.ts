import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name = localStorage.getItem("user")
  searchText: string = '';
  filteredGames: any[] = [];
  showSuggestions: boolean = false; 

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @ViewChild('suggestionsList') suggestionsList!: ElementRef<HTMLDivElement>;

  allGames = [
    { name: 'THE FINALS', image: 'assets/the-finals.png' },
    { name: 'THE Origen', image: 'assets/the-finals.png' },
    { name: 'THE Muscle', image: 'assets/the-finals.png' },
    { name: 'THE OOF', image: 'assets/the-finals.png' },
    { name: 'THE MEGA', image: 'assets/the-finals.png' },
    { name: 'Marvel Rivals', image: 'assets/marvel-rivals.png' },
    { name: 'Minecraft', image: 'assets/marvel-rivals.png' },
    { name: 'Valorant', image: 'assets/valorant.png' },
    { name: 'Pubg Battlegrounds', image: 'assets/pubg.png' },
    { name: 'Red Dead Redemption 2', image: 'assets/reddeadredemption2.png' },
    { name: 'CS:GO', image: 'assets/csgo.png' },
  ];

  filtrarJogos() {
    const texto = this.searchText.toLowerCase();
    
    if (this.searchText.length > 0) {
      this.filteredGames = this.allGames.filter(game =>
        game.name.toLowerCase().startsWith(texto)
      );
      this.showSuggestions = true;
    } else {
      this.filteredGames = [];
      this.showSuggestions = false;
    }
  }


  @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent) {
      if (
        this.searchInput && !this.searchInput.nativeElement.contains(event.target as Node) &&
        this.suggestionsList && !this.suggestionsList.nativeElement.contains(event.target as Node)
      ) {
        this.showSuggestions = false;
      }
  }

  @HostListener('focusin', ['$event'])
  onFocusIn(event: FocusEvent) {
    if (event.target === this.searchInput.nativeElement) {
      this.showSuggestions = true;
    }
  }
}
