import { Component, OnInit } from '@angular/core';
import { ArtWorks } from '../shared/servises/new-service.service';
import { NewServiceService } from '../shared/servises/new-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  details: ArtWorks[] = [];
  art$!: Observable<ArtWorks>;

  constructor(
    public detailsList: NewServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.art$ = params.id;
    });
    console.log(this.art$);
    this.detailsList.getDetails().subscribe((details) => {
      details = Object.entries(details);
      details = details[1];
      this.details = details[1];
      console.log(details);
    });
  }
}
