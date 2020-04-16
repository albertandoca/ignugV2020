import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudMatriculaComponent } from './solicitud-matricula.component';

describe('SolicitudMatriculaComponent', () => {
  let component: SolicitudMatriculaComponent;
  let fixture: ComponentFixture<SolicitudMatriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudMatriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
