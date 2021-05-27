import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map'
import { map, filter } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = 'https://callphpmydear.000webhostapp.com/';
  newUrl = "https://thread-frost-buffet.glitch.me/";
  constructor(private httpClient: HttpClient) { }


  get(id: number): Observable<any> {
    const baseUrl = this.url + 'me/' + id;
    return this.httpClient.get(baseUrl);
  }

  post(text: string, id: number) {
    const formData: FormData = new FormData();
    formData.append('json', JSON.stringify(text));
    const baseUrl = this.url + 'putme/' + id;
    return this.httpClient.post(baseUrl, formData).toPromise().then(data => {
      console.log(data);
    });
  }

  postAdd(text: string) {
    const formData: FormData = new FormData();
    formData.append('json', JSON.stringify(text));
    const baseUrl = this.url + 'me';
    return this.httpClient.post(baseUrl, formData);
  }

  saveJson(data): Observable<any> {
    return this.httpClient.post(this.newUrl + 'save', data).map((response: Response) => {
      return response;
    });
  }
  findJson(data): Observable<any> {
    return this.httpClient.get(this.newUrl + 'find?id=' + data).map((response: Response) => {
      return response;
    });
  }
}
