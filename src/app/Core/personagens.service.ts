import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './app.api';
import { ListPersonagens} from '../cards/listPersonagens';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  constructor(private http: HttpClient) {}

  getList(){
    var urlString = `${BASE_URL}characters/${id}`
    return this.http.get(urlString);
  }
}
