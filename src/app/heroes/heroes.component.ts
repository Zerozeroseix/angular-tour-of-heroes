import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { HeroService } from '../hero.service';

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

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    // this.getHeroes()
    this.getHeroesWithImages()

  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  getHeroesWithImages(): void {
    this.heroService.getHeroesWithImages().subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

}
