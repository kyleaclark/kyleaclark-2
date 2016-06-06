import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-elements-sidebar',
  directives: [],
  pipes: [],
  styles: [require('./info-elements-sidebar.scss')],
  template: require('./info-elements-sidebar.html')
})

export class InfoElementsSidebar {
  @Input() content = {};
}
