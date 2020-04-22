import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesDocentesComponent } from './perfiles-docentes.component';

describe('PerfilesDocentesComponent', () => {
  let component: PerfilesDocentesComponent;
  let fixture: ComponentFixture<PerfilesDocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilesDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilesDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
