import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  server = 'http://localhost:9000/api';
  // 请求头
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  connect(host: string): Observable<Node> {
    const url = `${this.server}/connect`;
    return this.http.post<Node>(url, {host}, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero url=${url}`))
    );
  }

  private log(message: string): void {
    console.log(message);
  }
}
