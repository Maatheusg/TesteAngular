import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPessoasComponent } from './tela-pessoas.component';

describe('TelaPessoasComponent', () => {
  let component: TelaPessoasComponent;
  let fixture: ComponentFixture<TelaPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaPessoasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
