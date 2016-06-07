import { Component, Input } from '@angular/core';

@Component({
  selector: 'blocks-content-list-links',
  directives: [],
  pipes: [],
  styles: [require('./blocks-content-list-links.scss')],
  template: require('./blocks-content-list-links.html')
})

export class BlocksContentListLinks {
  @Input() references = [];
}
