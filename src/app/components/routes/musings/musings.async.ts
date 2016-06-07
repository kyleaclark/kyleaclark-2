import {Component, OnInit} from '@angular/core';
import { InfoList } from 'components/common/info/list/info-list';
import MusingBlocks from 'services/data-store/MusingBlocks';

@Component({
  selector: 'musings',
  directives: [InfoList],
  pipes: [],
  styles: [require('./musings.scss')],
  template: require('./musings.html')
})

export class Musings implements OnInit {

  musingBlocks = MusingBlocks;

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Musings');
  }

}
