import React, { useState, useContext } from "react";
import styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { StateContext } from "./context-api/StateProvider";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function MobileHeader() {
  const [isClicked, setIsClicked] = useState(false);
  const { userInfo, setIsUserSignIn } = useContext(StateContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleShowLogOut() {
    setIsClicked(() => !isClicked);
  }

  function handleLogOut() {
    setIsUserSignIn(false);
  }
  return (
    <>
      <MobileHeaderContainer>
        <div
          style={{ marginLeft: "20px", zIndex: 1000 }}
          onClick={() => setIsMenuOpen(() => !isMenuOpen)}
        >
          {isMenuOpen ? (
            <CloseRoundedIcon sx={{ fontSize: 60, color: "#585659", cursor: "pointer" }} />
          ) : (
            <MenuRoundedIcon sx={{ fontSize: 60, color: "#585659", cursor: "pointer" }} />
          )}
        </div>
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
      </MobileHeaderContainer>
      <SideBarMenu open={isMenuOpen}>
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
      </SideBarMenu>
    </>
  );
}

export default MobileHeader;

const MobileHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  background-color: rgb(9, 11, 19);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
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
`;

const UserAvatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin-right: 15px;
  cursor: pointer;
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

const SideBarMenu = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  height: 100vh;
  width: 30vw;
  min-width: fit-content;
  background-color: rgb(9, 11, 19);
  z-index: 1000;
  transition: all 0.4s;
  transform: ${(props) => (props.open ? "translate(0)" : "translate(-500px)")};
`;

const UnOrderedList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 20px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 26px;
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
  &:hover {
    &::before {
      transition: all 0.3s;
      width: 100%;
    }
  }
`;

const Image = styled.img`
  height: 80px;
  padding-right: 30px;
  object-fit: contain;
`;
