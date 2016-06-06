import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-elements-description',
  directives: [],
  pipes: [],
  styles: [require('./info-elements-description.scss')],
  template: require('./info-elements-description.html')
})

export class InfoElementsDescription {
  @Input() content = {};
}
