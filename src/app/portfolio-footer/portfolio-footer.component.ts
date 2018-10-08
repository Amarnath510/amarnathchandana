import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-footer',
  templateUrl: './portfolio-footer.component.html',
  styleUrls: ['./portfolio-footer.component.scss']
})
export class PortfolioFooterComponent implements OnInit {

  accounts: any[] = [];

  constructor() { }

  ngOnInit() {
    this.accounts.push({
      'url': 'https://www.linkedin.com/in/amarnathchandana',
      'icon': 'fab fa-linkedin-in',
      'title': 'Linked In'
    });
    this.accounts.push({
      'url': 'https://stackoverflow.com/u/967638',
      'icon': 'fab fa-stack-overflow',
      'title': 'Stackoverflow'
    });
    this.accounts.push({
      'url': 'https://twitter.com/Amar2Chan',
      'icon': 'fab fa-twitter',
      'title': 'Twitter'
    });
    this.accounts.push({
      'url': 'https://github.com/Amarnath510',
      'icon': 'fab fa-github',
      'title': 'Github'
    });
  }

}
