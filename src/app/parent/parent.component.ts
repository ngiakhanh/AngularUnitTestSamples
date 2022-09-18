import { Component, OnInit } from '@angular/core';
import { MyService } from '../my-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  constructor(public service: MyService) {

  }

  ngOnInit() {
    this.service.sayHello();
  }

}
