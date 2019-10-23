import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = 'https://callphpmydear.000webhostapp.com/';
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
}
