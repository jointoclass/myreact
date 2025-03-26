import axios from "axios";
const header = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmN2JmMDgwOWMxZGFlNTViYzgyMTkzNDcwMTQwMiIsIm5iZiI6MTcyMTg4NDQ4OS4wMDI2MTcsInN1YiI6IjY0Njk2MzUwYTUwNDZlMDBlNWI2NjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3fi44yAiziGcROaufG04pkpjYAp71lcMtXXM9bXbPY",
  },
};
export const IMG_PATH = "https://image.tmdb.org/t/p/original";

export const categories = [
  { category: "Now Playing", func: getMoviesNowPlaying },
  { category: "Popular", func: getMoviesPopular },
  { category: "Top Rated", func: getMoviesTopRated },
  { category: "Upcoming", func: getMoviesUpcoming },
];

export async function getGenreListMovie() {
  let storedGenreList = JSON.parse(sessionStorage.getItem("GenreList"));
  if (storedGenreList && storedGenreList.length > 0) {
    console.log("세션스토리지에 값이 있음");
    return storedGenreList;
  } else {
    console.log("세션스토리지에 없어서 API 호출");
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?language=en-US&page=1",
        header
      );
      const genreList = response.data.genres;
      sessionStorage.setItem("GenreList", JSON.stringify(genreList));
      return genreList;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

export function getMoviesNowPlaying() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    header
  );
}
export function getMoviesPopular() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    header
  );
}
export function getMoviesTopRated() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    header
  );
}
export function getMoviesUpcoming() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    header
  );
}
export function getMovieDetailById(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    header
  );
}
export function getMovieCreditById(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    header
  );
}
export function searchMoviesByKeyword(keyword) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`,
    header
  );
}

// [12, 35, 80]과 같이 숫자의 배열을 매개변수로 전달하면
// "Adventure, Drama, Crime"과 같이 장르문자열을 리턴하는 함수
export function getGenreName(genreList, idList) {
  return idList
    .map((id) => {
      const found = genreList.find((genre) => genre.id == id);
      return found ? found.name : "";
    })
    .filter((name) => name)
    .join(", ");
}
