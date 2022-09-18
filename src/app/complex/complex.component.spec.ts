/* tslint:disable:no-unused-variable */
import { ComplexComponent } from './complex.component';
import { MyService } from '../my-service.service';
import { ActivatedRoute, Router } from '@angular/router';

describe('ComplexComponent', () => {
  let component: ComplexComponent;
  const fakeService = jasmine.createSpyObj<MyService>('MyService', ['sayHello', 'calculate']);
  fakeService.calculate.and.returnValue('1');
  const fakeRouter: Router = jasmine.createSpyObj<Router>('Router', ['navigate']);
  const fakeActivatedRoute: ActivatedRoute = <ActivatedRoute>{}

  beforeEach(() => {
    component = new ComplexComponent(fakeService, fakeRouter, fakeActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to summary page', () => {
    //Arrange

    //Act
    component.navigateToSummaryPage();

    //Assert
    //expect(fakeService.calculate).toHaveBeenCalled();
    expect(fakeRouter.navigate).toHaveBeenCalledWith(
      ['child/1'],
      {relativeTo: fakeActivatedRoute}
    );
  });

  it('should increase count when onClick is called', () => {
    //Arrange
    component.counter = 0;

    //Act
    component.onClick();

    //Assert
    expect(component.counter).toBe(1);
  });

  //cannot test DOM!
});
