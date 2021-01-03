import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SearchResult, MOCK_MOVIES, Movie, FullMovie} from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  base_url: string = "http://www.omdbapi.com/?apikey=a77d3b2c&type=movie";

  nominations: Movie[] = JSON.parse(localStorage.getItem('nominations') || '[]');

  constructor(private http: HttpClient) { }

  getNominations(): Movie[] {
    return this.nominations;
  }

  setNominations(nominations: Movie[]): void {
    this.nominations = nominations;
    localStorage.setItem('nominations', JSON.stringify(this.nominations));
  }

  async search(query: string): Promise<SearchResult> {
    return this.http.get<SearchResult>(`${this.base_url}&s=${query}`).toPromise();
  }

  async getMovieById(imdbID: string): Promise<FullMovie> {
    return this.http.get<FullMovie>(`${this.base_url}&i=${imdbID}`).toPromise();
  }
}
