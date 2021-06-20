import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-listing',
  templateUrl: './projects-listing.component.html',
  styleUrls: ['./projects-listing.component.scss']
})
export class ProjectsListingComponent implements OnInit {

  cards: any = [];

  constructor() { }

  ngOnInit(): void {
    this.cards =[
      {
        id: 1,
        image: '../../../assets/img/portfolio1.jpg',
        stack: 'WEB APP',
        name: 'STUDENT TV',
      },
      {
        id: 2,
        image: '../../../assets/img/portfolio2.jpeg',
        stack: 'WEB DESIGN',
        name: 'CREATIVE DESIGN',
      },
      {
        id: 3,
        image: '../../../assets/img/portfolio6.jpg',
        stack: 'Dashboard PANEL',
        name: 'CRAIGSLIST',
      },
      {
        id: 4,
        image: '../../../assets/img/portfolio4.jpg',
        stack: 'WEB APP',
        name: 'UNATION',
      },
      {
        id: 5,
        image: '../../../assets/img/portfolio3.jpg',
        stack: 'UI/UX',
        name: 'AUTO WASH',
      },
      {
        id: 6,
        image: '../../../assets/img/portfolio5.jpg',
        stack: 'Dashboard PANEL',
        name: 'UNATION',
      }
    ]
  }

}
