import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './portfolio-skills.component.html',
  styleUrls: ['./portfolio-skills.component.scss']
})
export class PortfolioSkillsComponent implements OnInit {

  static readonly skills = [
    'HTML5',
    'CSS',
    'JavaScript',
    'Java',
    'Angular',
    'TypeScript',
    'MySQL',
    'Sass',
    'Spring',
    'REST'
  ];

  constructor() { }

  cards: any[] = [];

  ngOnInit() {
    PortfolioSkillsComponent.skills.forEach(skill => {
      this.cards.push( {'image': skill.toLowerCase(), 'name': skill} );
    });
  }

}
