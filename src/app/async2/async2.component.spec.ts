/* tslint:disable:no-unused-variable */
import { ComponentFixture, fakeAsync, flush, TestBed, waitForAsync } from '@angular/core/testing';
import { Async2Component } from './async2.component';
import { asyncScheduler, defer, of, scheduled } from 'rxjs';
import { MyService2 } from '../my-service2.service';
import { hot } from 'jasmine-marbles';

describe('Async2Component', () => {
  let component: Async2Component;
  let fixture: ComponentFixture<Async2Component>;
  let mockService = <MyService2>{
    getData() {
      //return defer(() => Promise.resolve(1));
      //return scheduled([1], asyncScheduler);
      //return of(1, asyncScheduler);
      return of(1);
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Async2Component ],
      providers: [{provide: MyService2, useValue: mockService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Async2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should update counter', fakeAsync(() => {
    //Arrange

    //Act
    component.updateCounter();
    flush();

    //Assert
    expect(component.counter).toBe(1);
  }));

  it('should set loading to true when first initialized', () => {
    //Arrange

    //Act

    //Assert
    expect(component.loading).toBeTrue();
  });
});
