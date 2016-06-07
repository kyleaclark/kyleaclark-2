import {Component, OnInit} from '@angular/core';
import { InfoList } from 'components/common/info/list/info-list';
import PersonalBlocks from 'services/data-store/PersonalBlocks';

@Component({
  selector: 'home',
  directives: [InfoList],
  pipes: [],
  styles: [require('./home.scss')],
  template: require('./home.html')
})

export class Home implements OnInit {

  personalBlocks = PersonalBlocks;

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
