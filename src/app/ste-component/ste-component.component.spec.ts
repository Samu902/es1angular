import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteComponentComponent } from './ste-component.component';

describe('SteComponentComponent', () => {
  let component: SteComponentComponent;
  let fixture: ComponentFixture<SteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
