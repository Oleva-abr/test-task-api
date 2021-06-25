import { Component, OnInit } from '@angular/core';
import { NewServiceService } from './../new-service.service';
import { ArtWorks } from '../new-service.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  descriptions: ArtWorks[] = [];
  constructor(public descriptionList: NewServiceService) {}

  ngOnInit(): void {
    this.descriptionList.getDescription().subscribe((descriptions) => {
      descriptions = Object.entries(descriptions);
      descriptions = descriptions[1];
      this.descriptions = descriptions[1];
      console.log(descriptions);
    });
  }
}
