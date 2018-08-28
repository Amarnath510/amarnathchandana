import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.scss']
})
export class PortfolioHeaderComponent implements OnInit {

  static readonly ABOUT: string = 'about';
  static readonly EXPERIENCE: string = 'experience';
  static readonly EDUCATION: string = 'education';
  static readonly CONTACT: string = 'contact';

  selectedTab: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  isActive(tab: string): boolean {
    return ('/' + tab === this.router.url);
  }

}
