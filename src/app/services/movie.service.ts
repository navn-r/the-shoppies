import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SearchResult, MOCK_MOVIES} from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  base_url: string = "http://www.omdbapi.com/?apikey=a77d3b2c&type=movie";

  constructor(private http: HttpClient) { }

  async search(query: string): Promise<SearchResult> {
    return this.http.get<SearchResult>(`${this.base_url}&s=${query}`).toPromise();
  }
}
