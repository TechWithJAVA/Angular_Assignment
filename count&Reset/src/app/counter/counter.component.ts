import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public count = 0;
  constructor() { }

  ngOnInit(): void {
  }
  increment() {
    return this.count = this.count + 1;
  }

  reset() {
    const intialVale = 0;
    return this.count = intialVale;
  }
}
