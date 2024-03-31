import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { ServiceNameService } from '../../services/heroes.srevice';
@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent implements OnInit {
  public hero?:Hero;
  constructor(private heroesService : ServiceNameService, private activatedRouter : ActivatedRoute, private router: Router ){
  }
  ngOnInit(): void {
    this.activatedRouter.params.pipe(
      switchMap(({id})=>this.heroesService.getHeroId(id))
    ).subscribe(hero => {
        if(!hero)return this.router.navigate(['/heroes/list'])
        this.hero = hero;

      return;
    })
  }
  goBack():void{
    this.router.navigateByUrl('/heroes/list');
  }
}
