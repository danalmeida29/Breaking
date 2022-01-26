import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './app.api';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  constructor(private http: HttpClient) {}

  getList(){
    var urlString = `${BASE_URL}`
    console.log(urlString);
    return this.http.get(urlString);
  }

  getCharacterId(id:any){
    var urlString = `${BASE_URL}/${id}`;
    console.log(urlString);
    return this.http.get(urlString);
}

}
