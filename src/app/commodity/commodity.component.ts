import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {
    items = [];
    orderQuantity:number = 0;
  constructor() { }

  ngOnInit() {
    this.items = [
      { "name": "Enizio",
        "price": "600",
        "description": "Good good product.",
        "image": "C:\Users\eniola\Pictures\Laravel.png", 
        "quantity": "4"
       },
       { "name": "Cheese balls",
        "price": "600",
        "description": "Good good product.",
        "image": "C:\Users\eniola\Pictures\Laravel.png", 
        "quantity": "4"
       },
       { "name": "Enizio",
        "price": "600",
        "description": "Good good product.",
        "image": "C:\Users\eniola\Pictures\Laravel.png", 
        "quantity": "4"
       },
       { "name": "Enizio",
        "price": "600",
        "description": "Good good product.",
        "image": "C:\Users\eniola\Pictures\Laravel.png", 
        "quantity": "4"
       }
    ]
  }

  onSubmit(newItem) {
    this.items.push(newItem);
  }

  onAddCart() {
    this.orderQuantity+=1;
  }
}
