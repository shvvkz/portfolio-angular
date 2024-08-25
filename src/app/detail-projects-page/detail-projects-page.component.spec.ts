import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProjectsPageComponent } from './detail-projects-page.component';

describe('DetailProjectsPageComponent', () => {
  let component: DetailProjectsPageComponent;
  let fixture: ComponentFixture<DetailProjectsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailProjectsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
