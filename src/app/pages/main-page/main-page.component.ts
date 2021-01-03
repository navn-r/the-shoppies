import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchResult, Movie, FullMovie } from 'src/app/models/api.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(async (params) => {
      const nominations = params['n'];
      if (nominations && nominations.length)
        await this.fetchNominations(nominations.split(' '));
    });
  }

  searchResults: SearchResult | null = null;
  searchQuery: string = '';

  // Choosing to proceed without this message panel, but in case I decide to re-style it,
  // I'm not deleting the source files
  shouldShowInstructions: boolean = false;

  loading: boolean = false;

  nominations: Movie[] = [];

  ngOnInit(): void {
    this.nominations = this.movieService.getNominations();
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

  onClear(): void {
    this.nominations = [];
    this.movieService.setNominations(this.nominations);
  }

  async fetchNominations(nominations: string[]): Promise<void> {
    this.nominations = (
      await Promise.all(
        nominations.map((n) => this.movieService.getMovieById(n))
      )
    ).map(({ imdbID, Title, Type, Poster, Year }) => ({
      imdbID,
      Title,
      Type,
      Poster,
      Year,
    }));
    this.movieService.setNominations(this.nominations);
    window.history.pushState({}, document.title, '/');
  }
}
