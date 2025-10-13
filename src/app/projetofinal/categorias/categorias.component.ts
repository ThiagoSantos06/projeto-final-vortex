import { Component, inject, OnInit } from '@angular/core';
import { CategoryRest } from '../../rest/category/CategoryRest';
import { Category } from '../../rest/category/Category';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorias',
  imports: [CommonModule, RouterLink],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit {
  private categoryRest: CategoryRest = inject(CategoryRest)
  public categories: Category[] = []

  ngOnInit() {
    this.categoryRest.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response
      },

      error: () => {
        alert("Falha ao buscar categorias.")
      }
    })
  }

  formatNomeParaUrl(nome: string): string {
    return nome.toLowerCase().replace(/ /g, '-');
  }
}
