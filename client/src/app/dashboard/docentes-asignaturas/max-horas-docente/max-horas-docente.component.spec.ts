import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxHorasDocenteComponent } from './max-horas-docente.component';

describe('MaxHorasDocenteComponent', () => {
  let component: MaxHorasDocenteComponent;
  let fixture: ComponentFixture<MaxHorasDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxHorasDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxHorasDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
