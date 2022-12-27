import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function Movies({ url, title }) {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);
  const matches = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    async function fetchMovies(url) {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies(url);
  }, []);

  const myList = useRef(null);

  function handleScrollRight() {
    myList.current.scrollLeft += 700;
    console.log("right");
  }

  function handleScrollLeft() {
    myList.current.scrollLeft -= 700;
    console.log("left");
  }

  return (
    <Container>
      <Title>{title}</Title>
      <ChildContainer>
        {matches ? null : (
          <ScrollLeft onClick={handleScrollLeft}>
            <ChevronLeftIcon sx={{ color: "white", fontSize: 50 }} />
          </ScrollLeft>
        )}

        <ListContainer>
          <ul ref={myList}>
            {movies.map((movie, index) => (
              <Wrap key={index}>
                <MyImg
                  src={
                    matches
                      ? `${imgBaseUrl}${movie.poster_path}`
                      : `${imgBaseUrl}${movie.backdrop_path}`
                  }
                  alt={movie.name}
                />
              </Wrap>
            ))}
          </ul>
        </ListContainer>
        {matches ? null : (
          <ScrollRight onClick={handleScrollRight}>
            <ChevronRightIcon sx={{ color: "white", fontSize: 50 }} />
          </ScrollRight>
        )}
      </ChildContainer>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  position: relative;
  padding: 1rem 4rem;
  width: 100%;
  @media only screen and (max-width: 600px) {
    padding: 0.8rem 1rem;
  }
`;

const ChildContainer = styled.div``;

const ScrollLeft = styled.button`
  position: absolute;
  height: 75%;
  width: 4rem;
  top: 1.8rem;
  bottom: 0;
  left: 0;
  margin-top: auto;
  margin-bottom: auto;
  background-color: black;
  opacity: 0;
  transition: 250ms;
  &:hover {
    opacity: 0.6;
  }
`;
const ScrollRight = styled.button`
  position: absolute;
  height: 75%;
  width: 4rem;
  top: 1.8rem;
  bottom: 0;
  right: 0;
  margin-top: auto;
  margin-bottom: auto;
  background-color: black;
  opacity: 0;
  transition: 250ms;
  &:hover {
    opacity: 0.6;
  }
`;

const ListContainer = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 1rem;
    gap: 1.8rem;
    transition: all 250ms;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Wrap = styled.li`
  min-height: 12rem;
  min-width: 20rem;
  @media only screen and (max-width: 600px) {
    min-width: 6.8rem;
    min-height: 9.3rem;
  }
`;

const MyImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 250ms;
  box-shadow: black 0px 15px 10px -7px;

  &:hover {
    transform: scale(1.05);
    border: 2px solid #fff;
    transition: all 250ms;
  }
`;
const Title = styled.h1`
  color: white;
`;
