import API_KEY from "./config";
const baseUrl = "https://api.themoviedb.org/3";

const requests = {
  originals: `${baseUrl}/discover/tv?api_key=${API_KEY}&with-networks=213`,
  trending: `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  topRated: `${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  action: `${baseUrl}/discover/movie/?api_key=${API_KEY}&with_genres=28`,
  comedy: `${baseUrl}/discover/movie/?api_key=${API_KEY}&with_genres=35`,
  horror: `${baseUrl}/discover/movie/?api_key=${API_KEY}&with_genres=27`,
  Romance: `${baseUrl}/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `${baseUrl}/discover/movie/?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
