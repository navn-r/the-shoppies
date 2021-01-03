import { Component, OnInit } from '@angular/core';
import { SearchResult, Movie } from 'src/app/models/api.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  searchResults: SearchResult | null = null;
  searchQuery: string = '';

  // Choosing to proceed without this message panel, but in case I decide to re-style it,
  // I'm not deleting the source files
  shouldShowInstructions: boolean = false;

  loading: boolean = false;

  nominations: Movie[] = [];

  ngOnInit(): void {
    this.nominations = this.movieService.getNominations();
    // (window as any).nominations = this.nominations;
  }

  onClose(): void {
    this.shouldShowInstructions = false;
  }

  async onSearch($event: any): Promise<void> {
    this.loading = true;
    this.searchResults = !$event.trim().length
      ? null
      : await this.movieService.search($event.trim());
    this.searchQuery = $event;
    this.loading = false;
  }

  onNominate($event: any): void {
    this.nominations.push($event);
    this.movieService.setNominations(this.nominations);
  }

  onRemoveNomination($event: any): void {
    this.nominations = this.nominations.filter((n) => n.imdbID !== $event);
    this.movieService.setNominations(this.nominations);
  }

  isNominated(movie: Movie): boolean {
    return this.nominations.map((n) => n.imdbID).includes(movie.imdbID);
  }
}
