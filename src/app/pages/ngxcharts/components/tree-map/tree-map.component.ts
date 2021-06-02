import { Component, OnInit } from '@angular/core';
import { productSales } from "../../data/products";

@Component({
  templateUrl: "./tree-map.component.html",
  styleUrls: ["./tree-map.component.scss"],
})
export class TreeMapComponent implements OnInit {
  productSales: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = false;
  animations: boolean = true;

  colorScheme = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"],
  };

  constructor() {
    Object.assign(this, { productSales });
  }

  onSelect(event) {
    console.log(event);
  }

  labelFormatting(c) {
    return `${c.label} Sales`;
  }

  ngOnInit(): void {}
}
