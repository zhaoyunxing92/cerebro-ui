import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    params: null
  };

  constructor(private http: HttpClient) {
  }

  execute(url: string, method: string, args: any): void {
    this.options.params = args;
    this.http.request(method, url, this.options).subscribe(res => console.log(res));
  }
}
