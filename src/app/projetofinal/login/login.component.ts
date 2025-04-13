import { Component, inject } from '@angular/core';
import { AuthRest } from '../../rest/auth/AuthRest';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authRest: AuthRest = inject(AuthRest)
  private router: Router = inject(Router)

  username = ""
  password = ""

  signIn() {
    const form = {username: this.username, password: this.password}
    this.authRest.signIn(form).subscribe({
      next: (response) => {
        localStorage.setItem("user", response.name)
        this.router.navigate(["/home"])
      },

      error: (response) => {
        alert(response.message)
      }
    })
  }
} 
