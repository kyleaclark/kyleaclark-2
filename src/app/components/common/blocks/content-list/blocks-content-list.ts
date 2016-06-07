import { Component, Input } from '@angular/core';

@Component({
  selector: 'blocks-content-list',
  directives: [],
  pipes: [],
  styles: [require('./blocks-content-list.scss')],
  template: require('./blocks-content-list.html')
})

export class BlocksContentList {
  @Input() contentList = [];
}
