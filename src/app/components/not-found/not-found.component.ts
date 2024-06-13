import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}

export class NumberService {
  number: number = 1;
  isActive!: boolean;

  increment() {
    this.number++;
  }

  decrement() {
    if (this.number >= 2) {
      this.number--;
    }
  }

  getNumber(): number {
    return this.number;
  }

  changeIsActive(active: boolean) {
    this.isActive = active;
  }
}

