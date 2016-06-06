import {Component, OnInit} from '@angular/core';
import { InfoList } from 'components/shared/info/list/info-list';
import ProjectsList from 'services/data-store/ProjectsList';

@Component({
  selector: 'projects',
  directives: [InfoList],
  pipes: [],
  styles: [require('./projects.scss')],
  template: require('./projects.html')
})

export class Projects implements OnInit {

  projectsList = ProjectsList;

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Projects');
  }

}
