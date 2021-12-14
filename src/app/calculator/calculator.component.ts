import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  a: any = 0;
  b: any = 0;
  c: any = 0;

  constructor() { }

  ngOnInit(): void {
  }
  Add(a: any, b: any) {

    a = parseInt(a);
    b = parseInt(b);
    this.c = a + b;
  }
  Sub(a: any, b: any) {
    a = parseInt(a);
    b = parseInt(b);
    this.c = a - b;
  }
  Mul(a: any, b: any) {
    a = parseInt(a);
    b = parseInt(b);
    this.c = a * b;
  }
  Div(a: any, b: any) {
    a = parseInt(a);
    b = parseInt(b);
    if (b === 0) {
      this.c = "Number Second Diffirent 0"
    } else {
      this.c = a / b;
    }
  }
}
