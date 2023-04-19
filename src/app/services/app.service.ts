
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { End } from '../model/end.model';

@Injectable()
export class AppService {
  private url: string = 'https://viacep.com.br/ws/30160907/json/';

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',

    }),

  };

  constructor(private http: HttpClient) {}



  getAddress(): Observable<End> {
    return this.http.get<End>(this.url).pipe(
      (res) => res,
      (error) => error
    );
  }


  public postEnd(end: End): Observable<End> {
    return this.http.post<End>(this.url, end, this.httpOptions)
  }
}