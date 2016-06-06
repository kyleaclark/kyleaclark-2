import {Component, OnInit} from '@angular/core';
import { InfoList } from 'components/shared/info/list/info-list';
import ProjectsList from 'services/data-store/ProjectsList';

@Component({
  selector: 'home',
  directives: [InfoList],
  pipes: [],
  styles: [require('./home.scss')],
  template: require('./home.html')
})

export class Home implements OnInit {

  projectsList = ProjectsList;

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
