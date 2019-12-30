import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBooksComponent } from './add-new-books.component';

describe('AddNewBooksComponent', () => {
  let component: AddNewBooksComponent;
  let fixture: ComponentFixture<AddNewBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
