import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-elements-footnote',
  directives: [],
  pipes: [],
  styles: [require('./info-elements-footnote.scss')],
  template: require('./info-elements-footnote.html')
})

export class InfoElementsFootnote {
  @Input() content = {};
}
