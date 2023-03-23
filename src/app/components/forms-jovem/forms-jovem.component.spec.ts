import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsJovemComponent } from './forms-jovem.component';

describe('FormsJovemComponent', () => {
  let component: FormsJovemComponent;
  let fixture: ComponentFixture<FormsJovemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsJovemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsJovemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
