import { Component, OnInit } from "@angular/core";
import { Shoe } from "../products/shoe";
import {ShoeService} from "./shoe.service";
@Component({
  selector: "shoe-list",
  templateUrl: "shoe-list.component.html"
})
export class ShoeListComponent implements OnInit{
  
  public shoes: Shoe[] = [
 
  ];

  ngOnInit(): void {
    this.shoeService.getShoes().subscribe(
      products => {
        this.shoes = products;
      },
    );
  }
  
  constructor(private shoeService: ShoeService) {

  }

}
