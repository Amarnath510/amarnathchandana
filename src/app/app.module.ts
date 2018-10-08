import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { PortfolioFooterComponent } from './portfolio-footer/portfolio-footer.component';
import { PortfolioAboutComponent } from './portfolio-about/portfolio-about.component';
import { PortfolioEducationComponent } from './portfolio-education/portfolio-education.component';
import { PortfolioExperienceComponent } from './portfolio-experience/portfolio-experience.component';
import { PortfolioContactComponent } from './portfolio-contact/portfolio-contact.component';
import { PortfolioSkillsComponent } from './portfolio-skills/portfolio-skills.component';

const routes: Routes = [
  { path: 'about', component: PortfolioAboutComponent },
  { path: 'skills', component: PortfolioSkillsComponent },
  { path: 'experience', component: PortfolioExperienceComponent },
  { path: 'education', component: PortfolioEducationComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHeaderComponent,
    PortfolioFooterComponent,
    PortfolioAboutComponent,
    PortfolioEducationComponent,
    PortfolioExperienceComponent,
    PortfolioContactComponent,
    PortfolioSkillsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
