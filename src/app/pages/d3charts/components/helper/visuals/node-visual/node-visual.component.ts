import { Component, Input } from "@angular/core";
import { Node } from "../../../../types";

@Component({
  selector: "[nodeVisual]",
  template: `
    <svg:g [attr.transform]="'translate(' + nodeProps.x + ',' + nodeProps.y + ')'">
      <svg:circle
        class="node"
        [attr.fill]="nodeProps.color"
        cx="0"
        cy="0"
        [attr.r]="nodeProps.r"
      ></svg:circle>
      <svg:text class="node-name" [attr.font-size]="nodeProps.fontSize">
        {{ nodeProps.id }}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ["./node-visual.component.scss"],
})
export class NodeVisualComponent {
  @Input("nodeVisual") nodeProps: Node;
}
