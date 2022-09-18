import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState, selectCounter } from './async.selector';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html'
})
export class AsyncComponent implements OnInit, OnDestroy {
  counter: number;
  subscription: Subscription;
  constructor(private store: Store<AppState>) {
    this.counter = 0;
    this.subscription = this.store.pipe(select(selectCounter)).subscribe(counter => this.counter = counter);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
