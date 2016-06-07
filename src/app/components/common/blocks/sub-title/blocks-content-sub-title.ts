import { Component, Input } from '@angular/core';

@Component({
  selector: 'blocks-content-sub-title',
  directives: [],
  pipes: [],
  styles: [require('./blocks-content-sub-title.scss')],
  template: require('./blocks-content-sub-title.html')
})

export class BlocksContentSubTitle {
  @Input() contentSubTitle = "";
}
