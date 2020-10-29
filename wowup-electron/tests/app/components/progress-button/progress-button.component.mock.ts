import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-progress-button",
  styles: [],
  template: "",
})
export class MockProgressButtonComponent implements OnInit, OnChanges {
  @Input() value: number;
  @Input() showProgress: boolean = false;
  @Input() disable: boolean = false;
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}
  ngOnChanges() {}
  onClickButton() {}
}
