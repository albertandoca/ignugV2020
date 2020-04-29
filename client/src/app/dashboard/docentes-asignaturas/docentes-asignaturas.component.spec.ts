import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesAsignaturasComponent } from './docentes-asignaturas.component';

describe('DocentesAsignaturasComponent', () => {
  let component: DocentesAsignaturasComponent;
  let fixture: ComponentFixture<DocentesAsignaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentesAsignaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
