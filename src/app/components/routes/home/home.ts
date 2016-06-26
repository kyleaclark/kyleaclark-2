import {Component, OnInit} from '@angular/core';
import { Herospace } from 'components/common/herospace/herospace';
import { About } from 'components/common/about/about';
import { Projects } from 'components/common/projects/projects';
import PersonalDetails from 'services/data-store/personal-details';
import Musings from 'services/data-store/musings';

@Component({
  selector: 'home',
  directives: [
    Herospace,
    About,
    Projects
  ],
  pipes: [],
  styles: [require('./home.scss')],
  template: require('./home.html')
})

export class Home implements OnInit {

  personalDetails = PersonalDetails;
  musings = Musings;

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
