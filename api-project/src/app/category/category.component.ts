import { Component, OnInit } from '@angular/core';
import { ArtWorks } from '../new-service.service';
import { NewServiceService } from './../new-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: ArtWorks[] = [];
  constructor(public categoryList: NewServiceService) {
    this.categoryList.getCategory().subscribe((categories) => {
      categories = Object.entries(categories);
      categories = categories[1];
      this.categories = categories[1];
      console.log(categories);
    });
  }

  ngOnInit(): void {}
}
