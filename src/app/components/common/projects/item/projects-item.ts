import { Component, Input } from '@angular/core';

@Component({
  selector: 'projects-item',
  directives: [],
  pipes: [],
  styles: [require('./projects-item.scss')],
  template: require('./projects-item.html')
})

export class ProjectsItem {
  @Input() project = {};
}
