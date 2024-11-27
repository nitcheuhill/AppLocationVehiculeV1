import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsmodelsPageComponent } from './detailsmodels-page.component';

describe('DetailsmodelsPageComponent', () => {
  let component: DetailsmodelsPageComponent;
  let fixture: ComponentFixture<DetailsmodelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsmodelsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsmodelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
