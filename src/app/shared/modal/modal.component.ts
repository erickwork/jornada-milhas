import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {


  adultos : number = 1;
  criancas: number = 0;
  bebe: number = 0;

  incremento() : void {
    this.adultos = this.adultos + 1;
  }

  decremento() : void {
    if (this.adultos > 1) {
      this.adultos = this.adultos - 1;
    }
  }

  incrementoCrianca() : void {
    this.criancas = this.criancas + 1;
  }

  decrementoCrianca() : void {
    if (this.criancas > 0) {
      this.criancas = this.criancas - 1;
    }
  }

  incrementoBebe() : void {
    this.bebe = this.bebe + 1;
  }

  decrementoBebe() : void {
    if (this.bebe > 0) {
      this.bebe = this.bebe - 1;
    }
  }

}
