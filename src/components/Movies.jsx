import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Movies({ url, title }) {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies(url) {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies(url);
  }, [url]);

  movies.map((movie) => console.log(movie.backdrop_path));

  return (
    <Container>
      <Title>{title}</Title>
      <ChildContainer>
        <ul>
          {movies.map((movie, index) => (
            <Wrap key={index}>
              <MyImg src={`${imgBaseUrl}${movie.backdrop_path}`} alt={movie.name} />
            </Wrap>
          ))}
        </ul>
      </ChildContainer>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  padding: 1rem 4rem;
  width: 100%;
`;

const ChildContainer = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 1.1rem;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Wrap = styled.li`
  min-height: 12rem;
  min-width: 20rem;
  box-shadow: black 0px 15px 10px -7px;
  &:hover {
  }
`;

const MyImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;
const Title = styled.h1`
  color: white;
  padding: 0.8rem;
`;
