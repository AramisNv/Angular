import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MicroserviceService {
  private apiUrl = 'http://127.0.0.1:8000/api/message';

  constructor(private http: HttpClient) { }

  getApiUrl(): string {
    return this.apiUrl;
  }

  getMessage(): Observable<any> {
    return this.http.get(this.apiUrl, { observe: 'response' });
  }
}
