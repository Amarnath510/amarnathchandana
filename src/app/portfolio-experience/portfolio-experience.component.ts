import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-experience',
  templateUrl: './portfolio-experience.component.html',
  styleUrls: ['./portfolio-experience.component.scss']
})
export class PortfolioExperienceComponent implements OnInit {

  static readonly PRAMATI = 'Pramati';
  static readonly ORACLE = 'Oracle';
  static readonly ACCOLITE = 'Accolite';
  static readonly MERCEDES = 'Mercedes';

  static readonly ORG_DETAILS: any[] = [
    {
      'key': PortfolioExperienceComponent.PRAMATI,
      'name': 'Pramati Technologies',
      'url': 'https://www.pramati.com',
      'logo': 'Pramati'
    },
    {
      'key': PortfolioExperienceComponent.ORACLE,
      'name': 'Oracle',
      'url': 'https://www.oracle.com/in/index.html',
      'logo': 'Oracle'
    },
    {
      'key': PortfolioExperienceComponent.ACCOLITE,
      'name': 'Accolite Software',
      'url': 'http://accolite.com',
      'logo': 'Accolite'
    },
    {
      'key': PortfolioExperienceComponent.MERCEDES,
      'name': 'Mercedes Benz R & D',
      'url': 'https://mbrdi.co.in',
      'logo': 'Mercedes'
    }
  ];

  static readonly EXP_DETAILS: any[] = [
    {
      'key': PortfolioExperienceComponent.PRAMATI,
      'sd': '27-Mar-2017',
      'ed': 'Present',
      'project': 'Castlight Health Navigation',
      'role': 'Senior Development Engineer',
      /* tslint:disable-next-line:max-line-length */
      'description': 'Arm your employees with a virtual assistant to drive better healthcare decisions, powered by an extensive data set of medical claims, benefit designs, and provider quality. Intercept employees that are seeking care, and guide them to higher quality, lower cost options.',
      'technologies': 'Angular, TypeScript, JavaScript, HTML5, CSS, Java 8, Microservices, MySQL, Mongo'
    },
    {
      'key': PortfolioExperienceComponent.ORACLE,
      'sd': '27-Mar-2017',
      'ed': 'Present',
      'project': 'Oracle 12C',
      'role': 'Senior Member Technical Staff',
      'description': 'Senior Developer for Oracle 12C project. ',
      'technologies': 'Java 6, AngularJS, HTML5, CSS, Oracle 12C'
    },
    {
      'key': PortfolioExperienceComponent.ACCOLITE,
      'sd': '27-Mar-2017',
      'ed': 'Present',
      'role': 'Software Engineer',
      'project': 'British Telecom eServe portal',
      'description': 'Full Stack Developer for British Telecom eServe portal.',
      'technologies': 'Java 6, jQuery, HTML5, CSS'
    },
    {
      'key': PortfolioExperienceComponent.MERCEDES,
      'sd': '27-Mar-2017',
      'ed': 'Present',
      'role': 'Post Graduate Engineering Trainee',
      'project': 'Employee Supply Chain Management (eSCC)',
      /* tslint:disable-next-line:max-line-length */
      'description': 'Post Graduate Engineering Trainee where I was part of the development team. Worked both on UI (using Swing) and backend (using core Java) to develop supply chain management application.',
      'technologies': 'Java 6, Swing, IBM DB2'
    }
  ];

  companies: string[] = [
    PortfolioExperienceComponent.PRAMATI,
    PortfolioExperienceComponent.ORACLE,
    PortfolioExperienceComponent.ACCOLITE,
    PortfolioExperienceComponent.MERCEDES
  ];

  experience: any[] = [];

  constructor() { }

  ngOnInit() {
    this.companies.forEach(company => {
      const details = Object.assign({}, this.getOrgDetails(company), this.getExpDetails(company));
      this.experience.push(details);
    });
  }

  private getExpDetails(key: string): any {
    for (let i = 0; i < PortfolioExperienceComponent.EXP_DETAILS.length; i++) {
      if (PortfolioExperienceComponent.EXP_DETAILS[i].key === key) {
        return PortfolioExperienceComponent.EXP_DETAILS[i];
      }
    }
  }

  private getOrgDetails(key: string): any {
    for (let i = 0; i < PortfolioExperienceComponent.ORG_DETAILS.length; i++) {
      if (PortfolioExperienceComponent.ORG_DETAILS[i].key === key) {
        return PortfolioExperienceComponent.ORG_DETAILS[i];
      }
    }
  }

}
