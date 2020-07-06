import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosbbComponent } from './numerosbb.component';

describe('NumerosbbComponent', () => {
  let component: NumerosbbComponent;
  let fixture: ComponentFixture<NumerosbbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerosbbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
