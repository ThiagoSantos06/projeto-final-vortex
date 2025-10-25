import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRest } from '../../rest/user/UserRest';
import { FormsModule } from '@angular/forms';
import { SignUpForm } from '../../rest/user/SignUpForm';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  private userRest: UserRest = inject(UserRest)
  private router: Router = inject(Router)

  name = ""
  username = ""
  password = ""

  tentouEnviar = false;
  erroCadastro = "";

  temLetraMaiuscula() {
    return /[A-Z]/.test(this.password);
  }

  temNumero() {
    return /[0-9]/.test(this.password);
  }

  temCaractereEspecial() {
    return /[^a-zA-Z0-9]/.test(this.password);
  }

  formValido() {
    return (
      this.name.trim().length >= 3 &&
      this.username.trim().length >= 3 &&
      this.password.length >= 8 &&
      this.temLetraMaiuscula() &&
      this.temNumero() &&
      this.temCaractereEspecial()
    );
  }

  signUp() {
    this.tentouEnviar = true;
    this.erroCadastro = "";

    if (!this.formValido()) return;

    const form = { name: this.name, username: this.username, password: this.password } as SignUpForm;

    this.userRest.signUp(form).subscribe({
      next: () => {
        localStorage.setItem("user", this.name)
        this.router.navigate(["/login"])
      },
      error: (response) => {
        this.erroCadastro = "Este usuário já existe. Tente outro.";
      }
    });
  }
}
