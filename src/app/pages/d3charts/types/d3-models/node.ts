import D3CONFIG from "../../config/app.config";

export class Node implements d3.SimulationNodeDatum {
  index?: number
  x?: number
  y?: number
  vx?: number
  vy?: number
  fx?: number | null
  fy?: number | null

  id: string

  linkCount: number = 0

  get r() {
    return 50 * this.normal() + 10
  }

  get fontSize() {
    return (30 * this.normal() + 10) + 'px'
  }

  get color() {
    let index = Math.floor(D3CONFIG.SPECTRUM.length * this.normal())
    return D3CONFIG.SPECTRUM[index]
  }
  constructor(id) {
    this.id = id
  }

  normal = () => {
    return Math.sqrt(this.linkCount / D3CONFIG.N)
  }


}
