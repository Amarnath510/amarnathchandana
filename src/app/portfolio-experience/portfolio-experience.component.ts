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
      'org': 'Pramati Technologies',
      'url': 'https://www.pramati.com',
      'logo': 'Pramati'
    },
    {
      'key': PortfolioExperienceComponent.ORACLE,
      'org': 'Oracle India',
      'url': 'https://www.oracle.com/in/index.html',
      'logo': 'Oracle'
    },
    {
      'key': PortfolioExperienceComponent.ACCOLITE,
      'org': 'Accolite Software',
      'url': 'http://accolite.com',
      'logo': 'Accolite'
    },
    {
      'key': PortfolioExperienceComponent.MERCEDES,
      'org': 'Mercedes Benz R & D',
      'url': 'https://mbrdi.co.in',
      'logo': 'Mercedes'
    }
  ];

  static readonly EXP_DETAILS: any[] = [
    {
      'key': PortfolioExperienceComponent.PRAMATI,
      'sd': 'Mar-2017',
      'ed': 'Present',
      'project': 'Castlight Health Navigation',
      'role': 'Senior Development Engineer',
      /* tslint:disable-next-line:max-line-length */
      'description': 'Full stack developer for Healthcare price transparency application where user can search for providers (Doctors, Hospitals, Labs), check for their details/prices, book appointments etc. across United States.',
      'technologies': 'Angular, TypeScript, JavaScript, HTML5, CSS, Java 8, Microservices, MySQL, Mongo'
    },
    {
      'key': PortfolioExperienceComponent.ORACLE,
      'sd': 'Feb-2014',
      'ed': 'Mar-2017',
      'project': 'Oracle 12C',
      'role': 'Senior Member Technical Staff',
      'description': 'Senior Java Developer for Oracle 12C project. Part of OJVM team at India Development Center.',
      'technologies': 'Java 6, Oracle, AngularJS'
    },
    {
      'key': PortfolioExperienceComponent.ACCOLITE,
      'sd': 'May-2013',
      'ed': 'Feb-2014',
      'role': 'Software Engineer',
      'project': 'British Telecom eServe portal',
      /* tslint:disable-next-line:max-line-length */
      'description': 'Full Stack Developer for British Telecom eServe portal. Application is an internal BT portal where an employee can check his Details, Statement of Accounts, Usage of funds etc.',
      'technologies': 'Java 6, jQuery, HTML5, CSS, Jasper Reports'
    },
    {
      'key': PortfolioExperienceComponent.MERCEDES,
      'sd': 'Jul-2012',
      'ed': 'May-2013',
      'role': 'Post Graduate Engineering Trainee',
      'project': 'Employee Supply Chain Management (eSCC)',
      /* tslint:disable-next-line:max-line-length */
      'description': 'Java Developer for eSCC project. Worked both on UI (using Swing) and backend (using core Java) for Mercedes supply chain management application where the application main focus is on inventory.',
      'technologies': 'Java 6, Swing, IBM DB2'
    }
  ];

  companies: string[] = [
    PortfolioExperienceComponent.PRAMATI,
    PortfolioExperienceComponent.ORACLE,
    PortfolioExperienceComponent.ACCOLITE,
    // PortfolioExperienceComponent.MERCEDES
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
