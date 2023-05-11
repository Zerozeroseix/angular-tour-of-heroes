import { Component } from '@angular/core';
import { Hero } from '../hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  public hero: Hero = {
    id: 1,
    name: "Windstorm"
  };

}
