import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoTempoComponent } from './resultado-tempo.component';

describe('ResultadoTempoComponent', () => {
  let component: ResultadoTempoComponent;
  let fixture: ComponentFixture<ResultadoTempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoTempoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
