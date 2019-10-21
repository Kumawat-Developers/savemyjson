import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url="http://localhost/slim/";
  constructor(private httpClient:HttpClient) { }

  get(id:number): Observable<any>{
    var baseUrl=this.url+"me/"+id;
    return this.httpClient.get(baseUrl);
  }
  post(text:string,id:number)
  {
    let formData: FormData = new FormData(); 
    formData.append('json',JSON.stringify(text)); 
    
    var baseUrl=this.url+"putme/"+id;
    //var body = "json=" + JSON.stringify(text);
    return this.httpClient.post(baseUrl, formData).toPromise().then(data=>{
      console.log(data);
    })
    //return this.httpClient.post(baseUrl,{json:text});
  }
  postAdd(text:string)
  {
    let formData: FormData = new FormData(); 
    formData.append('json',JSON.stringify(text)); 
    
    var baseUrl=this.url+"me";
    //var body = "json=" + JSON.stringify(text);
    return this.httpClient.post(baseUrl, formData);
    //return this.httpClient.post(baseUrl,{json:text});
  }
}
