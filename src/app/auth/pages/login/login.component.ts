import { Component } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string = 'Vous êtes déconnecté. (admin/admin)';
  name: string;
  password: string;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.authService.isLoggedIn);
  }

  setMessage() {
    if (this.authService.isLoggedIn) {
      this.message = 'Vous êtes connecté.';
    } else {
      this.message = 'Identifiant ou mot de passe incorrect !';
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours...';
    this.authService.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn && this.authService.redirectUrl) {
        // On se "souvient" de la page à laquelle l'utilisateur a voulu accéder
          this.router.navigate([this.authService.redirectUrl]);
        } else {
          this.password = '';
          this.router.navigate(['/']);
        }
    });

  }

  logout() {

  }
}
