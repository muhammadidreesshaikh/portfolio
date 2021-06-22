import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  data: any = [];


  constructor() { }

  ngOnInit(): void {
    this.data =[
      {
        id: 1,
        image: '../../../assets/img/client1.png',
      },
      {
        id: 2,
        image: '../../../assets/img/client2.png',
      },
      {
        id: 3,
        image: '../../../assets/img/client3.png',
      },
      {
        id: 4,
        image: '../../../assets/img/client4.png',
      },
      {
        id: 5,
        image: '../../../assets/img/client5.png',
      },
      {
        id: 6,
        image: '../../../assets/img/client6.png',
      },
      {
        id: 7,
        image: '../../../assets/img/client7.png',
      },
      {
        id: 8,
        image: '../../../assets/img/client8.png',
      },
      {
        id: 9,
        image: '../../../assets/img/client9.png',
      },
      {
        id: 10,
        image: '../../../assets/img/client10.png',
      },
      {
        id: 11,
        image: '../../../assets/img/client11.png',
      },
      {
        id: 12,
        image: '../../../assets/img/client12.png',
      },
      {
        id: 13,
        image: '../../../assets/img/client13.png',
      },
      {
        id: 14,
        image: '../../../assets/img/client14.png',
      },
      {
        id: 15,
        image: '../../../assets/img/client15.png',
      },
      {
        id: 16,
        image: '../../../assets/img/client16.png',
      },
      {
        id: 17,
        image: '../../../assets/img/client17.png',
      },
      {
        id: 18,
        image: '../../../assets/img/client18.png',
      }
    ]
  }

}
