import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { Hero } from "../hero.interface";
import { NgClass, NgIf } from "@angular/common";

@Component({
  imports: [NgIf, NgClass],
  selector: "app-deletion-message",
  standalone: true,
  template: `
    <div *ngIf="heroDeletionMessageIsVisible" class="m-3 p-3 border rounded-lg shadow-lg">
      <h2 class="mb-4 text-md font-extralight">Our Hero <span class="text-base font-light">{{hero.name}}</span> was <span class="text-base font-light"
      [ngClass]="{'text-red-600': action === 'removed'}">{{action}}
    </span> from the team</h2>
      <img [src]="hero.image" [alt]="hero.name">
      <ng-content></ng-content>
    </div>
  `,
})
export class DeletionMessageComponent implements OnChanges {
  @Input() hero!: Hero
  @Input() heroDeletionMessageIsVisible!: boolean
  @Output() heroDeletionMessageIsVisibleChange = new EventEmitter<boolean>()

  action = "removed"

  timer = setTimeout(() => { }, 0)

  ngOnChanges(changes: SimpleChanges): void {
    if (this.timer) { clearTimeout(this.timer) };
    console.log(this.heroDeletionMessageIsVisible);
    this.timer = setTimeout(() => { this.heroDeletionMessageIsVisibleChange.emit(false) }, 3000)

  }
}
