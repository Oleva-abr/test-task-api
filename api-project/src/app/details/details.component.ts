import { Component, OnInit } from '@angular/core';
import { ArtWorks } from '../new-service.service';
import { NewServiceService } from './../new-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Details, DetailsService } from '../details.servise';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  details: ArtWorks[] = [];
  det: Details | undefined;
  constructor(
    public detailsList: NewServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private detailsService: DetailsService
  ) {}

  ngOnInit(): void {
    this.detailsList.getDetails().subscribe((details) => {
      details = Object.entries(details);
      details = details[1];
      this.details = details[1];
    });
    this.route.params.subscribe((params: Params) => {
      this.det = this.detailsService.getById(+params.id);
    });
  }
}
