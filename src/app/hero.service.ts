import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, tap } from 'rxjs';

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
}
