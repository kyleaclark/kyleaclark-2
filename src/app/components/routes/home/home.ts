import {Component, OnInit} from '@angular/core';
import { Herospace } from 'components/common/herospace/herospace';
import { About } from 'components/common/about/about';
import { ProjectsList } from 'components/common/projects/list/projects-list';
import PersonalDetails from 'services/data-store/personal-details';
import Projects from 'services/data-store/projects';
import Musings from 'services/data-store/musings';

@Component({
  selector: 'home',
  directives: [
    Herospace,
    About,
    ProjectsList
  ],
  pipes: [],
  styles: [require('./home.scss')],
  template: require('./home.html')
})

export class Home implements OnInit {

  personalDetails = PersonalDetails;
  projects = Projects;
  musings = Musings;

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
