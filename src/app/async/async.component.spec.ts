import { OnDestroy } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, fakeAsync, flush, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AsyncComponent } from './async.component';
import { AppState } from './async.selector';

describe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;
  let store: MockStore<AppState>;
  const initialState: AppState = {
    feature: {
      counter: 2
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncComponent ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore<AppState>);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should assign 0 to counter when first initialized', fakeAsync(() => {
    //Arrange

    //Act

    //Assert
    expect(component.counter).toBe(0);
  }));

})

