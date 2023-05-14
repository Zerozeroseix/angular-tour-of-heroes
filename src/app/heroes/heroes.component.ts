import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

import { DeletionMessageComponent } from '../UI/deletionMessage.component';

import { Hero } from '../hero.interface';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  isVisible = false
  heroes!: Hero[]
  hero: Hero = {
    id: 1,
    name: "Windstorm",
  };
  selectedHero!: Hero
  deletedHero!: Hero

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero
  //   this.messageService.add(`HeroesComponent: Selected Hero id=${hero.id}`)
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        // this.heroes.push(hero);
        this.getHeroes() // em lugar de actualizar o ARR local, fago umha chamada ao servidor.
      });
  }

  delete(hero: Hero): void {
    this.deletedHero = hero
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe(() => {
      console.log(`Our hero ${this.deletedHero.name} was removed from our team`);
      this.isVisible = true;
    })
  }

}
