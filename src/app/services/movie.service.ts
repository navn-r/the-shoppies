import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SearchResult, Movie, FullMovie } from '../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  BASE_URL = `http://www.omdbapi.com/?apikey=${environment.OMDB_API_KEY}&type=movie`;

  nominations: Movie[] = JSON.parse(
    localStorage.getItem('nominations') || '[]'
  );

  constructor(private http: HttpClient) {}

  getNominations(): Movie[] {
    return this.nominations;
  }

  setNominations(nominations: Movie[]): void {
    this.nominations = nominations;
    localStorage.setItem('nominations', JSON.stringify(this.nominations));
  }

  async search(query: string, currentPage?: number): Promise<SearchResult> {
    return this.http.get<SearchResult>(`${this.BASE_URL}&s=${query}&page=${currentPage ?? 1}`).toPromise();
  }

  async getMovieById(imdbID: string): Promise<FullMovie> {
    return this.http.get<FullMovie>(`${this.BASE_URL}&i=${imdbID}`).toPromise();
  }
}
