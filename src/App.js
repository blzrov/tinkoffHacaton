import React from "react";
import "./App.scss";
import Settings from "./pages/register/Settings.jsx";
import Profile from "./pages/register/Profile.jsx";
import Regist from "./components/Regist";

function App() {
  const [state, setState] = React.useState(1);

  // React.useEffect(() => {
  //   fetch("http://127.0.0.1:8000/getUser/?user_login=Kolya_wolf")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div className="App">
      {/* {state === 1 ? (
        <Profile setPage={setState} />
      ) : state === 4 ? (
        <Settings setPage={setState} />
      ) : null} */}
      <Regist />
    </div>
  );
}

export default App;
