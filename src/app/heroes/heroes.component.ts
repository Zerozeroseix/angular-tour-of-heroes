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
  isAlreadyMember = false
  action = "removed"
  isVisible = false
  heroes!: Hero[]
  hero: Hero = {
    id: 1,
    name: "Windstorm",
  };
  selectedHero!: Hero
  actionHero!: Hero

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero
  //   this.messageService.add(`HeroesComponent: Selected Hero id=${hero.id}`)
  // }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => { this.heroes = heroes; return heroes })
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    const found = this.heroes.findIndex(hero => hero.name === name)
    if (found >= 0) { console.log("found igual a " + found); this.isVisible; this.isAlreadyMember = true; return; }
    // { this.isAlreadyMember = true; return }

    this.heroService.addHero({ name } as Hero)
      .subscribe(() => {

        // Actualizamos a lista de heróis
        // this.heroes.push(hero);
        this.getHeroes();     // em lugar de actualizar o ARR local, fago umha chamada ao servidor.

        // 2. Invocamos o servizo para tomar os dados completos do novo Herói
        this.heroService.getHeroes().subscribe(heroes => {
          const addedHero = heroes[heroes.length - 1]
          console.log(addedHero)
          console.log(`Our hero ${addedHero.name} was added to our team`);
          this.isVisible = true;
          this.action = "added";
          this.actionHero = addedHero;
          this.isAlreadyMember = false;
        });

      });
  }

  delete(hero: Hero): void {
    const deletedHero = hero
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(deletedHero.id).subscribe(() => {
      console.log(`Our hero ${deletedHero.name} was removed from our team`);
      this.isVisible = true;
      this.action = "removed"
      this.actionHero = deletedHero;
      this.isAlreadyMember = false;
    })
  }

}
