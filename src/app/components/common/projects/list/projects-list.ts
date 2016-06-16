import { Component, Input } from '@angular/core';

import { ProjectsItem } from "components/common/projects/item/projects-item";

@Component({
  selector: 'projects-list',
  directives: [ProjectsItem],
  pipes: [],
  styles: [require('./projects-list.scss')],
  template: require('./projects-list.html')
})

export class ProjectsList {
  @Input() projects = {};
}
