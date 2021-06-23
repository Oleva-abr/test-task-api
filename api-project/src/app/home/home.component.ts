import { NewServiceService } from './../new-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public arts: NewServiceService) {}

  ngOnInit(): void {
    this.arts.fetchArts();
  }
}
