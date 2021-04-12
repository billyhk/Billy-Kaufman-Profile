import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Home',
            link: './',
            index: 0
        },
        {
            label: 'About',
            link: './about',
            index: 1
        },
                {
            label: 'Skills',
            link: './skills',
            index: 2
        },

        {
            label: 'Projects',
            link: './projects',
            index: 3
        },
        {
            label: 'Contact',
            link: './contact',
            index: 4
        }
    ];
}
  // timelineSwiper: any;

  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.    


  }

  title = 'Billy-Kaufman-Profile';

  public tabIndex = 0;
  public tabClick(idx: number) {
    this.tabIndex = idx;
  }

  public navigateHome(): void {
    this.tabClick(0)
  }
  
  public navigateAbout(): void {
        this.tabClick(1)
  }
  
  public navigateSkills(): void {
        this.tabClick(2)
  }

  public navigateProjects(): void {
        this.tabClick(3)

  }
  
  public navigateContact(): void {
        this.tabClick(4)
  }


}
