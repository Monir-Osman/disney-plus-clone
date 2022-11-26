import { signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { auth, provider } from "../firebase";
import { StateContext } from "./context-api/StateProvider";
import styled from "styled-components";

export default function Login() {
  const { setIsUserSignIn, setUserInfo } = useContext(StateContext);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setIsUserSignIn(true);
        setUserInfo((prevValue) => {
          return {
            ...prevValue,
            name: result.user.displayName,
            userPicture: result.user.photoURL,
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LoginPage>
      <DisneyLogo
        src="https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg"
        alt="disney logo"
      />
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </LoginPage>
  );
}

const LoginPage = styled.div`
  background-color: rgb(26, 29, 41);
  background-image: url("https://theplugmag.com/wp-content/uploads/2022/04/disney.jpeg");
  background-color: #000000d1;
  background-blend-mode: color;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const DisneyLogo = styled.img`
  width: 400px;
  height: 300px;
  object-fit: contain;
`;

const Button = styled.button`
  background-color: #0072d2;
  color: white;
  font-size: 20px;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  &:hover {
    background-color: #0062d2;
    transition: 0.2ms;
  }
`;
