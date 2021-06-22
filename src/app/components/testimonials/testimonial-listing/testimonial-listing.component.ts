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
        image: '../../../assets/img/man2.png',
        name: 'Oliver',
        job: 'Founder. Google',
      },
      {
        id: 3,
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
        image: '../../../assets/img/man3.png',
        name: 'Adom Accy',
        job: 'Manager. Unation',
      },
      {
        id: 4,
        text: 'They cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty.',
        image: '../../../assets/img/man.jpg',
        name: 'William',
        job: 'Manager. Unation',
      },
      {
        id: 5,
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
        image: '../../../assets/img/man3.png',
        name: 'James',
        job: 'CEO. Apple',
      },
      {
        id: 6,
        text: 'Through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour.',
        image: '../../../assets/img/man.jpg',
        name: 'Lucas',
        job: 'Manager. Unation',
      },
      {
        id: 7,
        text: 'When nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
        image: '../../../assets/img/man2.png',
        name: 'Adom Accy',
        job: 'Founder. Google',
      }
    ]
  }
}
