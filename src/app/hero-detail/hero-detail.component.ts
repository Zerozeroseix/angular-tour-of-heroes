import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

import { Hero } from '../hero.interface';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }


  ngOnInit(): void {
    this.getHeroWithImage()
  }


  getHeroWithImage(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHeroWithImage(id).subscribe(hero => { return this.hero = hero })
  }

  goBack(): void {
    this.location.back();
  }
}
