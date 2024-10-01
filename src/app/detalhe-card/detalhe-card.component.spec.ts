import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCardComponent } from './detalhe-card.component';

describe('DetalheCardComponent', () => {
  let component: DetalheCardComponent;
  let fixture: ComponentFixture<DetalheCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
