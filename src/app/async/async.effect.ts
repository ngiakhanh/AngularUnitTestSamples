import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { MyService2 } from '../my-service2.service';
import { loadData, loadDataSuccessfully } from './async.action';

@Injectable()
export class AsyncEffect {

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(loadData),
    mergeMap(() => this.service.getData()
      .pipe(
        map(data => loadDataSuccessfully({data: data}))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private service: MyService2
  ) {}
}
