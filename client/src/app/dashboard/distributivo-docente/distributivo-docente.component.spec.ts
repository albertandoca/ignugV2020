import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributivoDocenteComponent } from './distributivo-docente.component';

describe('DistributivoDocenteComponent', () => {
  let component: DistributivoDocenteComponent;
  let fixture: ComponentFixture<DistributivoDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributivoDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributivoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
