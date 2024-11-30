import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReseachPageComponent } from './form-reseach-page.component';

describe('FormReseachPageComponent', () => {
  let component: FormReseachPageComponent;
  let fixture: ComponentFixture<FormReseachPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormReseachPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReseachPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
