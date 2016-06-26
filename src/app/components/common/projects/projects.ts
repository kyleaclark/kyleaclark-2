import { Component } from '@angular/core';
import { ProjectsList } from 'components/common/projects/list/projects-list';
import ProjectsData from 'services/data-store/projects';

@Component({
  selector: 'projects',
  directives: [ProjectsList],
  pipes: [],
  styles: [require('./projects.scss')],
  template: require('./projects.html')
})

export class Projects {
  projectsData = ProjectsData;
}
