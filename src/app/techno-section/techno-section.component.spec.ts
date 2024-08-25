import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoSectionComponent } from './techno-section.component';

describe('TechnoSectionComponent', () => {
  let component: TechnoSectionComponent;
  let fixture: ComponentFixture<TechnoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnoSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
