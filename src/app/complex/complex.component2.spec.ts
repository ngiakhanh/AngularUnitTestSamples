/* tslint:disable:no-unused-variable */
import { ComplexComponent } from './complex.component';
import { MyService } from '../my-service.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ComplexComponent2', () => {
  let component: ComplexComponent;
  const fakeService = jasmine.createSpyObj<MyService>('MyService', ['sayHello', 'calculate']);
  fakeService.calculate.and.returnValue('1');
  let router: Router;
  let route: ActivatedRoute;
  let fixture: ComponentFixture<ComplexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ComplexComponent
      ],
      imports: [RouterTestingModule],
      providers: [{provide: MyService, useValue: fakeService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to summary page', () => {
    //Arrange
    spyOn(router, 'navigate');

    //Act
    component.navigateToSummaryPage();

    //Assert
    expect(router.navigate).toHaveBeenCalledWith(
      ['child/1'],
      {relativeTo: route}
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


  it('should rerender when counter is updated', () => {
    //Arrange
    const nativeElement = fixture.debugElement.nativeElement;
    const p: HTMLParagraphElement = nativeElement.querySelector('p')!;

    //Act
    component.counter = Math.floor(Math.random() * 10);
    fixture.detectChanges();

    //Assert
    expect(p.textContent).toBe(component.counter.toString());
  });

  it('should call onClick when user click the button using browser native event api', () => {
    //Arrange
    spyOn(component, 'onClick');
    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button')!;

    //Act
    button.click();

    //Assert
    expect(component.onClick).toHaveBeenCalled();
  });

  it('should call onClick when user click the button using Angular triggerEventHandler', () => {
    //Arrange
    spyOn(component, 'onClick');
    const button: DebugElement = fixture.debugElement.query(By.css('button'));

    //Act
    button.triggerEventHandler('click');

    //Assert
    expect(component.onClick).toHaveBeenCalled();
  });
});
