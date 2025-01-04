import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model3DpageComponent } from './model3-dpage.component';

describe('Model3DpageComponent', () => {
  let component: Model3DpageComponent;
  let fixture: ComponentFixture<Model3DpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Model3DpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model3DpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
