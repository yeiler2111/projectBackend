import { Component, OnInit } from '@angular/core';
import { authService } from './auth/services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'heroesApp';
  constructor(private authService:authService){}
  ngOnInit(): void {

  }
}
