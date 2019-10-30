import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';


import { Creature } from '../models/creature';
import { Title } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private baseUrl = 'http://localhost:80/wp/wp-json/wp/v2/';

  user = JSON.parse(localStorage.getItem('currentUser'));

  headers = new HttpHeaders({
    'Content-Type': 'multipart/form-data' });
  options = { headers: this.headers };

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {

  }

  getCreatures() {
    return this.http.get(`${this.baseUrl}creature`);
  }

  getCreature(id) {
    return this.http.get<Creature[]>(`${this.baseUrl}creature/` + id);
  }

  deleteCreature(id) {
    return this.http.delete(`${this.baseUrl}creature/` + id, {headers: this.headers});
  }

  createCreature(formdata) {
    return this.http.post(`${this.baseUrl}creature?status=publish`, null, formdata);
  }

  creatureUpdate(id, title, data) {
    console.log(data);
    return this.http.post(`${this.baseUrl}creature/` + id + `?title=` + title, data);
  }

}
