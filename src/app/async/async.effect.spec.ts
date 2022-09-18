import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { cold, hot } from 'jasmine-marbles';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { MyService2 } from '../my-service2.service';
import { loadData, loadDataSuccessfully } from './async.action';
import { AsyncComponent } from './async.component';
import { AsyncEffect } from './async.effect';
import { initialState } from './async.reducer';
import { AppState } from './async.selector';

describe('AsyncEffect', () => {
  let actions$ = new Observable<Action>();
  let effect: AsyncEffect;
  const mockService = jasmine.createSpyObj<MyService2>('MyService2', ['getData']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        AsyncEffect,
        {provide: MyService2, useValue: mockService},
        provideMockActions(() => actions$),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    effect = TestBed.inject(AsyncEffect);
  });

  it('should load data using jasmine-marbles', () => {
    //Arrange
    actions$ = hot('-a', { a : loadData()});
    mockService.getData.and.returnValue(cold('-a|', { a: 1 }));
    const expected = hot('--a', { a : loadDataSuccessfully({data: 1})});

    //Act and Assert
    expect(effect.loadData$).toBeObservable(expected);
  });

  it('should load data using TestScheduler.run', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    testScheduler.run(({ cold, hot, expectObservable }) => {
      //Arrange
      actions$ = hot('-a', { a : loadData()});
      mockService.getData.and.returnValue(cold('-a|', { a: 1 }));

      //Act and Assert
      expectObservable(effect.loadData$).toBe('--a', { a : loadDataSuccessfully({data: 1})});
    });
  });

  it('should load data using of()', (done) => {
    //Arrange
    actions$ = of(loadData());
    mockService.getData.and.returnValue(of(1));

    //Act and Assert
    effect.loadData$.subscribe(action => {
      expect(action).toEqual(loadDataSuccessfully({data: 1}));
      done();
    });
  });

  it('should load data using BehaviorSubject/ReplaySubject', (done) => {
    //Arrange
    actions$ = new BehaviorSubject<Action>(loadData());
    mockService.getData.and.returnValue(of(1));

    //Act and Assert
    effect.loadData$.subscribe(action => {
      expect(action).toEqual(loadDataSuccessfully({data: 1}));
      done();
    });
  });

})

