import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http: Http) { }

  saveUser(user: any) {
    return this.http.post('http://localhost:8080/api/saveUser/', user).pipe(map((response: Response) => response.json()));
  }

  getUser() {
    return this.http.get('http://localhost:8080/api/getUser/').pipe(map((response: Response) => response.json()));
  }

  deleteUser(id: any) {
    return this.http.post('http://localhost:8080/api/deleteUser/', {'id': id}).pipe(map((response: Response) => response.json()));
  }
}
