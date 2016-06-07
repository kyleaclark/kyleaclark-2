import {Component, OnInit} from '@angular/core';
import { InfoList } from 'components/common/info/list/info-list';
import ProjectBlocks from 'services/data-store/ProjectBlocks';

@Component({
  selector: 'projects',
  directives: [InfoList],
  pipes: [],
  styles: [require('./projects.scss')],
  template: require('./projects.html')
})

export class Projects implements OnInit {

  projectBlocks = ProjectBlocks;

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Projects');
  }

}
