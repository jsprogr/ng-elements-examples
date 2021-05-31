import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  templateUrl: "./lines.component.html",
  styleUrls: ["./lines.component.scss"],
})
export class LinesComponent implements AfterViewInit {
  canvas: any;
  ctx: any;
  @ViewChild("mychart", { static: false }) mychartRef: any;

  ngAfterViewInit() {
    this.canvas = this.mychartRef.nativeElement;
    this.ctx = this.canvas.getContext("2d");

    new Chart(this.ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Current Vallue",
            data: [0, 20, 40, 25, 50, 60, 30, 20, 10, 60],
            backgroundColor: "rgb(115 185 243 / 65%)",
            borderColor: "#007ee7",
            fill: true,
          },
          {
            label: "Invested Amount",
            data: [0, 20, 40, 60, 10, 5, 25, 35, 45, 50],
            backgroundColor: "#87ffe8",
            borderColor: "#80ffea",
            fill: true,
          },
        ],
        labels: [
          "January 2019",
          "February 2019",
          "March 2019",
          "April 2019",
          "May 2019",
          "June 2019",
          "July 2019",
          "August 2019",
          "September 2019",
          "October 2019",
        ],
      },
    });
  }
}
