import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-testimonial',
  templateUrl: './create-testimonial.component.html',
  styleUrls: ['./create-testimonial.component.scss']
})
export class CreateTestimonialComponent implements OnInit {

  preview: any = "../../../../assets/img/img-upload-icon.png";
  loading: any = "../../../../assets/img/loading.gif";
  imageUploaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  readURL(event: any): void {
    if (event.target['files'] && event.target['files'][0]) {
      const file = event.target['files'][0];

      const reader = new FileReader();
      reader.onload = e => this.preview = reader.result;

      reader.readAsDataURL(file);
    }
  }

}
