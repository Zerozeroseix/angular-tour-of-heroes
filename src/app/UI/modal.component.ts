import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './click-outside.directive';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  template: `
  <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" (click)="toggleModal()">
  Open large modal
</button>
<div *ngIf="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex border-2 border-red-500">
  <div class="relative w-auto my-6 mx-auto max-w-6xl">
    <!--content-->
    <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
      <!--header-->
      <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
        <h3 class="text-3xl font-semibold">
          Modal Title
        </h3>
        <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" (click)="toggleModal()">
          <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
            ×
          </span>
        </button>
      </div>
      <!--body-->
      <div class="relative p-6 flex-auto">
        <p class="my-4 text-slate-500 text-lg leading-relaxed">
          I always
        </p>
      </div>
      <!--footer-->
      <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" (click)="toggleModal()">
          Close
        </button>
        <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" (click)="toggleModal()">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</div>
<div (click)="log()" *ngIf="showModal" class="opacity-25 fixed inset-0 z-100 bg-black"></div>`,
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
