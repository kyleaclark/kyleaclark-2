import {Component, OnInit} from '@angular/core';
import { InfoList } from 'components/shared/info/list/info-list';
import MusingsList from 'services/data-store/MusingsList';

@Component({
  selector: 'musings',
  directives: [InfoList],
  pipes: [],
  styles: [require('./musings.scss')],
  template: require('./musings.html')
})

export class Musings implements OnInit {

  musingsList = MusingsList;

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Musings');
  }

}
