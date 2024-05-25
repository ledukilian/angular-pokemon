import { Injectable } from '@angular/core';
import {delay, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor() { }

  isLogged(): boolean {
    return this.isLoggedIn;
  }

  login(name: string, password: string): Observable<boolean>{
    const isLoggedIn = name === 'admin' && password === 'admin';
    this.isLoggedIn = true;
    // On simule un délai de 1 seconde pour la réponse
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logout(){
    this.isLoggedIn = false;
  }
}
