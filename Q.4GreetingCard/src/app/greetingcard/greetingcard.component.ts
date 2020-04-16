import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetingcard',
  templateUrl: './greetingcard.component.html',
  styleUrls: ['./greetingcard.component.css']
})
export class GreetingcardComponent implements OnInit {

  categories: any[] = ['iphone', 'mi', 'sony', 'samsung'];
  imageName: string;


  constructor() { }

  ngOnInit(): void {
  }
  selectChangeHandler($event) {

    let name = $event.target.value.toLowerCase();
    this.imageName = $event.target.value.toLowerCase();

  }

}
