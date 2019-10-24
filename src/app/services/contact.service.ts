import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  url = environment.apiUrl;
  constructor(private http:HttpClient) { }
  
  public sendEmail(content:Object) : Observable<Object>{
    return this.http.post(this.url+'/contact-me', content);
  }
}
