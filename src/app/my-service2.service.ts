import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyService } from './my-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyService2 {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<number> {
    return this.httpClient.get<number>('http://localhost:4201');
  }
}
