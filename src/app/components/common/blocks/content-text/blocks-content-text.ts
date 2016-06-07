import { Component, Input } from '@angular/core';

@Component({
  selector: 'blocks-content-text',
  directives: [],
  pipes: [],
  styles: [require('./blocks-content-text.scss')],
  template: require('./blocks-content-text.html')
})

export class BlocksContentText {
  @Input() contentText = [];
}
