import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  base_url: string = "http://www.omdbapi.com/?i=tt3896198&apikey=a77d3b2c";

  constructor(private http: HttpClient) { }
}
