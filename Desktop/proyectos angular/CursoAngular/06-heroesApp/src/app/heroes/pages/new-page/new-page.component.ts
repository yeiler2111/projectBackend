import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ServiceNameService } from '../../services/heroes.srevice';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Hero, Publisher } from './../../interfaces/hero.interface';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {
  constructor(private heroeService: ServiceNameService, private ActivatedRoute: ActivatedRoute, private router: Router, private snackbar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return
    }
    this.ActivatedRoute.params.pipe(switchMap(({ id }) => this.heroeService.getHeroId(id))).subscribe(hero => {
      if (!hero) return this.router.navigateByUrl('/')
      this.heroForm.reset(hero)
      return;
    })
  }


  get CurrentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }
  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_image: new FormControl('')
  })
  public published = [
    { id: "DC Comics", desc: "DC - Comics" },
    { id: "Marvel Comics", desc: "Marvel - Comics" }
  ]

  onSubmit(): void {
    if (!this.heroForm.valid) return

    if (this.heroForm.value.id != '') {
      this.heroeService.updateHero(this.CurrentHero).subscribe(hero => {
        this.showSnackbar(`Actualizando al heroe ${hero.superhero}`)
      })
      return
    }
    debugger
    this.heroeService.addHero(this.CurrentHero).subscribe(hero => {
      //mostrat snackbar y navegar a la vista de visualizacion del heroe
      this.router.navigate(['/heroes/edit', hero.id])
      this.showSnackbar(`Creando al heroe ${hero.superhero}`)
    })


    // this.heroeService.updateHero()
  }
  onDeleteHero() {
    if (!this.CurrentHero.id) throw Error('hero id is required');
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return
      this.heroeService.deleteHero(this.CurrentHero.id).subscribe(wasDelete => {
        this.router.navigate(['/heroes']);

      });
    });


  }
  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', { duration: 2500 })
  }
}
