import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../../services/auth.services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private authService: authService,private router:Router){};
onLogin():void {
  this.authService.login('fernando@gmail.com','23123124').subscribe(
    user =>{
      this.router.navigate(['/']);
    }
  )
}

}
