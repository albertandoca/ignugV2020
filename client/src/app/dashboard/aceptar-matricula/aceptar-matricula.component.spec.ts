import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarMatriculaComponent } from './aceptar-matricula.component';

describe('AceptarMatriculaComponent', () => {
  let component: AceptarMatriculaComponent;
  let fixture: ComponentFixture<AceptarMatriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceptarMatriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptarMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
