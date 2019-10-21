import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = "http://localhost:8080/";
  constructor(private httpClient: HttpClient) { }

  getConfig(): Observable<any>{
    return this.httpClient.get(this.url+"app");
  }
}
