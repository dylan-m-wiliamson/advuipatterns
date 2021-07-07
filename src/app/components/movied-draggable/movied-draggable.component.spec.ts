import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedDraggableComponent } from './movied-draggable.component';

describe('MoviedDraggableComponent', () => {
  let component: MoviedDraggableComponent;
  let fixture: ComponentFixture<MoviedDraggableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedDraggableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedDraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
