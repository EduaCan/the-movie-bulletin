export default class Tmdb {
  private readonly API_BASE = 'https://api.themoviedb.org/3/';
  private readonly TMDB_API_KEY = process.env.API_KEY;
  private readonly API_LANGUAGE = 'en-US';

  private fetchJSON = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status} error`);
    }

    return response.json();
  };

  public getPopularMovies = async (page = 1) => {
    return this.fetchJSON(
      `${this.API_BASE}movie/popular?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}&page=${page}`
    );
  };

  public getMovieDetails = async (id: number) => {
    return this.fetchJSON(
      `${this.API_BASE}movie/${id}?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}`
    );
  };
  public getMovieCredits = async (id: number) => {
    return this.fetchJSON(
      `${this.API_BASE}movie/${id}/credits?api_key=${this.TMDB_API_KEY}&language=${this.API_LANGUAGE}`
    );
  };

}
