import { Component, OnInit } from '@angular/core';
import { ArtWorks } from '../shared/servises/new-service.service';
import { NewServiceService } from '../shared/servises/new-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Details, DetailsService } from '../shared/servises/details.servise';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  details: ArtWorks[] = [];
  det: Details[] = [];
  constructor(
    public detailsList: NewServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private detailsService: DetailsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      return this.detailsService.getById(+params.id);
    });
    this.detailsList.getDetails().subscribe((details) => {
      details = Object.entries(details);
      details = details[1];
      this.details = details[1];
    });
  }
}
