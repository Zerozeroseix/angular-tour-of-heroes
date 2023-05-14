import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { Hero } from "../hero.interface";
import { NgClass, NgIf } from "@angular/common";

@Component({
  imports: [NgIf, NgClass],
  selector: "app-action-on-hero-message",
  standalone: true,
  template: `
    <div *ngIf="heroDeletionMessageIsVisible" class="m-3 p-3 border rounded-lg shadow-lg">

      <h2 *ngIf="isAlreadyMember===false" class="mb-4 text-md font-extralight">

        Our Hero <span class="text-base font-light">{{hero.name}}</span> was <span class="text-base font-light"
        [ngClass]="{'text-red-600': action === 'removed', 'text-green-600': action === 'added' }">{{action}}
        </span> from the team
      </h2>
      <h2 *ngIf="isAlreadyMember===true" class="mb-4 text-md font-extralight">
        <span class="text-base font-light">{{hero.name}}</span> is already a member of our team
      </h2>
      <img [src]="hero.image" [alt]="hero.name">
      <ng-content></ng-content>
    </div>
  `,
})
export class actionOnHeroMessageComponent implements OnChanges {
  @Input() isAlreadyMember!: boolean
  @Input() action!: string
  @Input() hero!: Hero
  @Input() heroDeletionMessageIsVisible!: boolean
  @Output() heroDeletionMessageIsVisibleChange = new EventEmitter<boolean>()


  timer = setTimeout(() => { }, 0)

  ngOnChanges(changes: SimpleChanges): void {
    if (this.timer) { clearTimeout(this.timer) };
    console.log(this.heroDeletionMessageIsVisible, this.isAlreadyMember);
    this.timer = setTimeout(() => { this.heroDeletionMessageIsVisibleChange.emit(false) }, 3000)

  }
}
