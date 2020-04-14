import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css']
})
export class InputtextComponent implements OnInit {
  data = [];
  constructor() { }

  ngOnInit(): void {
  }

  store(newValue: string) {
    this.data.push(newValue.split(","));
    console.log(this.data)
  }

}
