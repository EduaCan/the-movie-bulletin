export interface movieRaw {
        adult: boolean,
      backdrop_path: string,
      genre_ids: number[],
      id: number,
      original_language: string,
      original_title: string,
      overview: string,
      popularity: number,
      poster_path: string,
      release_date: string,
      title: string,
      video: boolean,
      vote_average: number,
      vote_count: number,
    }

  export interface movieListProps {
    movies: movieRaw[]
  }

  export interface movieDetailsProps {
    details: movieDetails
    cast: castDetails
  }

  export interface movieBasic {
      id: number,
      release_date: string,
      title: string,
      vote_average: number,
    }

    export interface movieReduced extends movieBasic {
      poster_path: string
    }

    
  export interface movieDetails extends movieBasic {
    
  }

  export interface castDetails extends movieBasic {
    
  }
