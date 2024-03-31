import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { enviroment } from '../../../enviroments/enviroments';
import { Hero } from './../interfaces/hero.interface';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  private enviromentUrl = enviroment.baseUrl
  constructor(private httpClient: HttpClient) { }

  getHero(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.enviromentUrl + "/heroes")
  }
  getHeroId(id: string): Observable<Hero | undefined> {
    return this.httpClient.get<Hero>(`${this.enviromentUrl}/heroes/${id}`).pipe(
      catchError(error => of(undefined)) //retornando un observable que retorna undefined
    )
  }
  getSuggestions(query: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.enviromentUrl}/heroes?superhero=${query}`);
  }

  addHero(hero: Hero): Observable<Hero> {
    //se le debe pasar el objeto que se quiere añadir
    return this.httpClient.post<Hero>(`${this.enviromentUrl}/heroes`, hero)
  }
  updateHero(hero: Hero): Observable<Hero> {
    //para actualizar parcialmente el objeto
    if (!hero.id) throw Error('hero id is required')
    return this.httpClient.patch<Hero>(`${this.enviromentUrl}/heroes/${hero.id}`, hero)
  }

  deleteHero(idHero: string): Observable<boolean> {
    //eliminar
    return this.httpClient.delete(`${this.enviromentUrl}/heroes/${idHero}`).
    pipe(
      map(res => true),
      catchError(error => of(false))

    )
  }
}
