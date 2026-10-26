import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recuirtment } from './recuirtment';

describe('Recuirtment', () => {
  let component: Recuirtment;
  let fixture: ComponentFixture<Recuirtment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recuirtment],
    }).compileComponents();

    fixture = TestBed.createComponent(Recuirtment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
