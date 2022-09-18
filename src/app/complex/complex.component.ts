import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyService } from '../my-service.service';

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html'
})
export class ComplexComponent {
  counter: number = 0;
  constructor(public service: MyService, private router: Router, private route: ActivatedRoute) {
  }

  navigateToSummaryPage() {
    const id = this.service.calculate();
    this.router.navigate([`child/${id}`], {relativeTo: this.route});
  }

  onClick() {
    this.counter++;
  }
}
