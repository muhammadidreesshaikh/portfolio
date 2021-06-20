import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  data: any = [];
  cards: any = [];
  icons: any = [];
  profile: any = [];
  review: any = [];


  constructor() { }

  ngOnInit(): void {
    this.data =[
      {
        id: 1,
        icon: 'fab fa-app-store',
        name: 'APPLICATION DEVELOPMENT',
      },
      {
        id: 2,
        icon: 'fas fa-laptop-code',
        name: 'WEB DEVELOPMENT',
      },
      {
        id: 3,
        icon: 'fas fa-fingerprint',
        name: 'ERP DEVELOPMENT',
      },
      {
        id: 4,
        icon: 'fas fa-bezier-curve',
        name: 'GRAPHIC DESIGN',
      }
    ]

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

    this.icons =[
      {
        id: 1,
        icon: 'far fa-check-circle',
        number: '4500',
        name: 'PROJECT COMPLETED',
      },
      {
        id: 2,
        icon: 'fas fa-user-tie',
        number: '1,000',
        name: 'OUR STAFF',
      },
      {
        id: 3,
        icon: 'fas fa-headset',
        number: '350',
        name: 'SERVICES PROVIDE',
      },
      {
        id: 4,
        icon: 'far fa-smile',
        number: '7,650',
        name: 'HAPPY CUSTOMERS',
      },
    ]

    this.profile =[
      {
        id: 1,
        image: '../../../assets/img/awais.JPG',
        name: 'm. awais',
        text: 'Full Stack Developer',
      },
      {
        id: 2,
        image: '../../../assets/img/idrees.JPG',
        name: 'm. idrees',
        text: 'UI / UX Developer',
      },
      {
        id: 3,
        image: '../../../assets/img/ilyas.JPG',
        name: 'ilyas ahmed',
        text: 'Fronted Developer',
      },
      {
        id: 4,
        image: '../../../assets/img/anis.JPG',
        name: 'm. anees',
        text: 'Backend Developer',
      }
    ]

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
