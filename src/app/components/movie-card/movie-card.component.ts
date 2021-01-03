import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/api.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movie!: Movie;

  @Input()
  isNominated!: boolean;

  @Input()
  isFull!: boolean;

  @Output()
  onNominate: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onPressIMDb(): void {
    window.open(`https://www.imdb.com/title/${this.movie.imdbID}/`, '__blank');
  }

  onPressNominate(): void {
    this.onNominate.emit(this.movie);
  }

}
