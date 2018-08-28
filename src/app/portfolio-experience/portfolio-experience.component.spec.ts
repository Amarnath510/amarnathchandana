import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioExperienceComponent } from './portfolio-experience.component';

describe('PortfolioExperienceComponent', () => {
  let component: PortfolioExperienceComponent;
  let fixture: ComponentFixture<PortfolioExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
