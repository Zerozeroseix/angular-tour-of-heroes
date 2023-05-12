import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, of, tap, catchError } from 'rxjs';

import { MessageService } from './message.service';

import { Hero } from './hero.interface';
import { HEROES } from './mock-heroes';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // const heroes = of(HEROES)
    const heroes = this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('FROM tap operator: fetched heroes')),
      map(heroes => heroes.map(hero => ({ ...hero, image: this.getImage(hero.name) }))),
      catchError(this.handleError<Hero[]>('getHeroes', [])),
    )
    return heroes
  }


  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    const heroWithImage = { ...hero, image: this.getImage(hero.name) }
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(heroWithImage);
  }


  getImage(heroName: string) {
    const imageUrl: string = `${environment.heroImageServerUrl}/${heroName}`
    return imageUrl
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
