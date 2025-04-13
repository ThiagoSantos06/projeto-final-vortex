import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRest } from '../../rest/user/UserRest';
import { FormsModule } from '@angular/forms';
import { SignUpForm } from '../../rest/user/SignUpForm';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  private userRest: UserRest = inject(UserRest)
  private router: Router = inject(Router)

  username = ""
  password = ""
  name = ""

  cadastrar() {
    const form = {username: this.username, password: this.password, name: this.name} as SignUpForm
    this.userRest.signUp(form).subscribe({
      next: () => {
        localStorage.setItem("user", this.name)
        this.router.navigate(["/escolhas-recomendacoes"])
      },

      error: () => {
        alert("Ocorreu um erro, tente mais tarde!");
      }
    })
  }
}