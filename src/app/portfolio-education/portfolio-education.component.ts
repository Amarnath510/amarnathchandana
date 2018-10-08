import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-education',
  templateUrl: './portfolio-education.component.html',
  styleUrls: ['./portfolio-education.component.scss']
})
export class PortfolioEducationComponent implements OnInit {

  static readonly HARPERS = 'Harpers';
  static readonly GUDLAVALLERU = 'Gudlavalleru';
  static readonly IIITB = 'IIITB';

  static readonly SCHOOL_DETAILS: any[] = [
    {
      'key': PortfolioEducationComponent.HARPERS,
      'school': 'Harper\'s High School',
      'logo': 'harpers',
      'url': 'http://www.harpershighschool.in'
    },
    {
      'key': PortfolioEducationComponent.GUDLAVALLERU,
      'school': 'Gudlavalleru Engineering College',
      'logo': 'gudlavalleru',
      'url': 'http://gecgudlavalleru.ac.in'
    },
    {
      'key': PortfolioEducationComponent.IIITB,
      'school': 'IIIT Bangalore',
      'logo': 'iiitb',
      'url': 'https://www.iiitb.ac.in/'
    }
  ];

  static readonly SCHOOLING_DETAILS: any[] = [
    {
      'key': PortfolioEducationComponent.HARPERS,
      'passed': 'Mar-2003',
      'degree': 'Secondary School Certificate'
    },
    {
      'key': PortfolioEducationComponent.GUDLAVALLERU,
      'passed': 'Apr-2010',
      'degree': 'Bachelor of Technology (B.Tech)',
      'course': 'Computer Science'
    },
    {
      'key': PortfolioEducationComponent.IIITB,
      'passed': 'Jun-2012',
      'degree': 'Master of Technology (M.Tech)',
      'course': 'Information Technology'
    }
  ];

  schools: string[] = [
    PortfolioEducationComponent.HARPERS,
    PortfolioEducationComponent.GUDLAVALLERU,
    PortfolioEducationComponent.IIITB
  ];

  education: any[] = [];

  constructor() { }

  ngOnInit() {
    this.schools.forEach(school => {
      this.education.push(Object.assign({}, this.getSchoolDetails(school), this.getSchoolingDetails(school)));
    });
  }

  private getSchoolDetails(key: string) {
    for (let i = 0; i < PortfolioEducationComponent.SCHOOL_DETAILS.length; i++) {
      if (PortfolioEducationComponent.SCHOOL_DETAILS[i].key === key) {
        return PortfolioEducationComponent.SCHOOL_DETAILS[i];
      }
    }
  }

  private getSchoolingDetails(key: string) {
    for (let i = 0; i < PortfolioEducationComponent.SCHOOLING_DETAILS.length; i++) {
      if (PortfolioEducationComponent.SCHOOLING_DETAILS[i].key === key) {
        return PortfolioEducationComponent.SCHOOLING_DETAILS[i];
      }
    }
  }

}
