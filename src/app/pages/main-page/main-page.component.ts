import { Component, OnInit } from '@angular/core';
import { SearchResult, Movie } from 'src/app/models/api.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  searchResults: SearchResult | null = null;

  shouldShowInstructions: boolean = false;

  ngOnInit(): void {}

  onClose(): void {
    this.shouldShowInstructions = false;
  }

  async onSearch($event: any): Promise<void> {
    this.searchResults = await this.movieService.search($event);
  }

  onNominate($event: any): void {
    console.log($event);
  }

  onClear(): void {
    this.searchResults = null;
  }
}
