import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFilmeComponent } from './consulta-filme.component';

describe('ConsultaFilmeComponent', () => {
  let component: ConsultaFilmeComponent;
  let fixture: ComponentFixture<ConsultaFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
