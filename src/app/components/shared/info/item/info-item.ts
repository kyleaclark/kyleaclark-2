import { Component, Input } from '@angular/core';

import { InfoElementsBlurb } from "components/shared/info/elements/blurb/info-elements-blurb";
import { InfoElementsDescription } from "components/shared/info/elements/description/info-elements-description";
import { InfoElementsFootnote } from "components/shared/info/elements/footnote/info-elements-footnote";
import { InfoElementsSidebar } from "components/shared/info/elements/sidebar/info-elements-sidebar";
import { InfoElementsTitle } from "components/shared/info/elements/title/info-elements-title";

@Component({
  selector: 'info-item',
  directives: [
    InfoElementsBlurb,
    InfoElementsDescription,
    InfoElementsFootnote,
    InfoElementsSidebar,
    InfoElementsTitle
  ],
  pipes: [],
  styles: [],
  template: require('./info-item.html')
})

export class InfoItem {
  @Input() item = {};
}
