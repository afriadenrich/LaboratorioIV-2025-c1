import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploDirectivasComponent } from './ejemplo-directivas.component';

describe('EjemploDirectivasComponent', () => {
  let component: EjemploDirectivasComponent;
  let fixture: ComponentFixture<EjemploDirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploDirectivasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploDirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
