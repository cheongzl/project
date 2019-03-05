import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Shoe } from './shoe';
import { ShoeService } from './shoe.service';

@Component({
  templateUrl: './shoe-detail.component.html'
})
export class ShoeDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  shoe: Shoe | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private shoeService: ShoeService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getShoe(id);
    }
  }

  getShoe(id: number) {
    this.shoeService.getShoe(id).subscribe(
      shoe => this.shoe = shoe,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/shoes']);
  }

}
