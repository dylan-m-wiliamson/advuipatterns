import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSorterComponent } from './movie-sorter.component';

describe('MovieSorterComponent', () => {
  let component: MovieSorterComponent;
  let fixture: ComponentFixture<MovieSorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSorterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
