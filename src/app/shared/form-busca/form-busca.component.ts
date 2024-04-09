import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss'
})
export class FormBuscaComponent {

  adulto:number = 1;

  modal: ModalComponent = new ModalComponent();

  getSpanValue(): number {
    return this.adulto = this.modal.adultos
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent)
  }




}
