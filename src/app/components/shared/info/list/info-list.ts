import { Component, Input } from '@angular/core';

import { InfoItem } from "components/shared/info/item/info-item";

@Component({
  selector: 'info-list',
  directives: [InfoItem],
  pipes: [],
  styles: [],
  template: require('./info-list.html')
})

export class InfoList {
  @Input() list = {};
}
