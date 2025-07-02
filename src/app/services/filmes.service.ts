import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  private apiURL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies';

  constructor(private http: HttpClient) {}

  getFilmes(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}
