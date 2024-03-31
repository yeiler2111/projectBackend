import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  private isAuthenticated(): boolean {
    // Implementar la lógica de autenticación
    return true;
  }

}
