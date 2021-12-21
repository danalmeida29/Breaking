import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './app.api';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  constructor(private http: HttpClient) {}

  getList(){
    var urlString = `${BASE_URL}characters/`
    return this.http.get(urlString);
  }
}
