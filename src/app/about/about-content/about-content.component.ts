import { Component, OnInit } from '@angular/core';
declare var Swiper: any


@Component({
  selector: 'app-about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.scss']
})
export class AboutContentComponent implements OnInit {
  
  constructor() { }
  timelineSwiper: any;

  ngOnInit(): void {
          this.timelineSwiper = new Swiper(".timeline .swiper-container", {
      direction: "vertical",
      loop: false,
      speed: 1600,
      pagination: ".swiper-pagination",
      paginationBulletRender: function (swiper: any, index: any, className: any) {
        var year = document
          .querySelectorAll(".swiper-slide")
        [index].getAttribute("data-year");
        return '<span class="' + className + '">' + year + "</span>";
      },
      paginationClickable: true,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      breakpoints: {
        768: {
          direction: "horizontal"
        }
      }
    })
  }

}
