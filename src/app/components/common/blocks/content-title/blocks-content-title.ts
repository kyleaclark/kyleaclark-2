import { Component, Input } from '@angular/core';

@Component({
  selector: 'blocks-content-title',
  directives: [],
  pipes: [],
  styles: [require('./blocks-content-title.scss')],
  template: require('./blocks-content-title.html')
})

export class BlocksContentTitle {
  @Input() contentTitle = "";
}
