import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  OnInit
} from "@angular/core";
import { WidgetComponent } from "./widget/widget.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("containerA", { read: ViewContainerRef, static: true })
  containerA: ViewContainerRef;
  @ViewChild("containerB", { read: ViewContainerRef, static: true })
  containerB: ViewContainerRef;
  @ViewChild("containerC", { read: ViewContainerRef, static: true })
  containerC: ViewContainerRef;

  myWidgetFactory;
  myWidget: ComponentRef<WidgetComponent>;
  currentContainer: ViewContainerRef;

  constructor(private componentFactorResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.myWidgetFactory = this.componentFactorResolver.resolveComponentFactory(
      WidgetComponent
    );
  }

  addWidgetTo(container: string) {
    switch (container) {
      case "A":
        this.addTo(this.containerA);
        break;
      case "B":
        this.addTo(this.containerB);
        break;
      case "C":
        this.addTo(this.containerC);
        break;
    }
  }

  private addTo(container: ViewContainerRef) {
    if (this.currentContainer === container) {
      return;
    }
    if (!this.myWidget) {
      this.myWidget = container.createComponent(this.myWidgetFactory);
    } else {
      const index = this.currentContainer.indexOf(this.myWidget.hostView);
      this.currentContainer.detach(index);
      container.insert(this.myWidget.hostView);
    }

    this.currentContainer = container;
    this.myWidget.changeDetectorRef.detectChanges();
  }
}
