import { Component, OnInit } from '@angular/core';
import { MyService2 } from '../my-service2.service';

@Component({
  selector: 'app-async2',
  templateUrl: './async2.component.html',
  styleUrls: ['./async2.component.css']
})
export class Async2Component implements OnInit {
  loading!: boolean;
  counter = 0;

  constructor(private service: MyService2) {
    this.loading = true;
    this.service.getData().subscribe(data => {
      // do some work
      this.loading = false;
    });
   }

  ngOnInit() {

  }

  updateCounter(): void {
    setTimeout(() => {
      this.counter = 1;
    })
  }
}
