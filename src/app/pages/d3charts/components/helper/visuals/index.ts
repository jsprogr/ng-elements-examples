export * from "./link-visual/link-visual.component";
export * from "./node-visual/node-visual.component";

import { NodeVisualComponent } from "./node-visual/node-visual.component";
import { LinkVisualComponent } from "./link-visual/link-visual.component";

export const SHARED_VISUALS = [
  NodeVisualComponent, LinkVisualComponent
]
