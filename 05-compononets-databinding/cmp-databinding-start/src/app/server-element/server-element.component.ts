import {
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input("srvElement") element: { type: string; name: string; content: string };

  @Input() name: string;
  @ViewChild("heading", { static: true }) header: ElementRef;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;
  constructor() {
    console.log(
      "constructor called: " + this.paragraph.nativeElement.textContent
    );
  }
  // saves prev value
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log("ngOnChanges");
  }
  ngOnInit() {
    console.log("ngOnInit");
    console.log(this.header.nativeElement.textContent);
    console.log("Text Content of paragraph");
  }
  // check any changes => event, promise
  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }
  ngAfterViewChecked() {}
  ngAfterViewInit() {}
  ngOnDestroyFirst() {}
}
