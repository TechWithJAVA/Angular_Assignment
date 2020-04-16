import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diplayproduct',
  templateUrl: './diplayproduct.component.html',
  styleUrls: ['./diplayproduct.component.css']
})
export class DiplayproductComponent implements OnInit {

  productName: string = "";
  discription: string = "";
  companyName: string = "";
  productPath: String="";

  products: any[] = [
    { name: 'Iphone', discription: 'Iphone :  10000', company: 'Iphone Pvt. Ltd.',path: 'assets/images/Iphone.png' },
    { name: 'MI', discription: 'MI :  43000', company: 'MI Pvt. Ltd.',path:'assets/images/MI.png'},
    { name: 'SONY', discription: 'SONY : 10000', company: 'Sony pvt. Ltd.',path:'assets/images/Sony.png' },
    { name: 'Samsung', discription: 'Samsung :9000', company: 'Samsung Pvt. Ltd.',path:'assets/images/Samsung.png' },
  ]
  constructor() {
    this.productName = this.products[0].name;
    this.discription = this.products[0].discription;
    this.companyName = this.products[0].company;
    this.productPath=this.products[0].path; 
  }

  ngOnInit(): void {
  }
  onClick(name) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name == name) {
        this.productName = this.products[i].name;
        this.discription = this.products[i].discription;
        this.companyName = this.products[i].company;
        this.productPath=this.products[i].path;
      }
    }

  }
}
