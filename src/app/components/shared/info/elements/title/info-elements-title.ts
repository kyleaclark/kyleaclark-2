import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-elements-title',
  directives: [],
  pipes: [],
  styles: [require('./info-elements-title.scss')],
  template: require('./info-elements-title.html')
})

export class InfoElementsTitle {
  @Input() content = {};
}
