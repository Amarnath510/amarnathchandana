import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { PortfolioFooterComponent } from './portfolio-footer/portfolio-footer.component';
import { PortfolioAboutComponent } from './portfolio-about/portfolio-about.component';
import { PortfolioEducationComponent } from './portfolio-education/portfolio-education.component';
import { PortfolioExperienceComponent } from './portfolio-experience/portfolio-experience.component';
import { PortfolioContactComponent } from './portfolio-contact/portfolio-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHeaderComponent,
    PortfolioFooterComponent,
    PortfolioAboutComponent,
    PortfolioEducationComponent,
    PortfolioExperienceComponent,
    PortfolioContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
