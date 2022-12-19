import { useContext } from "react";
import { StateContext } from "./context-api/StateProvider";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import Login from "./Login";
import MobileHeader from "./MobileHeader";
import Carousel from "./Carousel";
import Studios from "./Studios";
import Movies from "./Movies";
import requests from "../requests";
function App() {
  const { isUserSignIn } = useContext(StateContext);
  const matches = useMediaQuery("(min-width:960px)");
  return (
    <div className="App">
      {!isUserSignIn ? (
        <Login />
      ) : (
        <div>
          {matches ? <Header /> : <MobileHeader />}
          <Carousel />
          <Studios />
          <Movies url={requests.originals} title="Originals" />
        </div>
      )}
    </div>
  );
}

export default App;
