import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarAnulacionMatriculaComponent } from './solicitar-anulacion-matricula.component';

describe('SolicitarAnulacionMatriculaComponent', () => {
  let component: SolicitarAnulacionMatriculaComponent;
  let fixture: ComponentFixture<SolicitarAnulacionMatriculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarAnulacionMatriculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarAnulacionMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
