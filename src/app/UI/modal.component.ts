import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './click-outside.directive';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  template: `
  <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none ease-linear transition-all duration-150" type="button" (click)="toggleModal()">
  Open large modal
</button>
<div *ngIf="showModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto border-2 border-red-500 outline-none focus:outline-none">
  <div class="relative w-auto max-w-6xl mx-auto my-6">
    <!--content-->
    <div class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
      <!--header-->
      <div class="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
        <h3 class="text-3xl font-semibold">
          Modal Title
        </h3>
        <button class="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none" (click)="toggleModal()">
          <span class="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
            ×
          </span>
        </button>
      </div>
      <!--body-->
      <div class="relative flex-auto p-6">
        <p class="my-4 text-lg leading-relaxed text-slate-500">
          I always
        </p>
      </div>
      <!--footer-->
      <div class="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
        <button class="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none ease-linear transition-all duration-150" type="button" (click)="toggleModal()">
          Close
        </button>
        <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none ease-linear transition-all duration-150" type="button" (click)="toggleModal()">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</div>
<div (click)="log()" *ngIf="showModal" class="fixed inset-0 bg-black opacity-25 z-100"></div>`,
})
export class ModalComponent implements OnInit {

  constructor() { }

  showModal = false;

  ngOnInit(): void {
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  log() {
    console.log("YYYYY")
  }

}
