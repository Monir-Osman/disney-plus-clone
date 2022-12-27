import { createContext, useState } from "react";

export const StateContext = createContext();

export function StateProvider({ children }) {
  const [isUserSignIn, setIsUserSignIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    userPicture: "",
  });

  const value = {
    isUserSignIn,
    setIsUserSignIn,
    userInfo,
    setUserInfo,
  };

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
}
