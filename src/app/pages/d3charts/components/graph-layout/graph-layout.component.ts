import { Component } from "@angular/core";
import D3_CONFIG from "../../config/app.config";
import { Node, Link } from "../../types";

@Component({
  templateUrl: "./graph-layout.component.html",
  styleUrls: ["./graph-layout.component.scss"],
})
export class GraphLayoutComponent {
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const N = D3_CONFIG.N;
    const getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }
  }
}
