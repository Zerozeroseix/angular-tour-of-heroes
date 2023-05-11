import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, tap } from 'rxjs';

import { Hero } from './hero.interface';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  defaultImage = "https://robohash.org"

  constructor(private http: HttpClient) { }


  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    return heroes
  }

  getHeroesWithImages(): Observable<Hero[]> {

    return this.http.get<Hero[]>('assets/mock-heroes.json').pipe(
      tap(heroes => console.log(heroes)),
      map(heroes => heroes.map(hero => {
        return {
          ...hero,
          image: `${this.defaultImage}/${hero.name?.toLowerCase()}`
        }
      }))
    )
  }
}
