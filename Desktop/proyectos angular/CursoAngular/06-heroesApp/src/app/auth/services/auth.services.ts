import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroments';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class authService {
  private baseUrl = enviroment.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { };

  get curentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap(user => this.user = user),
      tap(user => localStorage.setItem('token', user.id.toString()))
    )
  }

  logout(): void {
    this.user = undefined;
    localStorage.clear();
  }

  checkAutentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);
    const Token = localStorage.getItem('token');

    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap(user => this.user = user),
      map(user => !!user),
      catchError(err => of(err))
    );

  }

}
