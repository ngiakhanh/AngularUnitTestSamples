import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ComplexComponent } from './complex/complex.component';
import { RouterModule } from '@angular/router';
import { AsyncComponent } from './async/async.component';
import { StoreModule } from '@ngrx/store';
import { asyncReducer } from './async/async.reducer';
import { AppState } from './async/async.selector';
import { Async2Component } from './async2/async2.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
      ParentComponent,
      ComplexComponent,
      AsyncComponent,
      Async2Component
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    StoreModule.forRoot<AppState>({feature: asyncReducer}),
    HttpClientModule,
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
