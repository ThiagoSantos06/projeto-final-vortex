import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthRest } from '../../rest/auth/AuthRest';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authRest: AuthRest = inject(AuthRest);
  private router: Router = inject(Router);

  username = "";
  password = "";

  tentouEnviar = false;
  erroLogin = "";

  signIn() {
    this.tentouEnviar = true;
    this.erroLogin = "";

    if (!this.username.trim() || !this.password.trim()) {
      return;
    }

    const form = { username: this.username, password: this.password };
    this.authRest.signIn(form).subscribe({
      next: (response) => {
        localStorage.setItem("user", response.name);
        this.router.navigate(["/home"]);
      },
      error: () => {
        this.erroLogin = "Não foi possível fazer login. Verifique usuário e senha.";
      }
    });
  }
}
