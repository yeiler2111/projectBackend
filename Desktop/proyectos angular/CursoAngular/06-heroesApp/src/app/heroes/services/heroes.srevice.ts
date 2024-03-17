import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
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
}
