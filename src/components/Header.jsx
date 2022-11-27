import React, { useContext, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import styled from "styled-components";
import { StateContext } from "./context-api/StateProvider";

function Header() {
  const [isClicked, setIsClicked] = useState(false);
  const { userInfo, setIsUserSignIn } = useContext(StateContext);

  function handleShowLogOut() {
    setIsClicked(() => !isClicked);
  }

  function handleLogOut() {
    setIsUserSignIn(false);
  }
  return (
    <NavBar>
      <UnOrderedList>
        <ListItem>
          <Image
            src="https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg"
            alt="disney logo"
          />
        </ListItem>
        <ListItem>
          <HomeIcon />
          <Link href="#">Home</Link>
        </ListItem>
        <ListItem>
          <SearchIcon />
          <Link href="#">Search</Link>
        </ListItem>
        <ListItem>
          <AddIcon />
          <Link href="#">WatchList</Link>
        </ListItem>
        <ListItem>
          <StarIcon />
          <Link href="#">Originals</Link>
        </ListItem>
        <ListItem>
          <MovieIcon />
          <Link href="#">Movies</Link>
        </ListItem>
        <ListItem>
          <LiveTvIcon />
          <Link href="#">Series</Link>
        </ListItem>
      </UnOrderedList>
      <User>
        <UserAvatar
          onClick={handleShowLogOut}
          src={
            userInfo.userPicture
              ? userInfo.userPicture
              : "https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png"
          }
          alt="user logo"
        />

        <ButtonContainer show={isClicked}>
          <Button onClick={handleLogOut}>Log Out</Button>
        </ButtonContainer>
      </User>
    </NavBar>
  );
}

export default Header;

const NavBar = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-image: linear-gradient(180deg, #000000 0%, #fffcfe00 100%);
`;

const UnOrderedList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  display: inline;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 18px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 2px;
    background-color: #ffffff;
    transition: all 0.3s;
  }
  &::before:hover {
    transition: all 0.3s;
    width: 100%;
    color: red;
  }
`;

const Image = styled.img`
  height: 60px;
  padding-right: 30px;
  object-fit: contain;
`;

const User = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`;
const UserAvatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin-right: 15px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  background-color: #0b081c;
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  position: relative;
  display: ${(props) => !props.show && "none"};

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: 23px;
    width: 20px;
    height: 20px;
    background-color: #0b081c;
    transform: rotate(45deg);
  }
`;

const Button = styled.button`
  background-color: #0072d2;
  color: white;
  cursor: pointer;
  white-space: nowrap;
  padding: 8px 35px;
  margin-top: 15px;
  border-radius: 6px;
`;
