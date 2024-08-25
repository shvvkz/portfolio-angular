import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSectionComponent } from './resume-section.component';

describe('ResumeSectionComponent', () => {
  let component: ResumeSectionComponent;
  let fixture: ComponentFixture<ResumeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
