import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficadorComponent } from './graficador.component';

describe('GraficadorComponent', () => {
  let component: GraficadorComponent;
  let fixture: ComponentFixture<GraficadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
