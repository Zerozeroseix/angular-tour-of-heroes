import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, find, findIndex, first, from, map, of, tap } from 'rxjs';

import { MessageService } from './message.service';

import { Hero } from './hero.interface';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  defaultImage = "https://robohash.org"

  constructor(private http: HttpClient, private messageService: MessageService) { }




  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes');
    return heroes
  }

  getHeroesWithImages(): Observable<Hero[]> {

    this.messageService.add('HeroService: fetched heroes');

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

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  getHeroWithImage(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    const heroPlusImage = { ...hero, image: `${this.defaultImage}/${hero.name?.toLowerCase()}` }

    this.messageService.add(`HeroService: fetched hero id=${id}`);

    return of(heroPlusImage)




  }
}
