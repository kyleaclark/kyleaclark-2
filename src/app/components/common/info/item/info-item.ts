import { Component, Input } from '@angular/core';

// import { BlocksSubTitle } from "components/common/info/elements/blurb/info-elements-blurb";
import { BlocksContentList } from "components/common/blocks/content-list/blocks-content-list";
import { BlocksContentText } from "components/common/blocks/content-text/blocks-content-text";
import { BlocksContentTitle } from "components/common/blocks/content-title/blocks-content-title";

@Component({
  selector: 'info-item',
  directives: [
    BlocksContentList,
    BlocksContentText,
    BlocksContentTitle
  ],
  pipes: [],
  styles: [],
  template: require('./info-item.html')
})

export class InfoItem {
  @Input() item = {};
}
