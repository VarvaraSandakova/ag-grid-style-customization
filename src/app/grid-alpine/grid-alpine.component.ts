import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'grid-alpine',
  template: ` <ng-content></ng-content>`,
  styleUrls: ['./grid-alpine.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class GridAlpineComponent {}
