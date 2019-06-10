import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-widget",
  template: `
    <p>
      widget works!
    </p>
    Some input: <input type="text" />
    <button (click)="onClick()">Click Me</button>
  `,
  styles: []
})
export class WidgetComponent implements OnInit {
  constructor() {
    console.log("WidgetComponent constructor");
  }

  ngOnInit() {
    console.log("WidgetComponent ngOnInit");
  }

  onClick() {
    console.log("WidgetComponent onClick");
  }
}
