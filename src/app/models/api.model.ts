export interface Movie {
  imdbID: string;
  Title: string;
  Type: string;
  Poster: string;
  Year: string;
}

export interface SearchResult {
  Search: Movie[];
  Error?: string;
  totalResults: string;
  Response: string;
}

export const MOCK_MOVIES: Movie[] = [
  {
    Title: 'Batman Begins',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  },
  {
    Title: 'Batman v Superman: Dawn of Justice',
    Year: '2016',
    imdbID: 'tt2975590',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  },
  {
    Title: 'Batman',
    Year: '1989',
    imdbID: 'tt0096895',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg',
  },
  {
    Title: 'Batman Returns',
    Year: '1992',
    imdbID: 'tt0103776',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg',
  },
  {
    Title: 'Batman Forever',
    Year: '1995',
    imdbID: 'tt0112462',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Batman & Robin',
    Year: '1997',
    imdbID: 'tt0118688',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lego Batman Movie',
    Year: '2017',
    imdbID: 'tt4116284',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg',
  },
  {
    Title: 'Batman: Under the Red Hood',
    Year: '2010',
    imdbID: 'tt1569923',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Batman: The Dark Knight Returns, Part 1',
    Year: '2012',
    imdbID: 'tt2313197',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Batman: The Killing Joke',
    Year: '2016',
    imdbID: 'tt4853102',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Press 1 for Tamil',
    Year: '2015',
    imdbID: 'tt3982482',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMDBhNDBjMTUtZDNhNC00N2NlLTg4NDgtMWEzOGI3NDk1OGI5XkEyXkFqcGdeQXVyNjU2NzAzMzA@._V1_SX300.jpg',
  },
  {
    Title: 'The Border Tamil',
    Year: '2017',
    imdbID: 'tt7474950',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMzI3NDI0OTktODI1OS00MjZjLTkzMjgtMzMwODU3NDYwNmI3XkEyXkFqcGdeQXVyNDg0NTc0NjY@._V1_SX300.jpg',
  },
  {
    Title: 'Tamil Ellam',
    Year: '2009',
    imdbID: 'tt1819683',
    Type: 'movie',
    Poster: 'N/A',
  },
  {
    Title: 'Tamil Ini',
    Year: '2012',
    imdbID: 'tt2771022',
    Type: 'movie',
    Poster: 'N/A',
  },
  {
    Title:
      'Original (Eng Subs): Dark Horizon - Part 1: Trash Pickup - A Tamil Short Film by Yahiya',
    Year: '2015',
    imdbID: 'tt5902724',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZTUzNzBlY2QtMjU3OC00Yzc5LWFkYjgtYjU2Njc4MTU1ODBhXkEyXkFqcGdeQXVyNjgwNjM0Mzc@._V1_SX300.jpg',
  },
  {
    Title: 'KO 2 (Tamil)',
    Year: '2016',
    imdbID: 'tt6205676',
    Type: 'movie',
    Poster: 'N/A',
  },
  {
    Title: 'Discover Tamil Nadu: Come, Fall in Love',
    Year: '2017',
    imdbID: 'tt6535206',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNmRkNGE2YTYtNWU5OS00NzgyLTkyNDYtMjYxYjQ1NmRmNDhmXkEyXkFqcGdeQXVyMjQ1NDg3NTg@._V1_SX300.jpg',
  },
  {
    Title: 'The Roving Ambassador of Tamil',
    Year: '2013',
    imdbID: 'tt6928530',
    Type: 'movie',
    Poster: 'N/A',
  },
  {
    Title: 'Think-Tamil Short Film',
    Year: '2013',
    imdbID: 'tt3196988',
    Type: 'movie',
    Poster: 'N/A',
  },
  {
    Title: 'Zee Tamil Anthem',
    Year: '2014',
    imdbID: 'tt3733684',
    Type: 'movie',
    Poster: 'N/A',
  },
];
