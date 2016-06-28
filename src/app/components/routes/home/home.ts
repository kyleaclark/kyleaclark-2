import { Component } from '@angular/core';
import { Herospace } from 'components/common/herospace/herospace';
import { About } from 'components/common/about/about';
import { Projects } from 'components/common/projects/projects';
import { Contact } from 'components/common/contact/contact';

@Component({
  selector: 'home',
  directives: [
    Herospace,
    About,
    Projects,
    Contact
  ],
  pipes: [],
  styles: [require('./home.scss')],
  template: require('./home.html')
})

export class Home {}
