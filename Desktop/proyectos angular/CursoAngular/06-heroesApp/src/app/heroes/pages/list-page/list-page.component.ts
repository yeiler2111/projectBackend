import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { ServiceNameService } from '../../services/heroes.srevice';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  public heroes:Hero[]= [];
  constructor(private heroService: ServiceNameService){

  }
  ngOnInit(): void {
    this.heroService.getHero().subscribe( heroes =>{
      this.heroes = heroes;
    })
  }
}
