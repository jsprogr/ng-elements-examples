import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from "@angular/core";
import * as d3 from "d3";
import { MarketPrice } from "../../types/market-updates.interface";

@Component({
  selector: "d3rt-chart",
  templateUrl: "./d3rt.component.html",
  styleUrls: ["./d3rt.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class D3rtComponent implements OnChanges {
  @ViewChild("chart", { static: false })
  chartRef: ElementRef;

  parseDate = d3.timeParse("%d-%m-%Y");

  @Input("marketStatus")
  marketStatusProps: MarketPrice[];

  private svgElement: HTMLElement;
  private chartData: any;

  constructor() {}

  ngOnChanges() {
    if (this.marketStatusProps && this.chartData) {
      this.updateChart();
    } else if (this.marketStatusProps) {
      this.buildChart();
    }
  }

  formatDate() {
    this.marketStatusProps.forEach(ms => {
      if (typeof ms.date === "string") {
        ms.date = this.parseDate(ms.date);
      }
    });
  }

  buildChart() {
    this.chartData = {};
    this.formatDate();

    // Set the dimensions of the canvas / graph
    var margin = { top: 30, right: 20, bottom: 30, left: 50 },
      width = 600 - margin.left - margin.right,
      height = 270 - margin.top - margin.bottom;

    // Set the ranges
    this.chartData.x = d3.scaleTime().range([0, width]);
    this.chartData.y = d3.scaleLinear().range([height, 0]);

    // Define the axes
    var xAxis = d3.axisBottom(this.chartData.x);
    var yAxis = d3.axisLeft(this.chartData.y).ticks(5);

    let _this = this;

    // Define the line
    var valueline = d3
      .line<MarketPrice>()
      .x(function (d) {
        if (d.date instanceof Date) {
          return _this.chartData.x(d.date.getTime());
        }
      })
      .y(function (d) {
        console.log("Close market");
        return _this.chartData.y(d.close);
      });

    // Define the line
    var valueline2 = d3
      .line<MarketPrice>()
      .x(function (d) {
        if (d.date instanceof Date) {
          return _this.chartData.x(d.date.getTime());
        }
      })
      .y(function (d) {
        console.log("Open market");
        return _this.chartData.y(d.open);
      });

    var svg = d3
      .select(this.chartRef.nativeElement)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scale the range of the data
    this.chartData.x.domain(
      d3.extent(_this.marketStatusProps, function (d) {
        if (d.date instanceof Date) return (d.date as Date).getTime();
      })
    );
    this.chartData.y.domain([
      0,
      d3.max(this.marketStatusProps, function (d) {
        return Math.max(d.close, d.open);
      }),
    ]);

    // Add the valueline2 path.
    svg
      .append("path")
      .attr("class", "line line2")
      .style("stroke", "green")
      .style("fill", "none")
      .attr("d", valueline2(_this.marketStatusProps));

    // Add the valueline path.
    svg
      .append("path")
      .attr("class", "line line1")
      .style("stroke", "black")
      .style("fill", "none")
      .attr("d", valueline(_this.marketStatusProps));

    // Add the X Axis
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis);

    // Add the Y Axis
    svg.append("g").attr("class", "y axis").call(yAxis);

    // Setting the required objects in chartProps so they could be used to update the chart
    this.chartData.svg = svg;
    this.chartData.valueline = valueline;
    this.chartData.valueline2 = valueline2;
    this.chartData.xAxis = xAxis;
    this.chartData.yAxis = yAxis;
  }

  updateChart() {
    let _this = this;
    this.formatDate();

    // Scale the range of the data again
    this.chartData.x.domain(
      d3.extent(this.marketStatusProps, function (d) {
        if (d.date instanceof Date) {
          return d.date.getTime();
        }
      })
    );

    this.chartData.y.domain([
      0,
      d3.max(this.marketStatusProps, function (d) {
        return Math.max(d.close, d.open);
      }),
    ]);

    // Select the section we want to apply our changes to
    this.chartData.svg.transition();

    // Make the changes to the line chart
    this.chartData.svg
      .select(".line.line1") // update the line
      .attr("d", this.chartData.valueline(this.marketStatusProps));

    this.chartData.svg
      .select(".line.line2") // update the line
      .attr("d", this.chartData.valueline2(this.marketStatusProps));

    this.chartData.svg
      .select(".x.axis") // update x axis
      .call(this.chartData.xAxis);

    this.chartData.svg
      .select(".y.axis") // update y axis
      .call(this.chartData.yAxis);
  }
}
