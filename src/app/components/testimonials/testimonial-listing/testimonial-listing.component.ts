import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-listing',
  templateUrl: './testimonial-listing.component.html',
  styleUrls: ['./testimonial-listing.component.scss']
})
export class TestimonialListingComponent implements OnInit {

  review: any = [];

  constructor() { }

  ngOnInit(): void {
    this.review =[
      {
        id: 1,
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
        image: '../../../assets/img/man.jpg',
        name: 'John Semth',
        job: 'CEO. Apple',
      },
      {
        id: 2,
        text: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.',
        image: '../../../assets/img/man.jpg',
        name: 'Ancy Joy',
        job: 'Founder. Google',
      },
      {
        id: 3,
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
        image: '../../../assets/img/man.jpg',
        name: 'Adom Accy',
        job: 'Manager. Unation',
      }
    ]
  }
}
