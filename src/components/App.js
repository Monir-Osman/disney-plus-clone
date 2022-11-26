import { useContext } from "react";
import { StateContext } from "./context-api/StateProvider";
import Login from "./Login";
function App() {
  const { isUserSignIn, userInfo } = useContext(StateContext);
  console.log(isUserSignIn);
  return (
    <div className="App">
      {!isUserSignIn ? (
        <Login />
      ) : (
        <div>
          <h1>Welcome{userInfo.name}</h1>
          <img src={userInfo.picture} alt="user pic" />
        </div>
      )}
    </div>
  );
}

export default App;
