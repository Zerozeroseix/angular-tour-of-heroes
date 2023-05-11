import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

import { Hero } from '../hero.interface';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes!: Hero[]
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
  selectedHero!: Hero

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    // this.getHeroes()
    this.getHeroesWithImages()

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected Hero id=${hero.id}`)
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  getHeroesWithImages(): void {
    this.heroService.getHeroesWithImages().subscribe(heroes => this.heroes = heroes)
  }


}
