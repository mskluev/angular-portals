import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-widget",
  template: `
    <p>
      widget works!
    </p>
    Some input: <input type="text" />
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
}
