import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-elements-blurb',
  directives: [],
  pipes: [],
  styles: [require('./info-elements-blurb.scss')],
  template: require('./info-elements-blurb.html')
})

export class InfoElementsBlurb {
  @Input() content = {};
}
