import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-listing',
  templateUrl: './service-listing.component.html',
  styleUrls: ['./service-listing.component.scss']
})
export class ServiceListingComponent implements OnInit {

  data: any = [];

  constructor() { }

  ngOnInit(): void {
    this.data =[
      {
        id: 1,
        name: 'Application Development',
        text: 'We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
        image: '../../../assets/img/service4.jpg',
      },
      {
        id: 2,
        name: 'Graphic Design',
        text: 'We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
        image: '../../../assets/img/service3.jpg',
      },
      {
        id: 3,
        name: 'WEB Development',
        text: 'We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
        image: '../../../assets/img/service2.jpg',
      },
      {
        id: 4,
        name: 'ERP Development',
        text: 'We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
        image: '../../../assets/img/service1.jpg',
      },
      {
        id: 5,
        name: 'Research & Insights',
        text: 'We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
        image: '../../../assets/img/service5.jpg',
      }
    ]
  }

}
