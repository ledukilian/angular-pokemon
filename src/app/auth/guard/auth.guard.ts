import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import {AuthService} from "../service/auth.service";

export const AuthGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  console.info('AuthGuard#canActivate called');
  if(authService.isLogged()){
    return true;
  }

  // L'utilisateur n'est pas authentifié, on le redirige vers la page de connexion
  router.navigate(['/connexion']);
  return false;
};

