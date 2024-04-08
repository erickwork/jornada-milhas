import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrl: './card-depoimentos.component.scss'
})
export class CardDepoimentosComponent {

  @Input() nome : String = ''
  @Input() descricao : String = ''
  @Input() altDepoimento : String = ''
  @Input() imgDepoimento : String = ''

}
