import { Directive, Input, ElementRef, OnInit} from '@angular/core'
import { Node, ForceDirectedGraph } from '../types'
import { D3Service } from '../services/d3.service'

@Directive({
  selector: "[draggableNode]",
})
export class DraggableDirective implements OnInit {
  @Input("draggableNode") draggableNodeProps: Node;
  @Input("draggableInGraph") draggableInGraphProps: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private _element: ElementRef) {}

  ngOnInit() {
    this.d3Service.applyDraggableBehaviour(
      this._element.nativeElement,
      this.draggableNodeProps,
      this.draggableInGraphProps
    );
  }
}
