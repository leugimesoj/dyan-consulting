import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ddo } from './ddo';

describe('Ddo', () => {
  let component: Ddo;
  let fixture: ComponentFixture<Ddo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ddo],
    }).compileComponents();

    fixture = TestBed.createComponent(Ddo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
