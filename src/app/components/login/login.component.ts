import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {}

  login(): void {
    const { username, password } = this.loginData;

    if (username === 'user' && password === '123') {
      alert('Connexion réussie');
      this.router.navigate(['/courses']); // Redirection vers la page des cours
    } else {
      alert('Nom d’utilisateur ou mot de passe incorrect');
    }
  }

  socialLogin(platform: string): void {
    alert(`Connexion via ${platform} en cours...`);
  }
}
