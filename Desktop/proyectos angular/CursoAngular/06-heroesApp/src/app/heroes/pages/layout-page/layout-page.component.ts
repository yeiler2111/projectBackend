import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { authService } from 'src/app/auth/services/auth.services';
@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  constructor(private router: Router, private authservice: authService) { }
  redirecToLogin() {
    this.authservice.logout();
    this.router.navigate(['/']);
  }
  get user(): User | undefined {
    return this.authservice.curentUser
  }
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]
}
