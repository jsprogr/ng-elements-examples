import { Component, Input } from '@angular/core';
import { Link } from "../../../../types";

@Component({
  selector: "[linkVisual]",
  template: `
    <svg:line
      class="link"
      [attr.x1]="linkProps.source.x"
      [attr.y1]="linkProps.source.y"
      [attr.x2]="linkProps.target.x"
      [attr.y2]="linkProps.target.y"
    ></svg:line>
  `,
  styleUrls: ["./link-visual.component.scss"],
})
export class LinkVisualComponent {
  @Input("linkVisual") linkProps: Link;
}
