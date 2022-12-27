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
import Footer from "./Footer";
function App() {
  const { isUserSignIn } = useContext(StateContext);
  const matches = useMediaQuery("(min-width:960px)");

  function HomePage() {
    return (
      <div>
        {matches ? <Header /> : <MobileHeader />}
        <Carousel />
        <Studios />
        <Movies url={requests.originals} title="Originals" />
        <Movies url={requests.trending} title="Trending" />
        <Movies url={requests.topRated} title="Top rated" />
        <Movies url={requests.action} title="Action" />
        <Movies url={requests.comedy} title="Comedy" />
        <Movies url={requests.horror} title="Horror" />
        <Movies url={requests.Romance} title="Romance" />
        <Movies url={requests.documentaries} title="Documentary" />
        <Footer />
      </div>
    );
  }
  return <div className="App">{!isUserSignIn ? <Login /> : <HomePage />}</div>;
}

export default App;
