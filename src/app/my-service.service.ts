import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { }

  sayHello(): void {
    console.log('sayHello');
  }

  calculate(): string {
    return '1';
  }
}
