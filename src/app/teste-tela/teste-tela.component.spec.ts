import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteTelaComponent } from './teste-tela.component';

describe('TesteTelaComponent', () => {
  let component: TesteTelaComponent;
  let fixture: ComponentFixture<TesteTelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteTelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
