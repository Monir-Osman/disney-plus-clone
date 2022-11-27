import { useContext } from "react";
import { StateContext } from "./context-api/StateProvider";
import Header from "./Header";
import Login from "./Login";
function App() {
  const { isUserSignIn, userInfo } = useContext(StateContext);
  console.log(isUserSignIn);
  return (
    <div className="App">
      {!isUserSignIn ? (
        <Login />
      ) : (
        <>
          <Header />
        </>
      )}
    </div>
  );
}

export default App;
