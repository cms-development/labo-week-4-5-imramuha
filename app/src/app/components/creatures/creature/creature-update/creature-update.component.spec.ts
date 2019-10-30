import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureUpdateComponent } from './creature-update.component';

describe('CreatureUpdateComponent', () => {
  let component: CreatureUpdateComponent;
  let fixture: ComponentFixture<CreatureUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatureUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatureUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
