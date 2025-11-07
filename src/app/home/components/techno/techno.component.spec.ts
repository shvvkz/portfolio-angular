import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoComponent } from './techno.component';

describe('TechnoComponent', () => {
  let component: TechnoComponent;
  let fixture: ComponentFixture<TechnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
