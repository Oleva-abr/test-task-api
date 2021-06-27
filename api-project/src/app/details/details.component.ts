import { Component, OnInit } from '@angular/core';
import { ArtWorks } from '../shared/servises/new-service.service';
import { NewServiceService } from '../shared/servises/new-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  details: ArtWorks[] = [];
  art$: Observable<ArtWorks> | undefined;
  constructor(
    public detailsList: NewServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      return this.detailsList.getById(+params.id);
    });
    this.detailsList.getDetails().subscribe((details) => {
      details = Object.entries(details);
      details = details[1];
      this.details = details[1];
      console.log(details);
    });
  }
}
