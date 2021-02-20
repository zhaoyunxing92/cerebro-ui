import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  execute(url: string, method: string, args: any): Observable<any> {
    return this.http.request(method, url, {
      headers: {'Content-Type': 'application/json'},
      observe: 'body',
      responseType: 'json',
      body: JSON.parse(args)
    });
  }
}
