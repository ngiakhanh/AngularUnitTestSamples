/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParentComponent } from './parent.component';
import { MyService } from '../my-service.service';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fakeService = jasmine.createSpyObj<MyService>('MyService', ['sayHello']);

  beforeEach(() => {
    component = new ParentComponent(fakeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sayHello when initialized', () => {
    //Arrange

    //Assert
    component.ngOnInit();

    //Act
    expect(fakeService.sayHello).toHaveBeenCalled();
  });
});
