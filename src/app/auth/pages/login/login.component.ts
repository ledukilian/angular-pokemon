import { Component } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string = '(admin/admin)';
  name: string;
  password: string;
  auth: AuthService;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // J'utilise le service dans le template, je dois donc le mettre dans une propriété
    this.auth = this.authService;
    console.log(this.auth.isLoggedIn);
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = 'Vous êtes connecté.';
    } else {
      this.message = 'Identifiant ou mot de passe incorrect !';
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours...';
    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn && this.auth.redirectUrl) {
        // On se "souvient" de la page à laquelle l'utilisateur a voulu accéder
          this.router.navigate([this.auth.redirectUrl]);
        } else {
          this.password = '';
          this.router.navigate(['/']);
        }
    });

  }

  logout() {
    this.auth.logout();
    this.message = 'Vous êtes déconnecté.';
  }
}
